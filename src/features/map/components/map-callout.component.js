import React from 'react';
import { View, Image } from 'react-native';
import { Card } from 'react-native-paper';
import styled from 'styled-components/native';

import { Text } from '../../../components/typography/text.component';

const MarkerImage = styled(Image)`
  width: 100px;
  height: 100px;
`;

const Item = styled(View)`
  max-width: 120px;
  align-items: center;
  border-radius: ${(props) => props.theme.space[2]}
`;

const MapCalloutComponent = ({restaurant}) => {
  return (
    <Item>
      <MarkerImage source={{uri: restaurant.photos[0]}} />
      <Text variant="caption">{restaurant.name}</Text>
    </Item>
  )
}

export default MapCalloutComponent;