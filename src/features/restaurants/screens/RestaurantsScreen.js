import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import { Searchbar } from 'react-native-paper';
import styled from 'styled-components';

import RestaurantInfoCard from '../components/Restaurant-info-card.component';

const RestaurantScreenWrapper = styled(SafeAreaView)`
  flex: 1;
  background-color: white;
  ${StatusBar.currentHeight && `padding-top: ${StatusBar.currentHeight}px`};
`;

const SearchContainer = styled(View)`
  padding: 10px 20px;
`;

const ListContainer = styled(SearchContainer)`
  flex: 1;
`;

const RestaurantsScreen = () => {
  return (
    <RestaurantScreenWrapper>
      <SearchContainer>
        <Searchbar placeholder='Search'/>
      </SearchContainer>
      <ListContainer>
        <RestaurantInfoCard />
      </ListContainer>
    </RestaurantScreenWrapper>
  )
}

export default RestaurantsScreen;