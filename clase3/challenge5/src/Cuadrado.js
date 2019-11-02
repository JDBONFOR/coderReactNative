import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'

export default class Cuadrado extends Component {
  render() {
    return <View style={[styles.cuadrado, this.props.grande && styles.grande, this.props.style]} />
  }
}

const styles = StyleSheet.create({
  cuadrado: {
    width: 50,
    height: 50,
    borderRadius: 5,
    margin: 2,
  },

  grande: {
    width: 100,
    height: 100,
  },
})
