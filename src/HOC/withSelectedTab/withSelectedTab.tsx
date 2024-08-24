import React from 'react';
import { SvgProps } from 'react-native-svg';

export const withSelectedTab = (
  tabFocused: boolean,
  FocusedComponent: React.FC<SvgProps>,
  BlurredComponent: React.FC<SvgProps>,
) => {
  return tabFocused ? (
    <FocusedComponent width={26} height={26} color="black" />
  ) : (
    <BlurredComponent width={26} height={26} color="black" />
  );
};
