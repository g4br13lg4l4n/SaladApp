import {View, Button, TextInput, Text, TouchableOpacity, Platform} from 'react-native'
import {stylesGeneral} from '../StyleGeneral/styles'
import firebase from 'react-native-firebase'
import React, {Component} from 'react'
import {Styles} from './styles'
const ios = Platform.OS === 'ios'

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  login() {
    if(!this.state.email == '' && !this.state.password == ''){
      firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(res => {
        console.warn('respuesta ---->', res)
        this.props.navigation.push('TabNavigation')
      })
      .catch(err => {
        console.warn('error --->', err)
      })
    }
  }

  render() {
    return (
      <View style={stylesGeneral.background}>
        <Text style={Styles.title}>
          LOGIN
        </Text>
        <TextInput 
          style={stylesGeneral.inputText}
          onChangeText={(email) => this.setState({email})}
          placeholder="Email"
        />
        <TextInput
          style={stylesGeneral.inputText}
          onChangeText={(password) => this.setState({password})}
          placeholder="Password"
          />
        <TouchableOpacity
          style={stylesGeneral.buttonPrimary}  
        >  
          <Button 
          title="ENTRAR" color="#FF8C2B"
          onPress={()=> { this.login() }}/>
        </TouchableOpacity>
      </View>
    )
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

}

module.exports = Login 