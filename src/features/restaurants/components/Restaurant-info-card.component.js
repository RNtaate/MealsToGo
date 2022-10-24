import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { Card, Title } from 'react-native-paper';

const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon,
    photos = ["https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg"],
    address = "2344 Some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily
  } = restaurant

  return (
    <Card style={styles.restaurantCard}>
      <Card.Cover source={{ uri: photos[0]}}/>
      <Text style={styles.restText}>{name}</Text>
    </Card>
  )
}

export default RestaurantInfo;

const styles = StyleSheet.create({
  restaurantInfoText: {
    color: "white"
  },
  restaurantCard: {
    padding: 10,
    elevation: 5,
  },
  restText: {
    marginTop: 10
  }
})