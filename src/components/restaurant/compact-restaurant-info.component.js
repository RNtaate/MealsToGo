import React from 'react';
import { View, Image, Platform } from 'react-native';
import styled from 'styled-components/native';
import { WebView } from 'react-native-webview';

import { Text } from '../typography/text.component';

const Item = styled(View)`
  padding: ${(props) => props.theme.space[1]}
  max-width: 120px;
  align-items: center;
  border-radius: ${(props) => props.theme.space[2]}
`;

const CompactImage = styled(Image)`
  width: 100px;
  height: 100px;
`;

const CompactWebView = styled(WebView)`
  width: 100px;
  height: 100px;
`;

const isAndroid = Platform.OS === 'android';

export const CompactRestaurantInfo = ({ restaurant }) => {
  const FinalImage = isAndroid ? CompactWebView : CompactImage
  return (
    <Item>
      <FinalImage source={{uri: restaurant.photos[0]}} resizeMode="cover" />
      <Text variant="caption">{restaurant.name}</Text>
    </Item>
  )
}