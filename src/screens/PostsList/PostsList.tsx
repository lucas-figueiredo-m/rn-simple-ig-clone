import React from 'react';
import {
  SafeAreaView,
  FlatList,
  ActivityIndicator,
  View,
  Text,
} from 'react-native';
import { Post } from './components';
import { Screen } from '@components';
import { useStyles } from 'react-native-unistyles';
import { stylesheet } from './styles';
import { useQuery } from '@tanstack/react-query';
import { getPostsList } from '@services';

export const PostsList: React.FC = () => {
  const { styles, theme } = useStyles(stylesheet);
  const { data, isLoading } = useQuery({
    queryKey: ['posts'],
    queryFn: getPostsList,
  });

  if (isLoading) {
    return (
      <Screen>
        <View style={styles.loadingContainer}>
          <ActivityIndicator
            size="large"
            color={theme.colors.primaryForegroundColor}
          />
        </View>
      </Screen>
    );
  }

  if (!data) {
    return (
      <Screen>
        <View style={styles.loadingContainer}>
          <Text>Something went wrong</Text>
        </View>
      </Screen>
    );
  }

  return (
    <Screen>
      <SafeAreaView>
        <FlatList
          data={data}
          keyExtractor={item => item.id}
          renderItem={({ item, index }) => <Post item={item} index={index} />}
          contentContainerStyle={styles.listContainer}
        />
      </SafeAreaView>
    </Screen>
  );
};
