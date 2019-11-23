import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const second = ({ navigation }) => {
    return (
        <View style={ styles.container }>
            <Text>Second Screen</Text>
            <TouchableOpacity
                onPress={ () => { navigation.navigate("InitApp") } }
            >
                <Text style={styles.btn}> Go to Home Page</Text>
            </TouchableOpacity>
        </View>
    )
}

export default second

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