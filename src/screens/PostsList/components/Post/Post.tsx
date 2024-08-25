import React from 'react';
import Animated, { FadeInDown, FadeOutUp } from 'react-native-reanimated';
import type { PostProps } from './Post.type';
import { PostHeader } from '../PostHeader';
import { PostActionButtons } from '../PostActionButtons';
import FastImage from 'react-native-fast-image';
import { useStyles } from 'react-native-unistyles';
import { stylesheet } from './styles';
import { PostLikesAndComments } from '../PostLikesAndComments';

export const Post: React.FC<PostProps> = ({ item, index }) => {
  const { styles } = useStyles(stylesheet);
  return (
    <Animated.View
      entering={FadeInDown.delay(index * 50).springify()}
      exiting={FadeOutUp.delay(index * 50).springify()}>
      <PostHeader
        avatar={item.image}
        name={item.name}
        location={item.location}
      />

      <FastImage style={styles.postImage} source={{ uri: item.image }} />

      <PostActionButtons isLiked={item.liked} isSaved={item.saved} />

      <PostLikesAndComments
        name={item.name}
        description={item.description}
        likes={item.likes}
        comments={item.comments}
        avatar={item.image}
      />
    </Animated.View>
  );
};
