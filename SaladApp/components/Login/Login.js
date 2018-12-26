import {View, Button, TextInput, Text, TouchableOpacity, Platform} from 'react-native'
import {stylesGeneral} from '../StyleGeneral/styles'
import React, {Component} from 'react'
import {Styles} from './styles'
const ios = Platform.OS === 'ios'

class Login extends Component {

  static navigationOptions = ios ? {
    title: 'LOGIN',
    headerStyle: {
      backgroundColor: '#FF8C2B',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    }
  } : '';

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