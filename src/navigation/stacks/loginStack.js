import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginPage} from '../../screens/Login';
import {SigninPage} from '../../screens/Signin';

const Stack = createNativeStackNavigator();

const LoginStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="login" component={LoginPage} />
      <Stack.Screen name="signin" component={SigninPage} />
    </Stack.Navigator>
  );
};

export {LoginStack};
