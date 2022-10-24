import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { Card, Title} from 'react-native-paper';
import styled from 'styled-components/native';

const RestaurantCard = styled(Card)`
  padding: ${(props) => props.theme.sizes[0]};
  elevation: 5;
`;

const RestaurantTitle = styled(Text)`
  margin-top: ${(props) => props.theme.sizes[0]};
  font-family: ${(props) => props.theme.fonts.heading}
`;

const RestaurantAddress = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
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
      <RestaurantAddress>{address}</RestaurantAddress>
    </RestaurantCard>
  )
}

export default RestaurantInfoCard;