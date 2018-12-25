import React, {Component} from 'react'
import { createSwitchNavigator } from 'react-navigation'

import Login from './components/Login/Login'
import Welcome from './components/Welcome/welcome'

class App extends Component {
  render() {
    return <Natigator/>
  }
}

const Natigator = createSwitchNavigator(
  {
    Welcome: {screen: Welcome},
    Login: {screen: Login}
  });

module.exports = App