import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import type { BottomTabsParamList } from './BottomTabs.type';
import { useBottomTabOptions } from './config';
import { PlaceholderScreen, PostsList } from '@screens';

const Tabs = createBottomTabNavigator<BottomTabsParamList>();

export const BottomTabs: React.FC = () => {
  const bottomTabScreenOptions = useBottomTabOptions();
  return (
    <Tabs.Navigator screenOptions={bottomTabScreenOptions}>
      <Tabs.Screen name="PostsList" component={PostsList} />
      <Tabs.Screen name="Search" component={PlaceholderScreen} />
      <Tabs.Screen name="CreatePost" component={PlaceholderScreen} />
      <Tabs.Screen name="Reels" component={PlaceholderScreen} />
      <Tabs.Screen name="Profile" component={PlaceholderScreen} />
    </Tabs.Navigator>
  );
};
