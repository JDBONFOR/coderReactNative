import React, { Component, useState } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

//export default class Card extends Component

export default Card = ({ nombre, apellido, style }) => {
  const [soloNombre, setState] = useState(false);
  const texto = soloNombre ? nombre : `${nombre} ${apellido}`

  handlePress = () => {
    setState(!soloNombre)
  }

  return (
    <View style={[ styles.container, styles.conSombra, style ]}>
      <Text style={[ styles.texto, (!soloNombre) ? styles.textoChico : '' ]}>{texto}</Text>
      <Button title={ soloNombre ? 'Mostrar nombre completo' : 'Mostrar sólo nombre' } onPress={this.handlePress} />
    </View>
  )
  
}

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 200,
    backgroundColor: '#F5FCFF',
    justifyContent: 'space-between',
    marginBottom : 15
  },

  texto: {
    textAlign: 'center',
    fontSize: 48,
    fontWeight: 'bold',
  },

  conSombra: {
    shadowColor: 'black',
    shadowOffset: {
      height: 1,
      width: 1,
    },
    shadowRadius: 1.5,
    shadowOpacity: 0.5,
    elevation: 2,
    padding: 10,
  },

  textoChico: {
    fontSize : 48
  }


})
