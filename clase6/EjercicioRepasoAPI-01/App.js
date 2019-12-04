import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView, TouchableOpacity, ActivityIndicator} from 'react-native';

import { _getData, _postData } from './src/service/appService';
import List from './src/screen/list/list';

export default function App() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false)
  const token = 'estoesuntokenretrucho'

  useEffect(() => {
    _getData( token )
      .then( result => {
        setData( result )
        setLoading(false);
      })
  }, [])

  //console.log("Data", data)
  //console.log("Data", Object.keys(data))

  const postData = {
    "auto": "chevrolet",
    "precio": "300000",
    "seguro": "Zurich",
    "kilometraje": "80000",
    "color": "verde"
  }

  return (
    <SafeAreaView style={ styles.container }>
      { !data && <ActivityIndicator size="large" color="#0000ff" /> }

      <FlatList
        style = {{ flex: 1 }}
        data = { data && Object.keys(data) }
        renderItem={ item => <Text> { `${item.item}: ${data[item.item]}` } </Text> }
      />

      <TouchableOpacity 
        style = {{ flex: 1 }}
        onPress={ () => { 

          setLoading(true)
          _postData(token, postData)
            .then( status => {
              setLoading(false)
            })

        } } >

        <View style={styles.btn} >
        { isLoading 
          ? <ActivityIndicator size="large" color="#0000ff" /> 
          : <Text> Send Data </Text>
        }
        </View>
        
        
      </TouchableOpacity>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn : {
    width : 150,
    marginTop : 15,
    padding : 15,
    backgroundColor : "green",
    color : "#FFF"
  }
});
