import { useRef, useState } from 'react';
import type { NativeSyntheticEvent, TextLayoutEventData } from 'react-native';

export const useDescription = () => {
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

  return {
    numberOfLines,
    hasMoreThenOneLine,
    setNumberOfLines,
    handleTextLayout,
    showCommentModal,
  };
};
