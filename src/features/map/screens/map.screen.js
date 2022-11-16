import React from 'react';
import { View, Dimensions } from 'react-native';
import MapView from 'react-native-maps';
import styled from 'styled-components/native';

import SearchComponent from '../components/Search.component';

const Map = styled(MapView)`
  height: 100%;
  width: 100%;
`;

export const MapScreen = () => {
  return (
    <>
      <SearchComponent />
      <Map />
    </>
  )
}