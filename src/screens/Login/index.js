import React from 'react';
import {View, Image} from 'react-native';
import {connect} from 'react-redux';
import {setAccount, signIn} from '../../redux/actions';
import {TextInput, Button, HelperText} from 'react-native-paper';
import styles from './styles';
import {palette} from '../../theme/palette';
import {useNavigation} from '@react-navigation/native';

const mapStateToProps = states => ({app: states.app});
const mapDispatchToProps = dispatch => ({dispatch});

const LoginPage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(props => {
  const {app, dispatch} = props;
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/icon.png')} style={styles.logo} />
      <View style={styles.input_container}>
        <TextInput
          mode="outlined"
          style={styles.input_area}
          outlineColor={palette.blue}
          textColor={palette.blue}
          activeOutlineColor={palette.blue}
          label="E-mail"
          value={app.email}
          onChangeText={d => dispatch(setAccount('email', d))}
        />
        <HelperText
          style={styles.error}
          type="error"
          visible={app.email === ''}>
          E-mail is required
        </HelperText>
        <TextInput
          mode="outlined"
          style={styles.input_area}
          label="Password"
          outlineColor={palette.blue}
          textColor={palette.blue}
          activeOutlineColor={palette.blue}
          secureTextEntry={true}
          value={app.password}
          onChangeText={d => dispatch(setAccount('password', d))}
        />
        <HelperText
          style={styles.error}
          type="error"
          visible={app.password === ''}>
          Password is required
        </HelperText>

        <View style={styles.button_container}>
          <Button
            style={styles.button}
            disabled={app.email === '' || app.password === ''}
            mode="contained"
            onPress={() => dispatch(signIn())}>
            Sign In
          </Button>
          <Button
            compact
            mode="text"
            style={styles.button}
            onPress={() => navigation.navigate('signin')}>
            Create an account
          </Button>
        </View>
      </View>
    </View>
  );
});

export {LoginPage};
