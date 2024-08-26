import React from 'react';
import 'react-native-gesture-handler';
import '@unistyles';

import { NavigationContainer } from '@react-navigation/native';

import { MainStack } from '@navigators';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const client = new QueryClient();

export const App: React.FC = () => {
  return (
    <QueryClientProvider client={client}>
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </QueryClientProvider>
  );
};
