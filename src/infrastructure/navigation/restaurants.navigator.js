import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

import RestaurantsScreen from '../../features/restaurants/screens/RestaurantsScreen';
import { RestaurantDetailsScreen } from '../../features/restaurants/screens/Restaurant-detail.screen';

const RestaurantStack = createStackNavigator();

export const RestaurantsNavigation = () => {
  return (
    <RestaurantStack.Navigator screenOptions={{...TransitionPresets.ModalPresentationIOS, headerShown: false}}>
      <RestaurantStack.Screen name='RestaurantsScreen' component={RestaurantsScreen}/>
      <RestaurantStack.Screen name='RestaurantsDetails' component={RestaurantDetailsScreen}/>
    </RestaurantStack.Navigator>
  )
}