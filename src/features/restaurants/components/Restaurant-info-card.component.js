import React from 'react';
import { Card } from 'react-native-paper';
import { SvgXml } from 'react-native-svg';

import star from '../../../../assets/star';
import open from '../../../../assets/open';
import { Spacer } from '../../../components/Spacer/Spacer.component';
import { Text } from '../../../components/typography/text.component'
import {
  RestaurantCard,
  RatingRow,
  OpenSection,
  Icon
} from './Restaurant-info-card.styles';
import Favourite from '../../../components/favourites/favourite.component';

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
      <Favourite />
      <Card.Cover source={{ uri: photos[0]}}/>
      <Spacer position={"vertical"} size={"medium"}>
        <Text variant={"label"}>{name}</Text>
      </Spacer>
      <RatingRow>
        { ratingArray.map((element, index) => {
          return (
            <SvgXml key={index} xml={star} width={20} height={20}/>
          )
        })}
        <OpenSection>
          {isClosedTemporarily && (
            <Text variant="error">
              CLOSED TEMPORARILY
            </Text>
          )}
          
          <Spacer position={"horizontal"} size={"medium"}>
          {isOpenNow && <SvgXml xml={ open } width={20} height={20} />}
          </Spacer>

          <Icon source={{uri: icon}}/>
        </OpenSection>
      </RatingRow>
      <Text variant="caption">{address}</Text>
    </RestaurantCard>
  )
}

export default RestaurantInfoCard;