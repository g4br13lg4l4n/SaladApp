import { createBottomTabNavigator, createStackNavigator, StackNavigator, TabNavigator } from "react-navigation"
import Home from '../Home/Home'
import Select from '../Select/Select'
import Check from '../Check/Check'
import Profile from '../Profile/Profile'

const TabNavigation = createBottomTabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {  
      tabBarLabel: 'Feed'
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
