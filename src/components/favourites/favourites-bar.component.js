import React from 'react';
import { View, ScrollView, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

import { Text } from '../typography/text.component';
import { CompactRestaurantInfo } from '../restaurant/compact-restaurant-info.component';
import { Spacer } from '../Spacer/Spacer.component';

const FavouritesWrapper = styled(View)`
  padding: ${({theme}) => `${theme.space[2]} ${theme.space[3]}`};
  margin-bottom: ${({theme}) => theme.space[2]}
`;

const FavouritesBar = ({ favourites, onNavigate }) => {
  if(!favourites.length) {
    return null;
  }

  return(
    <FavouritesWrapper>
      <Spacer position={"bottom"}>
        <Text variant="caption" >Favourites</Text>
      </Spacer>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} fadingEdgeLength={20} >
        {favourites.map((restaurant) => {
          const key = restaurant.name
          return(
            <Spacer position={"horizontal"} size={"small"} key={key} >
              <TouchableOpacity onPress={() => onNavigate("RestaurantsDetails", {restaurant})}>
                <CompactRestaurantInfo restaurant={restaurant}/>
              </TouchableOpacity>
            </Spacer>
          )
        })}
      </ScrollView>
    </FavouritesWrapper>
  )
}

export default FavouritesBar;