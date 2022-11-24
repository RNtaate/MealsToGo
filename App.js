import 'react-native-gesture-handler';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
import { useFonts as oswaldUseFont, Oswald_400Regular } from '@expo-google-fonts/oswald';
import { useFonts as latoUseFont, Lato_400Regular } from '@expo-google-fonts/lato';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

import { theme } from './src/infrastructure/theme';
import RestaurantContextProvider from './src/services/restaurants/restaurants.context';
import LocationContextProvider from './src/services/location/location.context';
import FavouritesContextProvider from './src/services/favourites/favourites.context';
import AuthenticationContextProvider from './src/services/authentication/authentication.context';
import AppNavigator from './src/infrastructure/navigation/app.navigator';

const isAndroid = Platform.OS

const firebaseConfig = {
  apiKey: "AIzaSyAYPkx_zOZmfNvQloA9ZkjZh80xtI56_Ns",
  authDomain: "mealstogo-7bc9a.firebaseapp.com",
  projectId: "mealstogo-7bc9a",
  storageBucket: "mealstogo-7bc9a.appspot.com",
  messagingSenderId: "1007401999647",
  appId: "1:1007401999647:web:3a45fe5a0f58724969242a"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

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
                <AppNavigator />
              </RestaurantContextProvider>
            </LocationContextProvider>
          </FavouritesContextProvider>
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style='auto' />
    </>
  );
}