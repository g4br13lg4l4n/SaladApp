import { createBottomTabNavigator} from "react-navigation"
import Icon from 'react-native-vector-icons/FontAwesome'
import Profile from '../Profile/Profile'
import React, {Component} from 'react'
import Select from '../Select/Select'
//import Check from '../Check/Check'
import CheckMap from '../Check/CheckMap'
import Home from '../Home/Home'

const TabNavigation = createBottomTabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      activeTintColor:'red',
      inactiveTintColor:'green',
      showLabel: false,
			showIcon: true,
      tabBarLabel: 'Home',
      tabBarIcon: ({ }) => <Icon.Button name="home" color="#FF8C2B" backgroundColor="#FFF"> </Icon.Button>,
    }
  },
  Select: {
    screen: Select,
    navigationOptions: {  
      activeTintColor:'red',
      inactiveTintColor:'green',
      showLabel: false,
			showIcon: true,
      tabBarLabel: 'Choose',
      tabBarIcon: ({color = 'red'}) => <Icon.Button name="shopping-basket" color={color} backgroundColor="#FFF"> </Icon.Button>,
      tabBarOnPress: (navigation) => {  }
    } 
  }, 
  Check: {
    screen: CheckMap,
    navigationOptions: { 
      activeTintColor:'red',
      inactiveTintColor:'green',  
      showLabel:false,
      tabBarLabel: 'Pay',
      tabBarIcon: ({ }) => <Icon.Button name="heart" color="#FF8C2B" backgroundColor="#FFF"/>
    }
  },
  Profile: {
    screen: Profile,
    navigationOptions: {  
      activeTintColor:'red',
      inactiveTintColor:'green',
      showLabel:false,
      tabBarLabel: 'Profile',
      tabBarIcon: ({ }) => <Icon.Button name="user" color="#FF8C2B" backgroundColor="#FFF"/>
    },
  }
})

module.exports = TabNavigation
