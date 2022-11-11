import React from "react";
import { View } from 'react-native';
import { Searchbar } from "react-native-paper";
import styled from 'styled-components/native';


const SearchContainer = styled(View)`
  padding: ${(props) => `${props.theme.sizes[0]} ${props.theme.sizes[1]}`};
`;

const SearchComponent = () => {
  return (
    <SearchContainer>
      <Searchbar placeholder='Search'/>
    </SearchContainer>
  )
}

export default SearchComponent;