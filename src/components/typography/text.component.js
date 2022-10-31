import styled from 'styled-components/native';
import { Text as ReactNativeText } from 'react-native';

const defaultTextStyles = (theme) => {
  return `
    font-family: ${theme.fonts.body};
    font-weight: ${theme.fontWeights.regular};
    color: ${theme.colors.text.primary};
    flex-wrap: wrap;
    margin-top: 0px;
    margin-bottom: 0px;    
  `;
}

const body = (theme) => `
    font-size: ${theme.fontSizes.body};
`;

const hint = (theme) => `
    font-size: ${theme.fontSizes.body};
`;

const error = (theme) => `
    color: ${theme.colors.text.error};
`;

const caption = (theme) => `
    font-size: ${theme.fontSizes.caption};
`;

const label = (theme) => `
    font-family: ${theme.fonts.heading};
    font-size: ${theme.fontSizes.body};
    font-weight: ${theme.fontWeights.medium};
`;

const Variants = {
  body,
  hint,
  error,
  caption,
  label,
}

export const Text = styled(ReactNativeText)`
  ${({theme}) => defaultTextStyles(theme)}
  ${({variant, theme}) => Variants[variant](theme)}
`;

Text.defaultProps = {
  variant: "body",
};