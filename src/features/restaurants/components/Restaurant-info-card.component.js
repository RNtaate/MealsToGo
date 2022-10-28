import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import { Card, Title} from 'react-native-paper';
import styled from 'styled-components/native';
import { SvgXml } from 'react-native-svg';

import star from '../../../../assets/star';
import open from '../../../../assets/open';
import { Spacer } from '../../../components/Spacer/Spacer.component';

const RestaurantCard = styled(Card)`
  padding: ${(props) => props.theme.sizes[0]};
  elevation: 5;
`;

const RestaurantTitle = styled(Text)`
  margin-top: ${(props) => props.theme.sizes[0]};
  font-family: ${(props) => props.theme.fonts.heading};
  margin-bottom: ${(props) => props.theme.space[1]};
`;

const RestaurantAddress = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

const RatingRow = styled(View)`
  flex-direction: row;
  padding: ${(props) => `${props.theme.space[1]} ${props.theme.space[0]}`};
`;

const OpenSection = styled(View)`
  flex-direction: row;
  margin-left: auto;
  align-items: center;
`;

const OpenSvg = styled(SvgXml)`
  margin: ${(props) => `${props.theme.space[0]} ${props.theme.space[2]}`}
`;

// RestaurantInfoCard function starts here ...

const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = ["https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg"],
    address = "2344 Some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true
  } = restaurant

  const ratingArray = Array(Math.round(rating)).fill(undefined);

  return (
    <RestaurantCard>
      <Card.Cover source={{ uri: photos[0]}}/>
      <RestaurantTitle>{name}</RestaurantTitle>
      <RatingRow>
        { ratingArray.map((element, index) => {
          return (
            <SvgXml key={index} xml={star} width={20} height={20}/>
          )
        })}
        <OpenSection>
          {isClosedTemporarily && (
            <Text style={{color: "red", fontFamily: 'Oswald_400Regular'}}>
              CLOSED TEMPORARILY
            </Text>
          )}
          
          <Spacer variant={"horizontal.medium"}/>
          {isOpenNow && <SvgXml xml={ open } width={20} height={20} />}
          <Spacer variant={"horizontal.medium"}/>

          <Image  style={{ width: 15, height: 15 }}source={{uri: icon}}/>
        </OpenSection>
      </RatingRow>
      <RestaurantAddress>{address}</RestaurantAddress>
    </RestaurantCard>
  )
}

export default RestaurantInfoCard;