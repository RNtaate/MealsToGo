import React, { createContext, useState, useEffect } from 'react';
import { restaurantsRequest, restaurantTransform } from './restaurants.service';

export const RestaurantContext = createContext()

const RestaurantContextProvider = ({ children }) => {

  const [restaurants, setRestaurants] = useState([]);
  const [ error, setError] = useState("");
  const [ isLoading, setIsLoading ] = useState(false);

  const retrieveRestaurants = () => {
    setIsLoading(true);
    setTimeout(() => {
      restaurantsRequest()
      .then(response => {
        return restaurantTransform(response)
      })
      .then(transformedResults => {
        setIsLoading(false);
        setRestaurants(transformedResults)
      })
      .catch( err => {
        setIsLoading(false);
        setError(err)
      })
    }, 5000)
  }

  useEffect(() => {
    retrieveRestaurants();
  }, [])

  return (
    <RestaurantContext.Provider value={{
      restaurants,
      isLoading,
      error
    }}>
      {children}
    </RestaurantContext.Provider>
  )
}

export default RestaurantContextProvider;