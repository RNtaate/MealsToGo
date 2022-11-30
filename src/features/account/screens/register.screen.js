import React, { useState, useContext } from 'react';

import { Text } from '../../../components/typography/text.component';
import { AuthInput, AccountBackground, AccountContainer, AccountCover, Title, AccountButton, ErrorMessage } from '../components/Account.styles';
import { Spacer } from '../../../components/Spacer/Spacer.component';
import { AuthenticationContext } from '../../../services/authentication/authentication.context';

const RegisterScreen = ({ navigation }) => {

  const {isLoading, error, onRegister} = useContext(AuthenticationContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')
  const [registerError, setRegisterError] = useState("");

  return (
    <AccountBackground>
      <AccountCover />
      <Title>
        MEALS TO GO
      </Title>
      <Spacer position="vertical" size="large" >
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

          <Spacer position="bottom" size="large">
            <AuthInput
              label="Repeat Password"
              autoCapitalize={'none'}
              secureTextEntry={true}
              value={repeatPassword}
              onChangeText={(text) => setRepeatPassword(text) }
            />
          </Spacer>

          {error ? 
            <Spacer position="bottom" size="large" >
              <ErrorMessage variant="error" >{error}</ErrorMessage>
            </Spacer> : null
          }
          <AccountButton
            icon="account-plus-outline"
            mode="contained"
            onPress={() => onRegister(email, password, repeatPassword)}
            loading={isLoading}
            disabled={isLoading}
          >
            Register
          </AccountButton>
        </AccountContainer>
      </Spacer>
      <AccountButton
        mode="contained"
        onPress={() => navigation.goBack()}
      >
        BACK
      </AccountButton>
    </AccountBackground>
  )
}

export default RegisterScreen;