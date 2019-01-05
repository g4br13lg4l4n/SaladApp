import {View, Button, TextInput, Text, TouchableOpacity, Platform} from 'react-native'
import {stylesGeneral} from '../StyleGeneral/styles'
import firebase from 'react-native-firebase'
import React, {Component} from 'react'
import {Styles} from './styles'
const ios = Platform.OS === 'ios'

class Login extends Component {

  constructor() {
    super();
    this.state = {
      isAuthenticated: false,
    };
  }

  componentDidMount() {
    
  }

  static navigationOptions = ios ? {
    title: 'LOGIN',
    headerStyle: {
      backgroundColor: '#CCCCCC',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    }
  } : '';

  render() {
/*
    if (!this.state.isAuthenticated) {
      return null;
    }
*/
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