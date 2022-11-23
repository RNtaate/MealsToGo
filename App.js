import 'react-native-gesture-handler';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
import { useFonts as oswaldUseFont, Oswald_400Regular } from '@expo-google-fonts/oswald';
import { useFonts as latoUseFont, Lato_400Regular } from '@expo-google-fonts/lato';

import { theme } from './src/features/restaurants/infrastructure/theme';
import RestaurantContextProvider from './src/services/restaurants/restaurants.context';
import LocationContextProvider from './src/services/location/location.context';
import FavouritesContextProvider from './src/services/favourites/favourites.context';
import AppNavigator from './src/features/restaurants/infrastructure/navigation/app.navigator';

const isAndroid = Platform.OS
export default function App() {

  const [oswaldFontFamily] = oswaldUseFont({ Oswald_400Regular });
  const [latoFontFamily] = latoUseFont({ Lato_400Regular })

  if (!oswaldFontFamily || !latoFontFamily) {
    return null
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <FavouritesContextProvider>
          <LocationContextProvider>
            <RestaurantContextProvider>
              <AppNavigator />
            </RestaurantContextProvider>
          </LocationContextProvider>
        </FavouritesContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style='auto' />
    </>
  );
}