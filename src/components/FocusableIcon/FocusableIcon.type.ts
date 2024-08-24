import { SvgProps } from 'react-native-svg';

export type FocusableIconProps = Omit<SvgProps, 'width' | 'height'> & {
  focused?: boolean;
  size?: number;
  FocusedIcon: React.FC<SvgProps>;
  BlurredIcon: React.FC<SvgProps>;
  color?: string;
};
