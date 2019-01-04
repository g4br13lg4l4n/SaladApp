import {View, Button, TextInput, Text, TouchableOpacity, Platform} from 'react-native'
import {stylesGeneral} from '../StyleGeneral/styles'
import React, {Component} from 'react'

class Home extends Component {
  render() {
    return (
      <View style={stylesGeneral.background}>
        <Text>
          Home
        </Text>
      </View>  
    )
  }
}

module.exports = Home