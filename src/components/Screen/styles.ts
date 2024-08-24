import { createStyleSheet } from 'react-native-unistyles';

export const stylesheet = createStyleSheet(({ colors }) => ({
  root: {
    backgroundColor: colors.secondaryBackgroundColor,
  },
}));
