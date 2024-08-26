import { createStyleSheet } from 'react-native-unistyles';

export const stylesheet = createStyleSheet(({ margins, colors, fonts }) => ({
  container: {
    paddingHorizontal: margins.xl,
    gap: margins.lg,
  },
  likes: {
    fontWeight: fonts.weight.bold,
    fontSize: fonts.size.xxxs,
    color: colors.primaryForegroundColor,
  },
  description: {
    fontSize: fonts.size.xxxs,
    color: colors.primaryForegroundColor,
    flex: 1,
  },
  name: {
    fontWeight: fonts.weight.bold,
  },
  comments: {
    color: colors.secondaryForegroundColor,
    fontSize: fonts.size.exs,
    fontWeight: fonts.weight.semibold,
  },

  avatarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: margins.xl,
  },
  avatar: {
    width: 20,
    height: 20,
    borderRadius: 10,
  },
  commentInput: {
    color: colors.secondaryForegroundColor,
    fontSize: fonts.size.exs,
    fontWeight: fonts.weight.semibold,
  },

  descriptionContainer: {
    flexDirection: 'row',
    gap: margins.xl,
    width: '100%',
  },

  seeMore: {
    color: colors.secondaryForegroundColor,
    fontSize: fonts.size.exs,
    fontWeight: fonts.weight.medium,
  },

  timeAgo: {
    color: colors.secondaryForegroundColor,
    fontSize: fonts.size.exs,
    fontWeight: fonts.weight.medium,
  },
}));
