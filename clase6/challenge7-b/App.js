import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Home from './src/screens/home/home';
import SecondScreen from './src/screens/second/second';

const TabNavigator = createBottomTabNavigator({
  Home: Home,
  SecondScreen: SecondScreen,
});

export default createAppContainer(TabNavigator);