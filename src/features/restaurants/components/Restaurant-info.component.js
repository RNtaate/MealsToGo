import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const RestaurantInfo = () => {
  return (
    <View>
      <Text style={styles.restaurantInfoText}>Restuarant Info</Text>
    </View>
  )
}

export default RestaurantInfo;

const styles = StyleSheet.create({
  restaurantInfoText: {
    color: "white"
  }
})