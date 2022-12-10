import React, {useEffect} from 'react';
import {View, Text, Button, FlatList, Image} from 'react-native';
import styles from './styles';
import {palette} from '../../theme/palette';
import {connect} from 'react-redux';
import {getPets} from '../../redux/actions';

const HomePage = connect(
  states => ({app: states.app}),
  dispatch => ({dispatch}),
)(props => {
  const {app, dispatch} = props;
  let {pets} = app;
  const getPet = () => {
    console.log('getPet');
    pets = dispatch(getPets());
  };
  useEffect(() => {
    getPet();
  }, []);
  return (
    <View style={styles.container}>
      <FlatList
        data={pets}
        renderItem={({item}) => (
          <View style={styles.petContainer}>
            <Text>{item.name}</Text>
            <Text>{item.type}</Text>
            <Image source={{uri: item.image}} />
          </View>
        )}
      />
    </View>
  );
});

export {HomePage};
