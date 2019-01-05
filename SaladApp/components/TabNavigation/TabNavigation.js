import { createBottomTabNavigator} from "react-navigation"
import Icon from 'react-native-vector-icons/FontAwesome'
import Profile from '../Profile/Profile'
import React, {Component} from 'react'
import Select from '../Select/Select'
import Check from '../Check/Check'
import Home from '../Home/Home'
import Styles from './styles'

const TabNavigation = createBottomTabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      showLabel: false,
			showIcon: true,
      tabBarLabel: 'Home',
      tabBarIcon: ({ }) => <Icon.Button name="home" color="#FF8C2B" backgroundColor="#FFF"> </Icon.Button>,
    }
  },
  Select: {
    screen: Select,
    navigationOptions: {  
      showLabel: false,
			showIcon: true,
      tabBarLabel: 'Choose',
      tabBarIcon: ({ }) => <Icon.Button name="shopping-basket" color="#FF8C2B" backgroundColor="#FFF"> </Icon.Button>
    } 
  }, 
  Check: {
    screen: Check,
    navigationOptions: {   
      tabBarLabel: 'Pay',
      tabBarIcon: ({ }) => <Icon.Button name="heart" color="#FF8C2B" backgroundColor="#FFF"/>
    }
  },
  Profile: {
    screen: Profile,
    navigationOptions: {  
      tabBarLabel: 'Profile',
      tabBarIcon: ({ }) => <Icon.Button name="user" color="#FF8C2B" backgroundColor="#FFF"/>
    }
  }
})

module.exports = TabNavigation
