import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Text, View } from 'react-native';

import { SafeArea } from '../../components/utility/safe-area.component';
import AccountScreen from '../../features/account/screens/Account.screen';

const LoginScreen = () => {
  return(
    <SafeArea>
      <Text>Login Screen</Text>
    </SafeArea>
  )
}

const AccountNavigator = () => {

  const Stack = createStackNavigator();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}} >
      <Stack.Screen name="main" component={AccountScreen} />

      <Stack.Screen name='Login' component={LoginScreen} />
    </Stack.Navigator>
  )
}

export default AccountNavigator;