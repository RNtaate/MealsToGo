import React from 'react';
import { View } from 'react-native';

import { SafeArea } from '../../../components/utility/safe-area.component';
import { Text } from '../../../components/typography/text.component';

const AccountScreen = () => {
  return (
    <SafeArea>
      <Text variant="body">Account Screen</Text>
    </SafeArea>
  )
}

export default AccountScreen;