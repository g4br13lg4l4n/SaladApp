import React, {Component} from 'react'
import {View, Button, TextInput, Text, TouchableOpacity, Platform} from 'react-native'
import {Styles} from './styles'
import {stylesGeneral} from '../StyleGeneral/styles'
const ios = Platform.OS === 'ios' 

class Signup extends Component {

  static navigationOptions = ios ? {
    title: 'REGISTRO',
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
          REGISTRO
        </Text>
        <TextInput 
          style={stylesGeneral.inputText}
          placeholder="Nombre completo"
        />
        <TextInput
          style={stylesGeneral.inputText}
          placeholder="Teléfono"
          />
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
          title="CREAR CUENTA" color="#FF8C2B"
          onPress={()=> { alert('REGISTRO ok') }}/>
        </TouchableOpacity>
      </View>
    )
  }
}

module.exports = Signup 