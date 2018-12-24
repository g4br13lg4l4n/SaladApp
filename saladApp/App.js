/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {createStackNavigator} from 'react-navigation';
import Welcome from './Components/Welcome/welcome'

const App = createStackNavigator({
  Welcome: {screen: Welcome},
  Profile: {screen: ProfileScreen},
});

module.exports = App
