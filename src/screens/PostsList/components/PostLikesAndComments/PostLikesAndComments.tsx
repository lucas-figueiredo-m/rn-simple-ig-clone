import React, { useRef, useState } from 'react';
import { PostLikesAndCommentsProps } from './PostLikesAndComments.type';
import {
  NativeSyntheticEvent,
  Text,
  TextLayoutEventData,
  TouchableOpacity,
  View,
} from 'react-native';
import { useStyles } from 'react-native-unistyles';
import { stylesheet } from './styles';
import FastImage from 'react-native-fast-image';

export const PostLikesAndComments: React.FC<PostLikesAndCommentsProps> = ({
  name,
  description,
  likes,
  comments,
  avatar,
}) => {
  const { styles } = useStyles(stylesheet);
  const [numberOfLines, setNumberOfLines] = useState<1 | undefined>(undefined);
  const [hasMoreThenOneLine, setHasMoreThenOneLine] = useState(false);

  const isFirstTimeRendering = useRef(true);

  const handleTextLayout = (e: NativeSyntheticEvent<TextLayoutEventData>) => {
    if (e.nativeEvent.lines.length > 1 && isFirstTimeRendering.current) {
      setHasMoreThenOneLine(true);
      isFirstTimeRendering.current = false;
      setNumberOfLines(1);
    }
  };

  const showCommentModal = () => {};

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
          <Text>
            {description} uisadhfijashdf jasdhfiuasdfhsldjkafhas jkldfhasjkdl
            fhasdjkfha jkdlfh asdjklfhas djklfhaljks dfhasl fhasjkldfhas djklfh
            aslfhasdjkl fhasdjkl fnasdjkfhasd jklfha sdjklf
          </Text>
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
    </View>
  );
};
