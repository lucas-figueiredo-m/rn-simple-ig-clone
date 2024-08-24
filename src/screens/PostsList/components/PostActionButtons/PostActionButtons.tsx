import React from 'react';
import { View } from 'react-native';
import type { PostActionButtonsProps } from './PostActionButtons.type';
import { useStyles } from 'react-native-unistyles';
import { stylesheet } from './styles';
import { ChatIcon, SendIcon } from '@assets/icons';
import { LikedIcon, SavedIcon } from '../PostIcons';

export const PostActionButtons: React.FC<PostActionButtonsProps> = ({
  isLiked,
  isSaved,
}) => {
  const { styles, theme } = useStyles(stylesheet);

  return (
    <View style={styles.container}>
      <View style={styles.leftIconsContainer}>
        <LikedIcon focused={isLiked} />
        <ChatIcon
          color={theme.colors.primaryForegroundColor}
          width={24}
          height={24}
        />
        <SendIcon
          color={theme.colors.primaryForegroundColor}
          width={24}
          height={24}
        />
      </View>
      <SavedIcon focused={isSaved} />
    </View>
  );
};
