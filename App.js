import 'react-native-gesture-handler';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
import { useFonts as oswaldUseFont, Oswald_400Regular } from '@expo-google-fonts/oswald';
import { useFonts as latoUseFont, Lato_400Regular } from '@expo-google-fonts/lato';

import { theme } from './src/infrastructure/theme';
import RestaurantContextProvider from './src/services/restaurants/restaurants.context';
import LocationContextProvider from './src/services/location/location.context';
import FavouritesContextProvider from './src/services/favourites/favourites.context';
import AuthenticationContextProvider from './src/services/authentication/authentication.context';
import Navigation from './src/infrastructure/navigation';

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
        <AuthenticationContextProvider>
          <FavouritesContextProvider>
            <LocationContextProvider>
              <RestaurantContextProvider>
                <Navigation />
              </RestaurantContextProvider>
            </LocationContextProvider>
          </FavouritesContextProvider>
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style='auto' />
    </>
  );
}