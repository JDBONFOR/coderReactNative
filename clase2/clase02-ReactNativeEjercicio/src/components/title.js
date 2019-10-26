import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function TitleComponents () {
    return (
        <Text style = { styles.title }>Coffee House</Text>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
        fontSize : 48
    }
});