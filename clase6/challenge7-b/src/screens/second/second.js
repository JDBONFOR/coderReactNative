import React from 'react'
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'

const second = () => {
    return (
        <SafeAreaView style={ styles.container }>
            <View>
                <Text>Hello!! Second Screen</Text>
            </View>
        </SafeAreaView>
    )
}

export default second

const styles = StyleSheet.create({ 
    container: {
        flex : 1,
        backgroundColor : '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
    },
})
