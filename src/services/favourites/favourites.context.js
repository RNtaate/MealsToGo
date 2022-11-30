import React, { createContext, useState, useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { AuthenticationContext } from '../authentication/authentication.context';

export const FavouritesContext = createContext();

const FavouritesContextProvider = ({ children }) => {

  const { user } = useContext(AuthenticationContext);

  const [ favourites, setFavourites ] = useState([]);
  const [ error, setError ] = useState("");

  const add = (restauarant) => {
    setFavourites([...favourites, restauarant])
  }

  const remove = ( restaurant ) => {
    const newFavourites = favourites.filter((rest) => rest.placeId !== restaurant.placeId);

    setFavourites(newFavourites);
  }

  const saveFavourites = async (value, uid) => {
    try{
      const storedValue = JSON.stringify(value);
      await AsyncStorage.setItem(`@favourites-${uid}`, storedValue);
    }catch(e) {
      setError(e);
    }
  }

  const loadFavourites = async (uid) => {
    try {
      const loadedFavourites = await AsyncStorage.getItem(`@favourites-${uid}`);
      console.log(`The current favourites are: ${loadedFavourites}`)
      if(loadedFavourites) {
        setFavourites(JSON.parse(loadedFavourites));
      }
    }catch(e) {
      setError(e);
    }
  }

  useEffect(() => {
    if(user) {
      loadFavourites(user.uid);
    }
  }, [user])

  useEffect(() => {
    if(user) {
      saveFavourites(favourites, user.uid);
    }
  }, [favourites, user])

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