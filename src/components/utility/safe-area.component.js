import styled from 'styled-components/native';
import { SafeAreaView, StatusBar } from 'react-native';

export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  background-color: ${(props) => props.theme.colors.bg.primary };
  margin-top: ${(props) => props.theme.space[2]}
  ${StatusBar.currentHeight && `padding-top: ${StatusBar.currentHeight}px`};
`;