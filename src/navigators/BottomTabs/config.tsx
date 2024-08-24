import React from 'react';
import {
  AddTabIcon,
  HomeTabIcon,
  ProfileTabIcon,
  ReelsTabIcon,
  SearchTabIcon,
} from './components';
import type { BottomTabsRouteProp, BottomTabsRoutes } from './BottomTabs.type';
import type { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { useStyles } from 'react-native-unistyles';

export const useBottomTabOptions = (): (({
  route,
}: {
  route: BottomTabsRouteProp;
}) => BottomTabNavigationOptions) => {
  const { theme } = useStyles();
  return ({ route }) => ({
    tabBarIcon: TabOptionConfig[route.name],
    tabBarLabel: () => null,
    headerShown: false,
    tabBarStyle: {
      backgroundColor: theme.colors.primaryBackgroundColor,
    },
  });
};

export const TabOptionConfig: {
  [key in BottomTabsRoutes]: ({ focused }: { focused: boolean }) => JSX.Element;
} = {
  PostsList: ({ focused }) => <HomeTabIcon focused={focused} />,
  Profile: ({ focused }) => <ProfileTabIcon focused={focused} />,
  Search: ({ focused }) => <SearchTabIcon focused={focused} />,
  CreatePost: ({ focused }) => <AddTabIcon focused={focused} />,
  Reels: ({ focused }) => <ReelsTabIcon focused={focused} />,
};
