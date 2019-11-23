import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './src/screen/home/home';
import Second from './src/screen/second/second';


const AppNavigator = createStackNavigator({
  InitApp: {
    screen : Home,
    navigationOptions: {
      header: null,
    }
  },
  SecondScreen : {
    screen : Second,
    navigationOptions: {
      header: null,
    }
  }
},{
  initialRouteName: "InitApp"
})
export default createAppContainer(AppNavigator);

