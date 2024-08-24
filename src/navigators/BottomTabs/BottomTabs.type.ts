import { RouteProp } from '@react-navigation/native';

export type BottomTabsParamList = {
  PostsList: undefined;
  Profile: undefined;
  Search: undefined;
  CreatePost: undefined;
  Reels: undefined;
};

export type BottomTabsRoutes = keyof BottomTabsParamList;

export type BottomTabsRouteProp = RouteProp<
  BottomTabsParamList,
  BottomTabsRoutes
>;
