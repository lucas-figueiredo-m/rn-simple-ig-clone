import React from 'react';
import { Text, View } from 'react-native';
import type { PostHeaderProps } from './PostHeader.type';
import { Image } from 'react-native';
import { EllipsisIcon } from '@assets/icons';
import { useStyles } from 'react-native-unistyles';
import { stylesheet } from './styles';

export const PostHeader: React.FC<PostHeaderProps> = ({
  avatar,
  name,
  location,
}) => {
  const { styles, theme } = useStyles(stylesheet);
  return (
    <View style={styles.container}>
      <Image style={styles.avatar} source={{ uri: avatar }} />
      <View style={styles.textsContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.location}>{location}</Text>
      </View>
      <EllipsisIcon
        width={24}
        height={24}
        color={theme.colors.primaryForegroundColor}
      />
    </View>
  );
};
