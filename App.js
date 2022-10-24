import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
import { useFonts as oswaldUseFont, Oswald_400Regular } from '@expo-google-fonts/oswald';
import { useFonts as latoUseFont, Lato_400Regular } from '@expo-google-fonts/lato';

import RestaurantsScreen from './src/features/restaurants/screens/RestaurantsScreen';
import { theme } from './src/features/restaurants/infrastructure/theme'

const isAndroid = Platform.OS
export default function App() {

  const [oswaldFontFamily] = oswaldUseFont({ Oswald_400Regular });
  const [latoFontFamily] = latoUseFont({ Lato_400Regular })

  if(!oswaldFontFamily || !latoFontFamily) {
    return null
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantsScreen />
      </ThemeProvider>
      <ExpoStatusBar />
    </>
  );
}