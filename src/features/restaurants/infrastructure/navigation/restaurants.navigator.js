import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

import RestaurantsScreen from '../../screens/RestaurantsScreen';
import { Text } from 'react-native';

const RestaurantStack = createStackNavigator();

const RestaurantDetails = () => {
  return (
    <Text>Something</Text>
  )
}

export const RestaurantsNavigation = () => {
  return (
    <RestaurantStack.Navigator screenOptions={{...TransitionPresets.ModalPresentationIOS, headerShown: false}}>
      <RestaurantStack.Screen name='RestaurantsScreen' component={RestaurantsScreen}/>
      <RestaurantStack.Screen name='RestaurantsDetails' component={RestaurantDetails}/>
    </RestaurantStack.Navigator>
  )
}