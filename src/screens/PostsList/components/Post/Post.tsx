import React from 'react';
import Animated, { FadeInDown, FadeOutUp } from 'react-native-reanimated';
import type { PostProps } from './Post.type';
import { PostHeader } from '../PostHeader';

export const Post: React.FC<PostProps> = ({ item, index }) => {
  return (
    <Animated.View
      entering={FadeInDown.delay(index * 50).springify()}
      exiting={FadeOutUp.delay(index * 50).springify()}>
      <PostHeader
        avatar={item.image}
        name={item.name}
        location={item.location}
      />
    </Animated.View>
  );
};
