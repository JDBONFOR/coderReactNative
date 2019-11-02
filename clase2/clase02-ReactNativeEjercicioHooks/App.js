import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';

import Saludo from './src/components/saludo'

export default function App() {

  const [value, setHidden] = useState(false);
  const [Nombre, setValue] = useState("");

  return (
    <View style={styles.container}>
        <Text>1.- Hacer un componente SALUDO, que tenga una propiedad Nombre y que se muestre en pantalla</Text>
        <Text>2.- Agregar un botón que oculte que permita ocultar el componente Saludo</Text>
        <Text>3.- En el componente Saludo, hacer que pasados 3 segundos muestre en el title de la WEB el mismo Saludo</Text>
        <Text>4.- Agregar un input que permita modificar el nombre de la persona a saludar.</Text>
    
      { !value && (
        <Saludo 
          Nombre = { Nombre }
        />
      )}      

      <TextInput
        style = { styles.input } 
        onChangeText = {(text) => { setValue(text) }}
      />

      <Button
        title = { (!value) ? 'Ocultar' : 'Mostrar' }
        onPress = { () => { setHidden(!value) }}
      />

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
  input: {
    borderWidth: 1,
    borderColor: '#e3e3e3',
    padding: 10,
    minWidth: 300,
  }
});
