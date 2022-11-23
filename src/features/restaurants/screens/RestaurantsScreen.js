import React, { useContext, useState } from 'react';
import { View, FlatList, TouchableOpacity } from 'react-native';
import { ActivityIndicator, Colors } from 'react-native-paper';
import styled from 'styled-components/native';
import { Spacer } from '../../../components/Spacer/Spacer.component';

import RestaurantInfoCard from '../components/Restaurant-info-card.component';
import SearchComponent from '../components/Search.component';
import { SafeArea } from '../../../components/utility/safe-area.component';
import FavouritesBar from '../../../components/favourites/favourites-bar.component';

import { RestaurantContext } from '../../../services/restaurants/restaurants.context';

const RestaurantScreenWrapper = styled(SafeArea)``;

const ListContainer = styled(View)`
  flex: 1;
  padding: 0;
  margin-top: ${(props) => props.theme.sizes[0]}
`;

const ActivityView = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    paddingHorizontal: 16,
    paddingTop: 5
  }
})``;

const RestaurantsScreen = ({navigation}) => {

  const {restaurants, isLoading} = useContext(RestaurantContext);
  const [ isToggle, setIsToggle ] = useState(false);

  return (
    <RestaurantScreenWrapper>
      <SearchComponent isFavouritesToggle={isToggle} onFavouritesToggle={() => setIsToggle(!isToggle)} />
      { isLoading ? 
        <ActivityView>
          <ActivityIndicator size={'large'} color={Colors.blue600}/>
        </ActivityView> :
        <ListContainer>
          { isToggle && <FavouritesBar />}
          <RestaurantList 
            data={restaurants}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity onPress={() => navigation.navigate("RestaurantsDetails", { restaurant: item })}>
                  <Spacer position={"bottom"} size={"x_large"}>
                    <RestaurantInfoCard restaurant={item}/>
                  </Spacer>
                </TouchableOpacity>
              )
            }}
          />
        </ListContainer>}
    </RestaurantScreenWrapper>
  )
}

export default RestaurantsScreen;