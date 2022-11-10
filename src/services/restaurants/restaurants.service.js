import camelize from 'camelize';
import { mocks } from "./mock";
export const restaurantsRequest = (location = "37.7749295,-122.4194155") => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location]
    if(!mock) {
      reject('Not Found');
    }
    resolve(mock);
  })
}

export const restaurantTransform = ({ results }) => {
  const mappedResults = results.map( result => {
    return {
      ...result,
      isClosedTemporarily: result.business_status === 'CLOSED_TEMPORARILY',
      isOpenNow: result.opening_hours && result.opening_hours.open_now
    }
  })
  return camelize(mappedResults);
}