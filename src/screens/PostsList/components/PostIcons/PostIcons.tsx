import {
  BookmarkIcon,
  BookmarkOutlineIcon,
  HeartIcon,
  HeartOutlineIcon,
} from '@assets/icons';
import { FocusableIcon } from '@components';
import React from 'react';
import { useStyles } from 'react-native-unistyles';
import type { PostIconProps } from './PostIcons.type';

export const LikedIcon: React.FC<PostIconProps> = ({ focused }) => {
  const { theme } = useStyles();
  return (
    <FocusableIcon
      focused={focused}
      FocusedIcon={HeartIcon}
      BlurredIcon={HeartOutlineIcon}
      color={focused ? 'red' : theme.colors.secondaryForegroundColor}
    />
  );
};

export const SavedIcon: React.FC<PostIconProps> = ({ focused }) => {
  const { theme } = useStyles();
  return (
    <FocusableIcon
      focused={focused}
      FocusedIcon={BookmarkIcon}
      BlurredIcon={BookmarkOutlineIcon}
      color={
        focused
          ? theme.colors.primaryForegroundColor
          : theme.colors.secondaryForegroundColor
      }
    />
  );
};
