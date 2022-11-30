import React from 'react';
import { Button } from 'react-native-paper';

import { AccountBackground, AccountCover, AccountButton, AccountContainer, Title } from '../components/Account.styles';
import { Spacer } from '../../../components/Spacer/Spacer.component';

const AccountScreen = ({ navigation }) => {
  return (
    <AccountBackground>
      <AccountCover />
      <Spacer position={'bottom'} size={'medium'} >
        <Title>
          MEALS TO GO
        </Title>
      </Spacer>
      <AccountContainer>
        <AccountButton icon="lock-open-outline" mode="contained" onPress={() => navigation.navigate("Login")} >
          Login
        </AccountButton>

        <Spacer position="top" size="large" >
          <AccountButton icon="account-plus-outline" mode="contained" onPress={() => null} >
            Sign Up
          </AccountButton>
        </Spacer>
      </AccountContainer>
    </AccountBackground>
  )
}

export default AccountScreen;