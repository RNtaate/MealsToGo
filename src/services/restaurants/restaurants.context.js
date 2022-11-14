import React, { createContext, useState, useEffect, useContext } from 'react';

import { LocationContext } from '../location/location.context';
import { restaurantsRequest, restaurantTransform } from './restaurants.service';

export const RestaurantContext = createContext()

const RestaurantContextProvider = ({ children }) => {

  const [restaurants, setRestaurants] = useState([]);
  const [ error, setError] = useState("");
  const [ isLoading, setIsLoading ] = useState(false);
  const {location} = useContext(LocationContext);

  const retrieveRestaurants = (locString) => {
    setIsLoading(true);
    setRestaurants([]);
    setTimeout(() => {
      restaurantsRequest(locString)
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
    }, 3000)
  }

  useEffect(() => {
    if(location) {
      const locationString = `${location.lat},${location.lng}`
      retrieveRestaurants(locationString);
    }
  }, [location]) // Note: If you don't use the location dependency here, the original application load won't fire retrieval of restaurants, because it never detects the change in location fired in LocationContext, because this onMount useEffect, already fired with a null location. So the change of location made by LocationContext's useEffect never refires the above useEffect.

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