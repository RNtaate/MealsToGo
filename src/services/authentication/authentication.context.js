import React, { createContext, useState } from 'react';

import { LoginRequest } from './authentication.service';

export const AuthenticationContext = createContext();

const AuthenticationContextProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const onLogin = (email, password) => {
    setIsLoading(true)
    LoginRequest(email, password)
    .then((userCredential) => {
      setIsLoading(false)
      setUser(userCredential.user);
    })
    .catch(err => {
      setIsLoading(false)
      setError(err)
    })
  }

  return (
    <AuthenticationContext.Provider value={{
      user,
      isLoading,
      error,
      onLogin,
      isAuthenticated: !!user
    }} >
      { children }
    </AuthenticationContext.Provider>
  )
}

export default AuthenticationContextProvider;