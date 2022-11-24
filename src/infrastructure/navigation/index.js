import React, { useState, useContext } from 'react';
import { NavigationContainer } from "@react-navigation/native";

import AppNavigator from './app.navigator';
import AccountNavigator from './account.navigator';
import { AuthenticationContext } from '../../services/authentication/authentication.context';

const Navigation = () => {

  const { user } = useContext(AuthenticationContext);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <NavigationContainer>
      { isAuthenticated ? <AppNavigator /> : <AccountNavigator />}
    </NavigationContainer>
  )
}

export default Navigation;