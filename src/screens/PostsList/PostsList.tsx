import React from 'react';
import { SafeAreaView, FlatList } from 'react-native';
import { Post } from './components';
import { Screen } from '@components';

export const PostsList: React.FC = () => {
  const post = [
    {
      createdAt: '2024-04-17T02:20:22.340Z',
      name: 'Jackie Schinner',
      avatar:
        'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/920.jpg',
      description: 'fault-tolerant',
      likes: 99016,
      image: 'https://loremflickr.com/640/480',
      comments: 39609,
      liked: false,
      saved: true,
      location: 'Bogotá',
      id: '1',
    },
    {
      createdAt: '2024-04-17T02:20:22.340Z',
      name: 'Jackie Schinner',
      avatar:
        'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/920.jpg',
      description: 'fault-tolerant',
      likes: 99016,
      image: 'https://loremflickr.com/640/480',
      comments: 39609,
      liked: true,
      saved: false,
      location: 'Bogotá',
      id: '2',
    },
  ];

  return (
    <Screen>
      <SafeAreaView>
        <FlatList
          data={post}
          keyExtractor={item => item.id}
          renderItem={({ item, index }) => <Post item={item} index={index} />}
        />
      </SafeAreaView>
    </Screen>
  );
};
