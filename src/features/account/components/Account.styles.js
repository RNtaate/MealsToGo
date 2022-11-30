import { ImageBackground, View } from 'react-native';
import styled from 'styled-components/native';
import { Button, TextInput } from 'react-native-paper';
import { Text } from '../../../components/typography/text.component';

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

export const AccountContainer = styled(View)`
  padding: ${({theme}) => theme.space[3]}
  background-color: rgba(255, 255, 255, 0.8);
`;

export const AccountButton = styled(Button).attrs((props) => ({
  labelStyle: {
    fontFamily: props.theme.fonts.body
  }
}))`
  background-color: ${({theme}) => theme.colors.brand.primary};
  padding: ${({theme}) => theme.space[1]};
`;

export const AuthInput = styled(TextInput)`
  width: 300px;
  max-width: 300px;
`;

export const ErrorMessage = styled(Text)`
  max-width: 300px;
`;

export const Title = styled(Text)`
  font-size: ${(props) => props.theme.fontSizes.h5};
`;