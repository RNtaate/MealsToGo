import React, { useContext } from 'react';
import { View, FlatList } from 'react-native';
import { ActivityIndicator, Colors } from 'react-native-paper';
import styled from 'styled-components/native';
import { Spacer } from '../../../components/Spacer/Spacer.component';

import RestaurantInfoCard from '../components/Restaurant-info-card.component';
import SearchComponent from '../components/Search.component';
import { SafeArea } from '../../../components/utility/safe-area.component';

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

const RestaurantsScreen = (props) => {

  const {restaurants, isLoading} = useContext(RestaurantContext);

  return (
    <RestaurantScreenWrapper>
      <SearchComponent />
      { isLoading ? 
        <ActivityView>
          <ActivityIndicator size={'large'} color={Colors.blue600}/>
        </ActivityView> :
        <ListContainer>
          <RestaurantList 
            data={restaurants}
            renderItem={({ item }) => {
              return (
                <Spacer position={"bottom"} size={"x_large"}>
                  <RestaurantInfoCard restaurant={item}/>
                </Spacer>
              )
            }}
          />
        </ListContainer>}
    </RestaurantScreenWrapper>
  )
}

export default RestaurantsScreen;