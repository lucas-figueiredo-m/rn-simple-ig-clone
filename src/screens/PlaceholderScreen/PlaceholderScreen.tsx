import { useRoute } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const PlaceholderScreen: React.FC = () => {
  const route = useRoute();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        This is a Placeholder screen for {route.name}
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
