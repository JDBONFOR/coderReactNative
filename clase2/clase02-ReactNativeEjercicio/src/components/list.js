import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function ListComponent () {
    return (
        <View>
            <Text style = { styles.blue }>Coffee</Text>
            <Text style = { styles.red }>Tea</Text>
            <Text style = { styles.orange }>Milk</Text>
            <Text style = { styles.blackl }>Other</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    blue: {
        color: 'blue'
    },
    red: {
        color: 'red'
    },
    orange : {
        color: 'orange'
    }
});