import React from 'react';
import styled, { useTheme } from 'styled-components/native';
import { View } from 'react-native';

const sizeVariant = {
  small: 1,
  medium: 2,
  large: 3,
  x_large: 4
}

const positionVariant = {
  top: "margin-top",
  right: "margin-right",
  bottom: "margin-bottom",
  left: "margin-left",
  horizontal: "margin",
  vertical: "margin"
}

const getVariant = (pos, size, theme) => {
  switch(pos){
    case "horizontal": 
      return `${positionVariant[pos]}: 0 ${theme.space[sizeVariant[size]]}`; 
    case "vertical":
      return `${positionVariant[pos]}: ${theme.space[sizeVariant[size]]} 0`
    default: 
      return `${positionVariant[pos]}: ${theme.space[sizeVariant[size]]}`;
  }
}

const SpacerView = styled(View)`
  ${({variant}) => variant}
`;

// e.g margin-left: 4px;
export const Spacer = ({position, size, children}) => {
  const theme = useTheme();
  const variant = getVariant(position, size, theme);

  return (
    <SpacerView variant={variant}>
      {children}
    </SpacerView>
  )
}

Spacer.defaultProps = {
  position: "top",
  size: "small"
}