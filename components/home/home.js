import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';


export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Curso de Corderhouse</Text>
      <Text>Aplicación que será mi aplicación para la Tesis</Text>
      <Button
        title = "Visitarla"
      ></Button> 
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
  title: {
      fontSize : 24,
      color : '#030303'
  }
});
