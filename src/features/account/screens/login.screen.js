import React from 'react';

import { AccountBackground } from '../components/Account.styles';
import { Text } from '../../../components/typography/text.component';

const LoginScreen = () => {
  return (
    <AccountBackground>
      <Text variant="body" >Login Screen</Text>
    </AccountBackground>
  )
}

export default LoginScreen;