import 'react-native-gesture-handler';
import { useEffect, useState } from 'react';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
import { useFonts as oswaldUseFont, Oswald_400Regular } from '@expo-google-fonts/oswald';
import { useFonts as latoUseFont, Lato_400Regular } from '@expo-google-fonts/lato';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

import { theme } from './src/features/restaurants/infrastructure/theme';
import RestaurantContextProvider from './src/services/restaurants/restaurants.context';
import LocationContextProvider from './src/services/location/location.context';
import FavouritesContextProvider from './src/services/favourites/favourites.context';
import AppNavigator from './src/features/restaurants/infrastructure/navigation/app.navigator';
import { Text } from './src/components/typography/text.component';
import { SafeArea } from './src/components/utility/safe-area.component';

const isAndroid = Platform.OS
export default function App() {

  const firebaseConfig = {
    apiKey: "AIzaSyAYPkx_zOZmfNvQloA9ZkjZh80xtI56_Ns",
    authDomain: "mealstogo-7bc9a.firebaseapp.com",
    projectId: "mealstogo-7bc9a",
    storageBucket: "mealstogo-7bc9a.appspot.com",
    messagingSenderId: "1007401999647",
    appId: "1:1007401999647:web:3a45fe5a0f58724969242a"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const[isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {

    setTimeout(() => {
      signInWithEmailAndPassword(auth, "original@marvel.com", "123456")
      .then((userCredential) => {
        console.log(userCredential.user);
        setIsAuthenticated(true)
      })
      .catch((err) => {
        console.log(err);
        setIsAuthenticated(false);
      })
    }, 3000)
  }, [])

  const [oswaldFontFamily] = oswaldUseFont({ Oswald_400Regular });
  const [latoFontFamily] = latoUseFont({ Lato_400Regular })

  if (!oswaldFontFamily || !latoFontFamily) {
    return null
  }

  if(!isAuthenticated) {
    return (
      <ThemeProvider theme={theme} >
        <SafeArea>
          <Text variant="caption" >Checking Your Authentication Status ...</Text>
        </SafeArea>
      </ThemeProvider>
    )
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