import { ImageBackground } from 'react-native';
import styled from 'styled-components/native';

export const AccountBackground = styled(ImageBackground).attrs({
  source: require('../../../../assets/home_bg.jpg'),
})`
  flex: 1;
`;