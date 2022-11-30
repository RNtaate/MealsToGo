import { ImageBackground, View } from 'react-native';
import styled from 'styled-components/native';
import { Button } from 'react-native-paper';

export const AccountBackground = styled(ImageBackground).attrs({
  source: require('../../../../assets/home_bg.jpg'),
})`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const AccountCover = styled(View)`
  position: absolute;
  background-color: rgba(255, 255, 255, 0.3);
  width: 100%;
  height: 100%;
`;

export const AccountButtonHolder = styled(View)`
  max-width: 300px;
  padding: ${({theme}) => theme.space[3]}
  background-color: rgba(255, 255, 255, 0.8);
`;

export const AccountButton = styled(Button).attrs((props) => ({
  labelStyle: {
    fontFamily: props.theme.fonts.body
  }
}))`
  background-color: ${({theme}) => theme.colors.brand.primary};
  padding: ${({theme}) => theme.space[1]}
`;