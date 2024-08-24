import { createStyleSheet } from 'react-native-unistyles';

export const stylesheet = createStyleSheet(({ fonts, margins, colors }) => ({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: margins.xl,
    width: '100%',
    gap: margins.lg,
  },
  avatar: {
    width: 42,
    height: 42,
    borderRadius: 25,
    backgroundColor: 'red',
  },
  textsContainer: {
    flex: 1,
    gap: margins.md,
  },
  name: {
    fontSize: fonts.size.xxs,
    fontWeight: 'bold',
    color: colors.primaryForegroundColor,
  },
  location: {
    fontSize: fonts.size.xxxs,
    color: colors.secondaryForegroundColor,
  },
}));
