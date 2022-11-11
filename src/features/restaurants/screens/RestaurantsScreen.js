import React, { useContext } from 'react';
import { View, Text, SafeAreaView, StyleSheet, StatusBar, FlatList } from 'react-native';
import { Searchbar, ActivityIndicator, Colors } from 'react-native-paper';
import styled from 'styled-components/native';
import { Spacer } from '../../../components/Spacer/Spacer.component';

import RestaurantInfoCard from '../components/Restaurant-info-card.component';
import { SafeArea } from '../../../components/utility/safe-area.component';

import { RestaurantContext } from '../../../services/restaurants/restaurants.context';

const RestaurantScreenWrapper = styled(SafeArea)``;

const SearchContainer = styled(View)`
  padding: ${(props) => `${props.theme.sizes[0]} ${props.theme.sizes[1]}`};
`;

const ListContainer = styled(SearchContainer)`
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

  const restList = [
    {name: "Rest 1", street: "Another Street"},
    {name: "Rest 2", street: "Another Street"},
    {name: "Rest 3", street: "Another Street"},
    {name: "Rest 4", street: "Another Street"},
  ]

  const {restaurants, isLoading} = useContext(RestaurantContext);
  console.log(JSON.stringify(restaurants, null, 2))

  return (
    <RestaurantScreenWrapper>
      { isLoading ? 
        <ActivityView>
          <ActivityIndicator size={'large'} color={Colors.blue600}/>
        </ActivityView> : 
        <>
          <SearchContainer>
            <Searchbar placeholder='Search'/>
          </SearchContainer>
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
          </ListContainer>
        </> 
      }
    </RestaurantScreenWrapper>
  )
}

export default RestaurantsScreen;