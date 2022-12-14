import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginPage} from '../../screens/Login';

const Stack = createNativeStackNavigator();

const SignUpStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="login" component={LoginPage} />
    </Stack.Navigator>
  );
};

export {SignUpStack};
