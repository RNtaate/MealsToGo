import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import { Searchbar } from 'react-native-paper';

import RestaurantInfoCard from '../components/Restaurant-info-card.component';

const RestaurantsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
      <Searchbar placeholder='Search'/>
      </View>
      <View style={styles.listContainer}>
        <RestaurantInfoCard />
      </View>
    </SafeAreaView>
  )
}

export default RestaurantsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
  searchContainer: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  listContainer: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 20
  }
})