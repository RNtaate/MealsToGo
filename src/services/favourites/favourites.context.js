import React, { createContext, useState } from 'react';

const FavouritesContext = createContext();

const FavouritesContextProvider = ({ children }) => {

  const [ favourites, setFavourites ] = useState([]);

  const add = (restauarant) => {
    setFavourites([...favourites, restauarant])
  }

  const remove = ( restaurant ) => {
    const newFavourites = favourites.filter((rest) => rest.placeId !== restaurant.placeId);

    setFavourites(newFavourites);
  }

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