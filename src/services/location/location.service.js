import camelize from "camelize";
import { locations } from "./location.mock";

export const locationRequest = ( searchTerm ) => {
  return new Promise ((resolve, reject) => {
    const locationMocks = locations[searchTerm];
    if(!locationMocks) {
      reject("Place not found");
    }
    resolve(locationMocks)
  })
}

export const locationTransform = (result) => {
  const formattedResults = camelize(result);
  const { geometry = {} } = formattedResults.results[0];
  const { lng, lat } = geometry.location;
  return {lng, lat}
}