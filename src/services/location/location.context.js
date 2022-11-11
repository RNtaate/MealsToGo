import React, { createContext, useState, useEffect } from "react";
import { locationRequest, locationTransform } from "./location.service";

export const LocationContext = createContext();

const LocationContextProvider = ({ children }) => {

  const [ location, setLocation ] = useState(null);
  const [ keyWord, setKeyWord ] = useState("San Francisco");
  const [ isLocationLoading, setIsLocationLoading] = useState(false);
  const [ locationError, setLocationError ] = useState(null);

  const locationSearch = (searchKeyWord = "Antwerp") => {
    setIsLocationLoading(true);
    setKeyWord(searchKeyWord)
    locationRequest(searchKeyWord.toLowerCase())
    .then((response) => {
      return locationTransform(response);
    })
    .then(transformedResult => {
      setIsLocationLoading(false);
      setLocation(transformedResult);
      console.log(transformedResult);
    })
    .catch( err => {
      setIsLocationLoading(false);
      setLocationError(err);
      console.log(err);
    })

  }

  return (
    <LocationContext.Provider value={{
      location,
      keyWord,
      isLocationLoading,
      locationError,
      locationSearch
    }}>
      { children }
    </LocationContext.Provider>
  )
}

export default LocationContextProvider;