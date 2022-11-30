import React, { useContext } from 'react';
import { Text, Button } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import { RestaurantsNavigation } from './restaurants.navigator';
import { SafeArea } from '../../components/utility/safe-area.component';
import { MapScreen } from '../../features/map/screens/map.screen'
import { AuthenticationContext } from '../../services/authentication/authentication.context';


const SettingsScreen = () => {
  const { onLogOut } = useContext( AuthenticationContext);
  return (
    <SafeArea>
      <Text>Settings</Text>
      <Button
        title='Logout'
        onPress={() => onLogOut() }
      />
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
    <ScreenTabs />
  )
}

export default AppNavigator;