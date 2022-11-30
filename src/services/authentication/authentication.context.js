import React, { createContext, useState } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';

import { LoginRequest, RegisterRequest } from './authentication.service';
import { auth } from './authentication.service';

export const AuthenticationContext = createContext();

const AuthenticationContextProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  onAuthStateChanged(auth, (usr) => {
    if(usr) {
      setUser(usr);
    }else {
      setUser(null)
    }
  })

  const onLogin = (email, password) => {
    setIsLoading(true)
    setError("")
    LoginRequest(email, password)
    .then((userCredential) => {
      setIsLoading(false)
      setUser(userCredential.user);
    })
    .catch(err => {
      setIsLoading(false)
      setError(err.message.toString())
    })
  }

  const onRegister = (email, password, repeatPassword) => {
    setError("");

    if (!email.length || !password.length || !repeatPassword.length ) {
      setError("Error: Email, Password or Repeat Password can not be empty");
      return
    }

    if(!(password === repeatPassword)) {
      setError("Error: Password doesnot match Repeat Password");
      return;
    }

    setIsLoading(true)
    RegisterRequest(email, password)
    .then((userCredential) => {
      setIsLoading(false)
      setUser(userCredential.user);
    })
    .catch(err => {
      setIsLoading(false)
      setError(err.message.toString())
    })
  }

  const onLogOut = () => {
    signOut(auth);
  }

  return (
    <AuthenticationContext.Provider value={{
      user,
      isLoading,
      error,
      onLogin,
      onRegister,
      onLogOut,
      isAuthenticated: !!user
    }} >
      { children }
    </AuthenticationContext.Provider>
  )
}

export default AuthenticationContextProvider;