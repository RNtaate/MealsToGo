import React, { useContext, useState, useEffect } from 'react';
import MapView from 'react-native-maps';
import styled from 'styled-components/native';

import SearchComponent from '../components/Search.component';
import { LocationContext } from '../../../services/location/location.context';
import { RestaurantContext } from '../../../services/restaurants/restaurants.context';
import MapCalloutComponent from '../components/map-callout.component';

const Map = styled(MapView)`
  height: 100%;
  width: 100%;
`;

export const MapScreen = ({navigation}) => {

  const { location } = useContext(LocationContext)
  const { restaurants } = useContext(RestaurantContext)
  const [latDelta, setLatDelta] = useState(0)

  const { viewport, lat, lng } = location;

  useEffect(() => {
    const calcLatDelta = viewport.northeast.lat - viewport.southwest.lat;
    setLatDelta(calcLatDelta)
  }, [location, viewport])

  return (
    <>
      <SearchComponent />
      <Map
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.02
        }}
      >
        { restaurants.map(restaurant => {
          return (
            <MapView.Marker 
              key={restaurant.name}
              title={restaurant.name}
              coordinate={{
                latitude: restaurant.geometry.location.lat,
                longitude: restaurant.geometry.location.lng
              }}
            >
              <MapView.Callout 
                onPress={() => navigation.navigate("RestaurantsDetails", {restaurant})}
              >
                <MapCalloutComponent restaurant={restaurant}/>
              </MapView.Callout>
            </MapView.Marker>
          )
        })}
      </Map>
    </>
  )
}