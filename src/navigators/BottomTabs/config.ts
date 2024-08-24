import {
  AddOutlineIcon,
  HomeIcon,
  HomeOutlineIcon,
  PersonIcon,
  PersonOutlineIcon,
  SearchIcon,
  SearchOutlineIcon,
  AddIcon,
  PlayIcon,
  PlayOutlineIcon,
} from '@assets/icons';
import { withSelectedTab } from '@HOC';
import type { BottomTabsRouteProp, BottomTabsRoutes } from './BottomTabs.type';
import type { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';

export const bottomTabScreenOptions: ({
  route,
}: {
  route: BottomTabsRouteProp;
}) => BottomTabNavigationOptions = ({ route }) => {
  return {
    tabBarIcon: TabOptionConfig[route.name],
    tabBarLabel: () => null,
    headerShown: false,
  };
};

export const TabOptionConfig: {
  [key in BottomTabsRoutes]: ({
    focused,
  }: {
    focused: boolean;
  }) => React.ReactNode;
} = {
  PostsList: ({ focused }) =>
    withSelectedTab(focused, HomeIcon, HomeOutlineIcon),
  Profile: ({ focused }) =>
    withSelectedTab(focused, PersonIcon, PersonOutlineIcon),
  Search: ({ focused }) =>
    withSelectedTab(focused, SearchIcon, SearchOutlineIcon),
  CreatePost: ({ focused }) =>
    withSelectedTab(focused, AddIcon, AddOutlineIcon),
  Reels: ({ focused }) => withSelectedTab(focused, PlayIcon, PlayOutlineIcon),
};
