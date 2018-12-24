//import React, {Component} from 'react'
import {createStackNavigator} from 'react-navigation'
import Welcome from './Components/Welcome/welcome'
import Login from './Components/Login/Login'

const App = createStackNavigator({
  Welcome: {screen: Welcome},
  Login: {screen: Login},
});

module.exports = App
