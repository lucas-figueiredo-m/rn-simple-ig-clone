import React, { PropsWithChildren } from 'react';
import { useStyles } from 'react-native-unistyles';
import { stylesheet } from './styles';
import { View } from 'react-native';

export const Screen: React.FC<PropsWithChildren> = ({ children }) => {
  const { styles } = useStyles(stylesheet);

  return <View style={styles.root}>{children}</View>;
};
