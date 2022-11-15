import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';

import RestaurantInfoCard from '../components/Restaurant-info-card.component';
import { SafeArea } from '../../../components/utility/safe-area.component';

const DetailsView = styled(View)`
  flex: 1;
  padding: ${({theme}) => theme.space[2]};
`;

export const RestaurantDetailsScreen = ({ route }) => {
  const { restaurant } = route.params
  return (
    <DetailsView>
      <RestaurantInfoCard restaurant={ restaurant }/>
    </DetailsView>
  )
}