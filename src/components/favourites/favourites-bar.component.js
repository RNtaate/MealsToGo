import React from 'react';
import { View, ScrollView } from 'react-native';
import styled from 'styled-components/native';

import { Text } from '../typography/text.component';
import { CompactRestaurantInfo } from '../restaurant/compact-restaurant-info.component';
import { Spacer } from '../Spacer/Spacer.component';

const FavouritesWrapper = styled(View)`
  padding: ${({theme}) => `${theme.space[2]} ${theme.space[3]}`};
`;

const FavouritesBar = ({ favourites }) => {
  if(!favourites.length) {
    return null;
  }

  return(
    <FavouritesWrapper>
      <Spacer position={"bottom"}>
        <Text variant="caption" >Favourites</Text>
      </Spacer>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} >
        {favourites.map((restaurant) => {
          return(
            <Spacer position={"horizontal"} size={"small"} >
              <CompactRestaurantInfo restaurant={restaurant}/>
            </Spacer>
          )
        })}
      </ScrollView>
    </FavouritesWrapper>
  )
}

export default FavouritesBar;