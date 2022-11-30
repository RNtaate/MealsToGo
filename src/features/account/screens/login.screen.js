import React, { useState, useContext, useEffect } from 'react';

import { AccountBackground, AccountButton, AccountContainer, AuthInput, ErrorMessage } from '../components/Account.styles';
import { Spacer } from '../../../components/Spacer/Spacer.component';
import { Text } from '../../../components/typography/text.component';
import { AuthenticationContext } from '../../../services/authentication/authentication.context';

const LoginScreen = () => {

  const { onLogin, isLoading, error } = useContext(AuthenticationContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [loginError, setLoginError] = useState("");

  const handleLogin = (email, password) => {
    setLoginError("");
    if(!email.length || !password.length ) {
      console.log("Stuff cannot be empty");
      setLoginError("Email or Password can not be empty");
      return
    }

    onLogin(email, password);
  }

  useEffect(() => {
    setLoginError(error);
  }, [error])

  return (
    <AccountBackground>
      <AccountContainer>
        <AuthInput
          label="Email"
          onChangeText={(text) => setEmail(text) }
          mode='flat'
          autoCapitalize="none"
          autoComplete="off"
          keyboardType="email-address"
          textContentType="emailAddress"
          value={email}
        />

        <Spacer position="vertical" size="large">
          <AuthInput
            label="Password"
            autoCapitalize={'none'}
            secureTextEntry={true}
            value={password}
            onChangeText={(text) => setPassword(text) }
          />
        </Spacer>

        {loginError ? 
          <Spacer position="bottom" size="large" >
            <ErrorMessage variant="error" >{loginError}</ErrorMessage>
          </Spacer> : null
        }
        <AccountButton
          icon="lock-open-outline"
          mode="contained"
          onPress={() => handleLogin(email.trim(), password.trim())}
          loading={isLoading}
          disabled={isLoading}
        >
          Login
        </AccountButton>
      </AccountContainer>
    </AccountBackground>
  )
}

export default LoginScreen;