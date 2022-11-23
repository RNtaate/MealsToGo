import React, { useContext, useEffect, useState } from "react";
import { View } from 'react-native';
import { Searchbar } from "react-native-paper";
import styled from 'styled-components/native';

import { LocationContext } from "../../../services/location/location.context";


const SearchContainer = styled(View)`
  padding: ${(props) => `${props.theme.sizes[0]} ${props.theme.sizes[1]}`};
`;

const SearchComponent = ({ isFavouritesToggle, onFavouritesToggle }) => {

  const {keyWord, locationSearch} = useContext(LocationContext);
  const [ searchKeyWord, setSearchKeyWord] = useState(keyWord);

  const handleSubmit = () => {
    if(searchKeyWord.length) {
      locationSearch(searchKeyWord);
    }
  }

  useEffect(() => {
    setSearchKeyWord(keyWord);
  }, [keyWord])

  return (
    <SearchContainer>
      <Searchbar 
        placeholder='Search for a place'
        icon={ isFavouritesToggle ? "heart" : "heart-outline"}
        onIconPress={onFavouritesToggle}
        value={searchKeyWord}
        onChangeText={(text) => {
          setSearchKeyWord(text);
        }}
        onSubmitEditing={handleSubmit}
      />
    </SearchContainer>
  )
}

export default SearchComponent;