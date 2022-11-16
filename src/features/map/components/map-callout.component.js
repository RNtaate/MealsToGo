import React from 'react';
import { View, Image, Platform } from 'react-native';
import { Card } from 'react-native-paper';
import styled from 'styled-components/native';
import { WebView } from 'react-native-webview';

import { Text } from '../../../components/typography/text.component';

const MarkerImage = styled(Image)`
  width: 100px;
  height: 100px;
`;

const MarkerWebView = styled(WebView)`
  width: 100px;
  height: 100px;
`;

const Item = styled(View)`
  padding: ${(props) => props.theme.space[1]}
  max-width: 120px;
  align-items: center;
  border-radius: ${(props) => props.theme.space[2]}
`;

const isAndroid = Platform.OS === 'android';

const MapCalloutComponent = ({restaurant}) => {
  const FinalImage = isAndroid ? MarkerWebView : MarkerImage
  return (
    <Item>
      <FinalImage source={{uri: restaurant.photos[0]}} resizeMode="cover" />
      <Text variant="caption">{restaurant.name}</Text>
    </Item>
  )
}

export default MapCalloutComponent;