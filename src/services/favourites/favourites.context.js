import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const FavouritesContext = createContext();

const FavouritesContextProvider = ({ children }) => {

  const [ favourites, setFavourites ] = useState([]);
  const [ error, setError ] = useState("");

  const add = (restauarant) => {
    setFavourites([...favourites, restauarant])
  }

  const remove = ( restaurant ) => {
    const newFavourites = favourites.filter((rest) => rest.placeId !== restaurant.placeId);

    setFavourites(newFavourites);
  }

  const saveFavourites = async (value) => {
    try{
      const storedValue = JSON.stringify(value);
      await AsyncStorage.setItem('@favourites', storedValue);
    }catch(e) {
      setError(e);
    }
  }

  const loadFavourites = async () => {
    try {
      const loadedFavourites = await AsyncStorage.getItem('@favourites');
      if(loadedFavourites) {
        setFavourites(JSON.parse(loadedFavourites));
      }
    }catch(e) {
      setError(e);
    }
  }

  useEffect(() => {
    loadFavourites();
  }, [])

  useEffect(() => {
    saveFavourites(favourites);
  }, [favourites])

  return (
    <FavouritesContext.Provider value={{
      favourites,
      addToFavourites: add,
      removeFromFavourites: remove
    }}>
      { children }
    </FavouritesContext.Provider>
  )
}

export default FavouritesContextProvider;