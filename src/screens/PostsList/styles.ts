import { createStyleSheet } from 'react-native-unistyles';

export const stylesheet = createStyleSheet(({ margins }) => ({
  listContainer: {
    paddingBottom: margins.xxl,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
}));
