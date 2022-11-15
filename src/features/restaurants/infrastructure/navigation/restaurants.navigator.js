import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import RestaurantsScreen from '../../screens/RestaurantsScreen';

const RestaurantStack = createStackNavigator();

export const RestaurantsNavigation = () => {
  return (
    <RestaurantStack.Navigator screenOptions={{headerShown: false}}>
      <RestaurantStack.Screen name='RestaurantsScreen' component={RestaurantsScreen}/>
    </RestaurantStack.Navigator>
  )
}