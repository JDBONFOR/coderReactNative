import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, FlatList} from 'react-native';
import { ScrollView } from './node_modules/react-native-gesture-handler'
import { authorize, getUserArtistsPromise } from './src/cliente-api-spotify'
import ArtistaFavorito from './src/ArtistaFavorito'

export default function App() {

  const [artistas, setArtistas] = useState([]);
  const [result, setResult] = useState(null);
  const [loggedIn, setloggedIn] = useState(false);

  _handleAuthButtonPress = () => {
    authorize().then(loggedIn => {
      console.warn('esta logueado?', loggedIn)
      setloggedIn({ loggedIn })
    })
  }

  _handleGetArtistsPress = () => {
    getUserArtistsPromise()
      .then(artistas => {
        setArtistas( artistas )
        
      })
      .catch(e => { console.log(e) })
  }
  
  //console.log('artistas after setArtistas', artistas)

  return (
    <View style={styles.container}>
        {/* <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.scrollView}
          contentContainerStyle={styles.scrollViewContent}
        >
          { artistas && artistas.map(artist => <ArtistaFavorito artista={artist} key={artist.nombre} />)}
        </ScrollView> */}

        <FlatList
          data = { artistas }
          renderItem = {( artista ) => ( <ArtistaFavorito artista={artista.item} key={artista.nombre} /> )} 
        >          
        </FlatList>  

        <View style={styles.buttonsContainer}>
          <Button title="Login con Spotify" onPress={this._handleAuthButtonPress} />
          <Button disabled={!loggedIn} title="Ver favoritos" onPress={this._handleGetArtistsPress} />
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonsContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    minHeight: 45,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#000000C0',
  },

  scrollView: {
    flex: 1,
    width: '100%',
  },

  scrollViewContent: {
    alignItems: 'center',
    paddingTop: 20,
  },
});
