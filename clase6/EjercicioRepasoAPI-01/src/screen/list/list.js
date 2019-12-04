import React, { Component } from 'react'
import { Text, StyleSheet, ListView, SafeAreaView } from 'react-native'

const list = ({ dataSource = [] }) => {
    return (
        <SafeAreaView >
            <ListView
                dataSource = { dataSource }
            ></ListView>
        </SafeAreaView>
    )
}

export default list;

const styles = StyleSheet.create({
        
})

