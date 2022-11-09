import React, { createContext } from 'react';

export const RestaurantContext = createContext()

const RestaurantContextProvider = ({ children }) => {
  return (
    <RestaurantContext.Provider value={{
      restaurants: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    }}>
      {children}
    </RestaurantContext.Provider>
  )
}

export default RestaurantContextProvider;