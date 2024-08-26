import React from 'react';
import { PostLikesAndCommentsProps } from './PostLikesAndComments.type';
import { Text, TouchableOpacity, View } from 'react-native';
import { useStyles } from 'react-native-unistyles';
import { stylesheet } from './styles';
import FastImage from 'react-native-fast-image';
import { useDescription, usePostCreatedAt } from './hooks';

export const PostLikesAndComments: React.FC<PostLikesAndCommentsProps> = ({
  name,
  description,
  likes,
  comments,
  avatar,
  date,
}) => {
  const { styles } = useStyles(stylesheet);
  const {
    numberOfLines,
    setNumberOfLines,
    hasMoreThenOneLine,
    handleTextLayout,
    showCommentModal,
  } = useDescription();

  const formatedDate = usePostCreatedAt(date);

  return (
    <View style={styles.container}>
      <Text style={styles.likes}>{likes} Me gusta</Text>
      <View style={styles.descriptionContainer}>
        <Text
          numberOfLines={numberOfLines}
          onTextLayout={handleTextLayout}
          ellipsizeMode="tail"
          style={styles.description}>
          <Text style={styles.name}>{name}</Text>
          <Text> </Text>
          <Text>{description}</Text>
        </Text>
        {numberOfLines === 1 && hasMoreThenOneLine && (
          <Text
            style={styles.seeMore}
            onPress={() => setNumberOfLines(undefined)}>
            Ver más
          </Text>
        )}
      </View>
      <Text style={styles.comments}>{comments} respuestas · Votar</Text>

      <TouchableOpacity
        onPress={showCommentModal}
        style={styles.avatarContainer}>
        <FastImage style={styles.avatar} source={{ uri: avatar }} />
        <Text style={styles.commentInput}>Agrega un comentario...</Text>
      </TouchableOpacity>

      <Text style={styles.timeAgo}>{formatedDate}</Text>
    </View>
  );
};
