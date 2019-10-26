import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import TitleComponent from './src/components/title';
import ListComponent from './src/components/list'

export default function App() {
  return (
    <View style={styles.container}>
      <TitleComponent />
      <ListComponent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
