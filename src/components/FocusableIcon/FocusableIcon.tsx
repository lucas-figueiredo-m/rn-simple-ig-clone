import React from 'react';
import { FocusableIconProps } from './FocusableIcon.type';

export const FocusableIcon: React.FC<FocusableIconProps> = ({
  focused = false,
  size = 24,
  FocusedIcon,
  BlurredIcon,
  color,
}) => {
  if (focused) {
    return <FocusedIcon width={size} height={size} color={color} />;
  } else {
    return <BlurredIcon width={size} height={size} color={color} />;
  }
};
