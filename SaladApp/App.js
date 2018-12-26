import React, {Component} from 'react'
import { createStackNavigator, createAppContainer } from "react-navigation"
import { Platform } from 'react-native'
import Login from './components/Login/Login'
import Welcome from './components/Welcome/welcome'
import Signup from './components/SignUp/Signup'
const ios = Platform.OS === 'ios' 

class App extends Component{
  render() {
    return AppNavigator
  }
}
const AppNavigator = createStackNavigator({
  Welcome: {
    screen: Welcome
  },
  Login: {
    screen: Login
  },
  Signup: {
    screen: Signup
  }
})



module.exports = createAppContainer(AppNavigator)