import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';

import RestaurantInfoCard from '../components/Restaurant-info-card.component';

const DetailsView = styled(View)`
  flex: 1;
  padding: ${({theme}) =>`${theme.space[2]} ${theme.space[3]}`};
`;

export const RestaurantDetailsScreen = ({ route }) => {
  const { item } = route.params
  return (
    <DetailsView>
      <RestaurantInfoCard restaurant={ item }/>
    </DetailsView>
  )
}