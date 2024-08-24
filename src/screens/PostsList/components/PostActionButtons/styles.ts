import { createStyleSheet } from 'react-native-unistyles';

export const stylesheet = createStyleSheet(({ margins }) => ({
  container: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: margins.xl,
  },
  leftIconsContainer: {
    flexDirection: 'row',
    gap: margins.xl,
    alignItems: 'center',
  },
}));
