import React from 'react';
import { TabIconProps } from './TabIcons.type';
import { FocusableIcon } from '@components';
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
import { useStyles } from 'react-native-unistyles';

export const HomeTabIcon: React.FC<TabIconProps> = ({ focused }) => {
  const { theme } = useStyles();
  return (
    <FocusableIcon
      focused={focused}
      FocusedIcon={HomeIcon}
      BlurredIcon={HomeOutlineIcon}
      color={theme.colors.secondaryForegroundColor}
    />
  );
};

export const ProfileTabIcon: React.FC<TabIconProps> = ({ focused }) => {
  const { theme } = useStyles();
  return (
    <FocusableIcon
      focused={focused}
      FocusedIcon={PersonIcon}
      BlurredIcon={PersonOutlineIcon}
      color={theme.colors.secondaryForegroundColor}
    />
  );
};

export const SearchTabIcon: React.FC<TabIconProps> = ({ focused }) => {
  const { theme } = useStyles();
  return (
    <FocusableIcon
      focused={focused}
      FocusedIcon={SearchIcon}
      BlurredIcon={SearchOutlineIcon}
      color={theme.colors.secondaryForegroundColor}
    />
  );
};

export const AddTabIcon: React.FC<TabIconProps> = ({ focused }) => {
  const { theme } = useStyles();
  return (
    <FocusableIcon
      focused={focused}
      FocusedIcon={AddIcon}
      BlurredIcon={AddOutlineIcon}
      color={theme.colors.secondaryForegroundColor}
    />
  );
};

export const ReelsTabIcon: React.FC<TabIconProps> = ({ focused }) => {
  const { theme } = useStyles();
  return (
    <FocusableIcon
      focused={focused}
      FocusedIcon={PlayIcon}
      BlurredIcon={PlayOutlineIcon}
      color={theme.colors.secondaryForegroundColor}
    />
  );
};
