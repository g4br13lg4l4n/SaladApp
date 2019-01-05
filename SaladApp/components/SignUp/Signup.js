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
          />
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
          title="CREAR CUENTA" color="#FF8C2B"
          onPress={()=> { this.register() }}/>
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