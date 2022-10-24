import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { Card, Title} from 'react-native-paper';
import styled from 'styled-components/native';

const RestaurantCard = styled(Card)`
  padding: 10px;
  elevation: 5;
`;

const RestaurantTitle = styled(Text)`
  margin-top: 10px;
`;

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
    <RestaurantCard>
      <Card.Cover source={{ uri: photos[0]}}/>
      <RestaurantTitle>{name}</RestaurantTitle>
    </RestaurantCard>
  )
}

export default RestaurantInfoCard;