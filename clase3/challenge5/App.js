import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import EjemploFlex from './src/EjemploFlex'
import Ejemplo1 from './src/Ejemplo1'
import Ejemplo2 from './src/Ejemplo2'
import Ejemplo3 from './src/Ejemplo3'
import Ejemplo4 from './src/Ejemplo4'
import Ejemplo5 from './src/Ejemplo5'
import Ejemplo6 from './src/Ejemplo6'
import Ejemplo7 from './src/Ejemplo7'
import Ejemplo8 from './src/Ejemplo8'

export default class App extends React.Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.alto}>
          <Ejemplo1 />
        </View>
        <View style={styles.alto}>
          <Ejemplo2 />
        </View>
        <View style={styles.alto}>  
          <Ejemplo3 />
        </View>
        <View style={styles.alto}>  
          <Ejemplo4 />
        </View>
        <View style={styles.alto}>  
          <Ejemplo5 />
        </View>
        <View style={styles.alto}>  
          <Ejemplo6 />
        </View>
        <View style={styles.alto}>    
          <Ejemplo7 />
        </View>
        <View style={styles.alto}>  
          <Ejemplo8 />
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  alto: {
    height : 300
  }
})
