import React from 'react';
import styled from 'styled-components/native';
import { View } from 'react-native';

const VerticalSmall = styled(View)`
  margin-top: ${(props) => props.theme.space[2]};
`;

const VerticalMedium = styled(View)`
  margin-top: ${(props) => props.theme.space[2]};
`;

const VerticalLarge = styled(View)`
  margin-top: ${(props) => props.theme.space[2]};
`;

const HorizontalSmall = styled(View)`
  margin-left: ${(props) => props.theme.space[2]};
`;

const HorizontalMedium = styled(View)`
  margin-left: ${(props) => props.theme.space[2]};
`;

const HorizontalLarge = styled(View)`
  margin-left: ${(props) => props.theme.space[2]};
`;


export const Spacer = ({ variant, theme }) => {
  if( variant == "vertical.large") {
    return <VerticalLarge />
  }

  if (variant == "vertical.medium"){
    return <VerticalMedium />
  }

  if( variant == "horizontal.large") {
    return <HorizontalLarge />
  }

  if (variant == "horizontal.medium"){
    return <HorizontalMedium />
  }

  if( variant == "horizontal.small") {
    return <HorizontalSmall />
  }

  return <VerticalSmall />
}