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

const restaurantTransform = (result) => {
  const newResult = camelize(result);
  return newResult;
}

restaurantsRequest()
  .then(response => {
    return restaurantTransform(response)
  })
  .then(transformedResult => {
    console.log(JSON.stringify(transformedResult, null, 2));
  })
  .catch( err => {
    console.log("Error", err)
  });