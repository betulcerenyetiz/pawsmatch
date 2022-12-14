import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomePage} from '../../screens/Home';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {palette} from '../../theme/palette';
import ProfilePage from '../../screens/Profile';
import ChatListPage from '../../screens/ChatList';

const Tab = createBottomTabNavigator();
const MainTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          return (
            <Ionicons
              name={
                route.name === 'profile'
                  ? 'person'
                  : route.name === 'home'
                  ? 'home'
                  : 'chatbubbles'
              }
              color={color}
              size={size}
            />
          );
        },
        tabBarActiveTintColor: palette.purple,
        tabBarInactiveTintColor: palette.blue,
        headerShown: false,
      })}>
      <Tab.Screen name="profile" component={ProfilePage} />
      <Tab.Screen name="home" component={HomePage} />
      <Tab.Screen name="chatList" component={ChatListPage} />
    </Tab.Navigator>
  );
};

export default MainTab;
