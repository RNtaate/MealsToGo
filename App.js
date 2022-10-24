import { StatusBar as ExpoStatusBar } from 'expo-status-bar';

import RestaurantsScreen from './src/features/restaurants/screens/RestaurantsScreen';

const isAndroid = Platform.OS
export default function App() {
  return (
    <>
      <RestaurantsScreen />
      <ExpoStatusBar />
    </>
  );
}