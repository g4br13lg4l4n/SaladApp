import React, {Component} from 'react'
import { createStackNavigator, createAppContainer } from "react-navigation"

import Login from './components/Login/Login'
import Welcome from './components/Welcome/welcome'

class App extends Component{
  render() {
    return AppNavigator
  }
}
const AppNavigator = createStackNavigator({
  Home: {
    screen: Welcome
  },
  Login: {
    screen: Login
  }
});

module.exports = createAppContainer(AppNavigator)