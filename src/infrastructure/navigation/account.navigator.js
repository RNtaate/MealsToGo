import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Text, View } from 'react-native';

import AccountScreen from '../../features/account/screens/Account.screen';
import LoginScreen from '../../features/account/screens/login.screen';
import RegisterScreen from '../../features/account/screens/register.screen';

const AccountNavigator = () => {

  const Stack = createStackNavigator();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}} >
      <Stack.Screen name="main" component={AccountScreen} />
      <Stack.Screen name='Login' component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  )
}

export default AccountNavigator;