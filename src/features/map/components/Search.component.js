import React, { useContext, useEffect, useState } from "react";
import { View } from 'react-native';
import { Searchbar } from "react-native-paper";
import styled from 'styled-components/native';

import { LocationContext } from "../../../services/location/location.context";


const SearchContainer = styled(View)`
  padding: ${(props) => `${props.theme.sizes[0]} ${props.theme.sizes[1]}`};
  position: absolute;
  top: 40px;
  width: 100%;
  z-index: 999;
`;

const MapSearchBar = styled(Searchbar).attrs(props => ({
  inputStyle: {
    fontFamily: props.theme.fonts.heading
  }
}))``;

const SearchComponent = () => {

  const {keyWord, locationSearch} = useContext(LocationContext);
  const [ searchKeyWord, setSearchKeyWord] = useState(keyWord);

  const handleSubmit = () => {
    if(searchKeyWord.length) {
      locationSearch(searchKeyWord);
    }
  }

  useEffect(() => {
    setSearchKeyWord(keyWord)
  }, [keyWord])

  return (
    <SearchContainer>
      <MapSearchBar 
        placeholder='Search for a place'
        value={searchKeyWord}
        onChangeText={(text) => {
          setSearchKeyWord(text);
        }}
        onSubmitEditing={handleSubmit}
        style={{elevation: 20}}
        icon="map"
      />
    </SearchContainer>
  )
}

export default SearchComponent;