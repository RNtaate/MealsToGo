import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';

import RestaurantsScreen from './src/features/restaurants/screens/RestaurantsScreen';
import { theme } from './src/features/restaurants/infrastructure/theme'

const isAndroid = Platform.OS
export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantsScreen />
      </ThemeProvider>
      <ExpoStatusBar />
    </>
  );
}