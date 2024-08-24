import type { NavigatorScreenParams } from '@react-navigation/native';
import type { BottomTabsParamList } from '../BottomTabs';

export type MainStackParamList = {
  BottomTabs: NavigatorScreenParams<BottomTabsParamList>;
};

export type MainsStackRoutes = keyof MainStackParamList;
