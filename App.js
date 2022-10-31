import { View, Text } from 'react-native';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
import { useFonts as oswaldUseFont, Oswald_400Regular } from '@expo-google-fonts/oswald';
import { useFonts as latoUseFont, Lato_400Regular } from '@expo-google-fonts/lato';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import RestaurantsScreen from './src/features/restaurants/screens/RestaurantsScreen';
import { theme } from './src/features/restaurants/infrastructure/theme'

const isAndroid = Platform.OS
export default function App() {

  const [oswaldFontFamily] = oswaldUseFont({ Oswald_400Regular });
  const [latoFontFamily] = latoUseFont({ Lato_400Regular })

  if (!oswaldFontFamily || !latoFontFamily) {
    return null
  }

  const SettingsScreen = () => {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings</Text>
      </View>
    )
  }

  const MapScreen = () => {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Maps</Text>
      </View>
    )
  }

  const Tab = createBottomTabNavigator();

  const ScreenTabs = () => {
    return (
      <Tab.Navigator screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          switch(route.name){
            case "Restaurants":
              iconName = focused ? 'restaurant' : 'restaurant-outline'
              break;
            case "Map":
              iconName = focused ? 'map' : 'map-outline'
              break;
            case "Settings":
              iconName = focused ? 'settings' : 'settings-outline'
              break;
          }

          return (<Ionicons name={iconName} color={color} size={size} />)
        },
        tabBarActiveTintColor: '#D0421B',
        tabBarInactiveTintColor: 'gray',
      })}>
        <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
        <Tab.Screen name="Map" component={MapScreen} />
        <Tab.Screen name='Settings' component={SettingsScreen} />
      </Tab.Navigator>
    )
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <ScreenTabs />
        </NavigationContainer>
      </ThemeProvider>
      <ExpoStatusBar style='auto' />
    </>
  );
}