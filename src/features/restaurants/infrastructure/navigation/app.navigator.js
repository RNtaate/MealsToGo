import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import { RestaurantsNavigation } from './restaurants.navigator';
import { SafeArea } from '../../../../components/utility/safe-area.component';
import { MapScreen } from '../../../map/screens/map.screen';


const SettingsScreen = () => {
  return (
    <SafeArea>
      <Text>Settings</Text>
    </SafeArea>
  )
}

const AppNavigator = () => {

  const TAB_ICONS = {
    Restaurants: "restaurant",
    Map: "map",
    Settings: "settings"
  }

  const createTabBarIcon = (iconName, focused, color, size) => {
    return (
      <Ionicons name={focused ? TAB_ICONS[iconName] : `${TAB_ICONS[iconName]}-outline`} color={color} size={size} />
    )
  }

  const createScreenOptions = ({route}) => {
    return {
      headerShown: false,
      tabBarIcon: ({ focused, color, size }) => createTabBarIcon(route.name, focused, color, size),
      tabBarActiveTintColor: '#D0421B',
      tabBarInactiveTintColor: 'gray',
    }
  }

  const Tab = createBottomTabNavigator();

  const ScreenTabs = () => {
    return (
      <Tab.Navigator screenOptions={createScreenOptions}>
        <Tab.Screen name="Restaurants" component={RestaurantsNavigation} />
        <Tab.Screen name="Map" component={MapScreen} />
        <Tab.Screen name='Settings' component={SettingsScreen} />
      </Tab.Navigator>
    )
  }

  return (
    <NavigationContainer>
      <ScreenTabs />
    </NavigationContainer>
  )
}

export default AppNavigator;