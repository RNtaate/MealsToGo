import React from 'react';

import { AccountBackground, AccountButton, AccountContainer, AuthInput } from '../components/Account.styles';
import { Spacer } from '../../../components/Spacer/Spacer.component';

const LoginScreen = () => {
  return (
    <AccountBackground>
      <AccountContainer>
        <AuthInput
          label="Email"
          onChangeText={() => null }
          mode='flat'
          autoCapitalize="none"
          autoComplete="off"
          keyboardType="email-address"
          textContentType="emailAddress"
        />

        <Spacer position="vertical" size="large">
          <AuthInput
            label="Password"
            autoCapitalize={'none'}
            secureTextEntry={true}
          />
        </Spacer>

        <AccountButton icon="lock-open-outline" mode="contained" onPress={() => null} >
          Login
        </AccountButton>
      </AccountContainer>
    </AccountBackground>
  )
}

export default LoginScreen;