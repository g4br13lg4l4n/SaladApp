import { createBottomTabNavigator} from "react-navigation"
import Icon from 'react-native-vector-icons/FontAwesome'
import Profile from '../Profile/Profile'
import React, {Component} from 'react'
import Select from '../Select/Select'
import Check from '../Check/Check'
import Home from '../Home/Home'


const TabNavigation = createBottomTabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {  
      tabBarLabel: 'Feed',
      tabBarIcon: ({ }) => <Icon.Button name="facebook" backgroundColor="#3b5998" onPress={this.loginWithFacebook}>
      Login with Facebook
    </Icon.Button>
    }
  },
  Select: {
    screen: Select,
    navigationOptions: {  
      tabBarLabel: 'Feed'
    }
  },
  Check: {
    screen: Check,
    navigationOptions: {  
      tabBarLabel: 'Feed'
    }
  },
  Profile: {
    screen: Profile,
    navigationOptions: {  
      tabBarLabel: 'Feed'
    }
  }
})

module.exports = TabNavigation
