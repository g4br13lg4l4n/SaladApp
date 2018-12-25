import React, {Component} from 'react'
import {View, Button, TextInput, Text, TouchableOpacity} from 'react-native'
import {Styles} from './styles'
import {stylesGeneral} from '../StyleGeneral/styles'

class Login extends Component {
  render() {
    return (
      <View style={stylesGeneral.background}>
        <Text style={Styles.title}>
          LOGIN
        </Text>
        <TextInput 
          style={stylesGeneral.inputText}
          placeholder="Email"
        />
        <TextInput
          style={stylesGeneral.inputText}
          placeholder="Password"
          />
        <TouchableOpacity
          style={stylesGeneral.buttonPrimary}  
        >  
          <Button 
          title="ENTRAR" color="#FF8C2B"
          onPress={()=> { alert('hola') }}/>
        </TouchableOpacity>
      </View>
    )
  }
}

module.exports = Login 