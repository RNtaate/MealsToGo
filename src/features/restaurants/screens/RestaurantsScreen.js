import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, StatusBar, FlatList } from 'react-native';
import { Searchbar } from 'react-native-paper';
import styled from 'styled-components/native';
import { Spacer } from '../../../components/Spacer/Spacer.component';

import RestaurantInfoCard from '../components/Restaurant-info-card.component';

const RestaurantScreenWrapper = styled(SafeAreaView)`
  flex: 1;
  background-color: ${(props) => props.theme.colors.bg.primary };
  margin-top: ${(props) => props.theme.space[2]}
  ${StatusBar.currentHeight && `padding-top: ${StatusBar.currentHeight}px`};
`;

const SearchContainer = styled(View)`
  padding: ${(props) => `${props.theme.sizes[0]} ${props.theme.sizes[1]}`};
`;

const ListContainer = styled(SearchContainer)`
  flex: 1;
  padding: 0;
  margin-top: ${(props) => props.theme.sizes[0]}
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


  return (
    <RestaurantScreenWrapper>
      <SearchContainer>
        <Searchbar placeholder='Search'/>
      </SearchContainer>
      <ListContainer>
        <RestaurantList 
          data={restList}
          renderItem={() => {
            return (
              <Spacer position={"bottom"} size={"x_large"}>
                <RestaurantInfoCard />
              </Spacer>
            )
          }}
          keyExtractor={(item) => item.name}
        />
      </ListContainer>
    </RestaurantScreenWrapper>
  )
}

export default RestaurantsScreen;