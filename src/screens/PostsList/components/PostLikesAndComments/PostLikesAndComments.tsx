import React from 'react';
import { PostLikesAndCommentsProps } from './PostLikesAndComments.type';
import { Text, TouchableOpacity, View, Image } from 'react-native';
import { useStyles } from 'react-native-unistyles';
import { stylesheet } from './styles';
import { useDescription } from './hooks';
import { DateTimeUtils } from '@utils';

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
        <Image style={styles.avatar} source={{ uri: avatar }} />
        <Text style={styles.commentInput}>Agrega un comentario...</Text>
      </TouchableOpacity>

      <Text style={styles.timeAgo}>{DateTimeUtils.formatPostDate(date)}</Text>
    </View>
  );
};
