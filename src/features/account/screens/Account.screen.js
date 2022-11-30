import React from 'react';
import { Button } from 'react-native-paper';

import { AccountBackground, AccountCover, AccountButtonHolder, AccountButton } from '../components/Account.styles';
import { Spacer } from '../../../components/Spacer/Spacer.component';

const AccountScreen = () => {
  return (
    <AccountBackground>
      <AccountCover />
      <AccountButtonHolder>
        <AccountButton icon="account-lock-open-outline" mode="contained" onPress={() => null} >
          Login
        </AccountButton>

        <Spacer position="top" size="large" >
          <AccountButton icon="account-plus-outline" mode="contained" onPress={() => null} >
            Sign Up
          </AccountButton>
        </Spacer>
      </AccountButtonHolder>
    </AccountBackground>
  )
}

export default AccountScreen;