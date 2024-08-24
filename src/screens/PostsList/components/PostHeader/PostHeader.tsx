import React from 'react';
import { Text, View } from 'react-native';
import type { PostHeaderProps } from './PostHeader.type';
import FastImage from 'react-native-fast-image';
import { HeartIcon } from '@assets/icons';
import { useStyles } from 'react-native-unistyles';
import { stylesheet } from './styles';

export const PostHeader: React.FC<PostHeaderProps> = ({
  avatar,
  name,
  location,
}) => {
  const { styles } = useStyles(stylesheet);
  return (
    <View style={styles.container}>
      <FastImage style={styles.avatar} source={{ uri: avatar }} />
      <View style={styles.textsContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.location}>{location}</Text>
      </View>
      <HeartIcon color={'black'} />
    </View>
  );
};
