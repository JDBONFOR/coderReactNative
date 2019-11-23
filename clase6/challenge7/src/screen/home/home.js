import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const home = ({ navigation }) => {
    return (
        <View style={ styles.container }>
            <Text>Home Screen</Text>
            <TouchableOpacity
                onPress={ () => { navigation.navigate("SecondScreen") } }
            >
                <Text style={styles.btn}> Go to Second Page</Text>
            </TouchableOpacity>
        </View>
    )
}

export default home

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    btn : {
        width : 170,
        marginTop : 15,
        padding : 15,
        backgroundColor : "green",
        color : "#FFF"
    }
});