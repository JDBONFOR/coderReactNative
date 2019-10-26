import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default Saludo = ({ Nombre }) => {
    return (
        <Text
            style = { styles.title }
        > Hola { Nombre } </Text>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize : 48
    }
});
