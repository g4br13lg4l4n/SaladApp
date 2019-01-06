import { createStackNavigator, createAppContainer } from "react-navigation"
import TabNavigation from './components/TabNavigation/TabNavigation'
import Welcome from './components/Welcome/welcome'
import Signup from './components/SignUp/Signup'
import Login from './components/Login/Login'
import { Platform } from 'react-native'
import React, {Component} from 'react'

const ios = Platform.OS === 'ios' 

class App extends Component {
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
  },
  TabNavigation: {
    screen: TabNavigation,
  }
},{
  mode: 'modal',
  headerMode: 'none',
},
{
  initialRouteName: 'Welcome',
})

module.exports = createAppContainer(AppNavigator)