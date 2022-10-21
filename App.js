import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Platform, StatusBar } from 'react-native';

const isAndroid = Platform.OS
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ExpoStatusBar />
      <Text>Meals To Go App</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#353',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  }
})