import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import configureFirebase from './lib/FirebaseConfig';

import { Notifications } from 'expo'

import * as firebase from 'firebase'
import "firebase/firestore"
import registerForPushNotificationsAsync from './lib/FirebasePushNotifications';

// Importo firebase
configureFirebase();

const App = () => {
  const [ usuarios, setUsuario ] = useState({})
  const [ notification, setNotification ] = useState({});

  // Agregando un elemento a FireStore
  const addToDataStore = () => {
    const db = firebase.firestore()
    db.collection("usuarios").add({
      nombre : "Cristian",
      apellido: "Escalante",
      dni: "31999444",
    })
  }

  // Al iniciar la App, genero y guardo el evento de notificacion de cambios en Firestore
  useEffect(() => {
    const db = firebase.firestore();

    let unsubcribe = db.collection("usuarios").onSnapshot( (snapshot) => {
      //console.log("snapshot", snapshot);
      snapshot.docChanges().forEach(function(change) {
        //console.log("change", change)
        if (change.type === "added" || change.type === "modified") {
          //console.log("Added or Modified", change);

          // Agrego al estado, los usuarios, mantengo lo anterior
          setUsuario( value => ({
            ...value,
            [change.doc.id] : change.doc.data()
          }))

          /** Objeto que devolveria usuario es 
           * 
           * {
           *  "idPropioFirebase" : {
           *    apellido: ...,
           *    nombre: ...,
           *    dni: ...
           *  },
           *  "idPropioFirebase" : {
           *    apellido: ...,
           *    nombre: ...,
           *    dni: ...
           *  }
           * }
           * 
           * Si deseo luego iterar este elemento
           * Object.key(usuarios).map( key => {
           *  const usuario = usuarios[key]
           * 
           *  return <Text>{ usuario.nombre }</Text>
           * })
           * 
           * 
           */

        }
        if (change.type === "removed") {
          //console.log("Removed", change);
        }
      });

    })

    return function cleanUp() {
      unsubcribe()
    };

  }, [])

  // Obtener Token para Push Notificaciones
  useEffect(() => {
    registerForPushNotificationsAsync()
  }, [])
  
  // registracion a las notificaciones
  useEffect(() => {
    const _notificationSubscription = Notifications.addListener(_handleNotification);
    
    return () => {
      _notificationSubscription()
    };
  }, [])

  _handleNotification = (notification) => {
    console.log("notification", notification)
    setNotification({notification});
  };

  return (
    <View style={styles.container}>
      <Text>Probando Firebase</Text>

      <Button 
        title="Add on DataStore"
        onPress={ addToDataStore }
      ></Button>

      { Object.keys(usuarios).map( (key, index) => {
          const usuario = usuarios[key]
          return <Text key={`user-${index}`}>{ usuario.nombre }</Text>
        })
      }
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
