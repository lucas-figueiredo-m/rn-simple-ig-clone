import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import type { MainStackParamList } from './MainStack.type';
import { BottomTabs } from '../BottomTabs';

const Stack = createStackNavigator<MainStackParamList>();

export const MainStack: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="BottomTabs" component={BottomTabs} />
    </Stack.Navigator>
  );
};
