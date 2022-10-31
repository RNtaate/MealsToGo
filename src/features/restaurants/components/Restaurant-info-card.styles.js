import { View, Image } from 'react-native';
import { Card } from 'react-native-paper';
import styled from 'styled-components/native';

export const RestaurantCard = styled(Card)`
  padding: ${(props) => props.theme.sizes[0]};
  elevation: 5;
`;

export const RatingRow = styled(View)`
flex-direction: row;
padding: ${(props) => `${props.theme.space[1]} ${props.theme.space[0]}`};
`;

export const OpenSection = styled(View)`
flex-direction: row;
margin-left: auto;
align-items: center;
`;

export const Icon = styled(Image)`
  width: 15px;
  height: 15px;
`;
