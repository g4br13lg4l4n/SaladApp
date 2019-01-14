import {View, Button, TextInput, Text, TouchableOpacity, Platform} from 'react-native'
import {stylesGeneral} from '../StyleGeneral/styles'
import firebase from 'react-native-firebase'
import React, {Component} from 'react'
import {Styles} from './styles'

const ios = Platform.OS === 'ios' 

class Signup extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',  
      name: '',
      phone: ''

    }
  }

  register() {
    if(!this.state.email == '' && !this.state.password == '' && !this.state.phone == '' && !this.state.name == '') {
      firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then((res) => {
          const data = {
            email: this.state.email,
            phone: this.state.phone, 
            name: this.state.name,
          }
          firebase.database().ref('users/' + res.user.uid).set(data, 
            err => {
              if(err) {
                console.warn('error guarda --->', err)
              }else { 
                console.warn('guardado')
              }
            })

        }).catch(err => {
          console.warn(err)
        })
    }
  }

  render() {
    return (
      <View style={stylesGeneral.background}>
        <Text style={Styles.title}>
          REGISTRO
        </Text>
        <TextInput 
          style={stylesGeneral.inputText}
          onChangeText={(name) => this.setState({name})}
          placeholder="Nombre completo"
        />
        <TextInput
          style={stylesGeneral.inputText}
          onChangeText={(phone) => this.setState({phone})}
          placeholder="Teléfono"
          keyboardType= "numeric"
          />
        <TextInput 
          style={stylesGeneral.inputText}
          onChangeText={(email) => this.setState({email})}
          placeholder="Email"
          keyboardType= "email-address"
        />
        <TextInput
          style={stylesGeneral.inputText}
          onChangeText={(password) => this.setState({password})}
          placeholder="Password"
          secureTextEntry={true}
        />
        <TouchableOpacity 
          onPress={()=> { this.register() }}
          style={stylesGeneral.button}>
          <Text style={stylesGeneral.textButton}> CREAR CUENTA </Text>
        </TouchableOpacity>
      </View>
    )
  }

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

}

module.exports = Signup 