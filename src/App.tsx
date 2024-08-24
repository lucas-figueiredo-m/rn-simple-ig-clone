import React from 'react';
import 'react-native-gesture-handler';
import '@unistyles';

import { NavigationContainer } from '@react-navigation/native';

import { MainStack } from '@navigators';

export const App: React.FC = () => {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
};
