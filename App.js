import { View, Text } from 'react-native';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
import { useFonts as oswaldUseFont, Oswald_400Regular } from '@expo-google-fonts/oswald';
import { useFonts as latoUseFont, Lato_400Regular } from '@expo-google-fonts/lato';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import RestaurantsScreen from './src/features/restaurants/screens/RestaurantsScreen';
import { theme } from './src/features/restaurants/infrastructure/theme';
import { SafeArea } from './src/components/utility/safe-area.component';
import RestaurantContextProvider from './src/services/restaurants/restaurants.context';
import LocationContextProvider from './src/services/location/location.context';

const isAndroid = Platform.OS
export default function App() {

  const TAB_ICONS = {
    Restaurants: "restaurant",
    Map: "map",
    Settings: "settings"
  }

  const [oswaldFontFamily] = oswaldUseFont({ Oswald_400Regular });
  const [latoFontFamily] = latoUseFont({ Lato_400Regular })

  if (!oswaldFontFamily || !latoFontFamily) {
    return null
  }

  const SettingsScreen = () => {
    return (
      <SafeArea>
        <Text>Settings</Text>
      </SafeArea>
    )
  }

  const MapScreen = () => {
    return (
      <SafeArea>
        <Text>Maps</Text>
      </SafeArea>
    )
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
        <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
        <Tab.Screen name="Map" component={MapScreen} />
        <Tab.Screen name='Settings' component={SettingsScreen} />
      </Tab.Navigator>
    )
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <LocationContextProvider>
          <RestaurantContextProvider>
            <NavigationContainer>
              <ScreenTabs />
            </NavigationContainer>
          </RestaurantContextProvider>
        </LocationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style='auto' />
    </>
  );
}