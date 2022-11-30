import React, { useState, useContext } from 'react';

import { AccountBackground, AccountButton, AccountContainer, AuthInput } from '../components/Account.styles';
import { Spacer } from '../../../components/Spacer/Spacer.component';
import { AuthenticationContext } from '../../../services/authentication/authentication.context';

const LoginScreen = () => {

  const { onLogin, isLoading } = useContext(AuthenticationContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')

  const handleLogin = (email, password) => {
    if(!email.length || !password.length ) {
      console.log("Stuff cannot be empty");
      return
    }

    onLogin(email, password);
  }

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

        <AccountButton
          icon="lock-open-outline"
          mode="contained"
          onPress={() => handleLogin(email, password)}
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