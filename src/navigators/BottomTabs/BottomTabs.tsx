import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import type { BottomTabsParamList } from './BottomTabs.type';
import { bottomTabScreenOptions } from './config';
import { PlaceholderScreen } from '@screens';

const Tabs = createBottomTabNavigator<BottomTabsParamList>();

export const BottomTabs: React.FC = () => {
  return (
    <Tabs.Navigator screenOptions={bottomTabScreenOptions}>
      <Tabs.Screen name="PostsList" component={PlaceholderScreen} />
      <Tabs.Screen name="Search" component={PlaceholderScreen} />
      <Tabs.Screen name="CreatePost" component={PlaceholderScreen} />
      <Tabs.Screen name="Reels" component={PlaceholderScreen} />
      <Tabs.Screen name="Profile" component={PlaceholderScreen} />
    </Tabs.Navigator>
  );
};
