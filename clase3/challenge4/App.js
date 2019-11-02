import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Tarjeta from './src/Tarjeta'

const App = () => {

    return (
      <View style={styles.container}>
        <Tarjeta 
          nombre="Juan" 
          apellido="Bonforti"
          style={{
            borderColor: 'red',
            borderWidth: 2
          }}
        />
        <Tarjeta 
          nombre="Cristian" 
          apellido="Escalante"
          style={{
            borderColor: 'blue',
            borderWidth: 2
          }}
        />
      </View>
    )
  
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  marginBottom: {
    marginBottom : 15
  }
})
