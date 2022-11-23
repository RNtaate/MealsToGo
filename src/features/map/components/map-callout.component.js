import React from 'react';

import { CompactRestaurantInfo } from '../../../components/restaurant/compact-restaurant-info.component';

const MapCalloutComponent = ({restaurant}) => {
  return (
    <CompactRestaurantInfo restaurant={restaurant} />
  )
}

export default MapCalloutComponent;