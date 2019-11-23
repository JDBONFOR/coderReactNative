import React from 'react'
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'

const home = () => {
    return (
        <SafeAreaView style={ styles.container }>
            <View>
                <Text>Hello!!</Text>
            </View>
        </SafeAreaView>
    )
}

export default home

const styles = StyleSheet.create({ 
    container: {
        flex : 1,
        backgroundColor : '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
    }
})
