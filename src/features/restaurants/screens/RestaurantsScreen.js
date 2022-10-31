import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, StatusBar, FlatList } from 'react-native';
import { Searchbar } from 'react-native-paper';
import styled from 'styled-components/native';

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
`;

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
        <FlatList 
          data={restList}
          renderItem={RestaurantInfoCard}
          keyExtractor={(item) => item.name}
          contentContainerStyle={{paddingHorizontal: 16}}
        />
      </ListContainer>
    </RestaurantScreenWrapper>
  )
}

export default RestaurantsScreen;