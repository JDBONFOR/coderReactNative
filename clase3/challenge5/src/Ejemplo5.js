import React, { Component } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

import Cuadrado from './Cuadrado'

export default class Ejemplo1 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Cuadrado grande={true} style={styles.uno} />
        <Cuadrado grande={true} style={styles.dos} />
        <Cuadrado grande={true} style={styles.tres} />
        <Cuadrado grande={true} style={styles.cuatro} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 40,
    backgroundColor: '#ddd',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },

  uno: {
    backgroundColor: 'red',
  },

  dos: {
    backgroundColor: 'blue',
  },

  tres: {
    backgroundColor: 'green',
  },

  cuatro: {
    backgroundColor: 'pink',
  },
})
