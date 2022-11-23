import React,{ useContext } from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { AntDesign } from "@expo/vector-icons";

import { FavouritesContext } from '../../services/favourites/favourites.context';

const FavouriteButton = styled(TouchableOpacity)`
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 9;
`;

const Favourite = ({ restaurant }) => {

  const { favourites, addToFavourites, removeFromFavourites } = useContext(FavouritesContext);

  return (
    <FavouriteButton>
      <AntDesign name='heart' size={24} color="red" />
    </FavouriteButton>
  )
}

export default Favourite;