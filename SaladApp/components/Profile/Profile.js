import {stylesGeneral} from '../StyleGeneral/styles'
import firebase from 'react-native-firebase'
import {View, Text} from 'react-native'
import React, {Component} from 'react'
import Styles from './styles'


class Profile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phone: ''
    }
  }

  componentDidMount() {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          firebase.database().ref(`users/${user.uid}`).once('value')
          .then( resp => {
            this.setState({
              name: resp.val().name,
              email: resp.val().email,
              phone: resp.val().phone
            })
          })
        }
      })
  }

  render() {
    return (
      <View style={stylesGeneral.background}>    
        <Text style={Styles.title}> PERFIL </Text>  
        <View style={Styles.margin}>
          <Text style={Styles.text}> Usuario: </Text> 
          <Text style={Styles.text}> {this.state.name} </Text> 
        </View>
        <View style={Styles.margin}>
          <Text style={Styles.text}> Correo: </Text> 
          <Text style={Styles.text}> {this.state.email} </Text> 
        </View>
        <View style={Styles.margin}>
          <Text style={Styles.text}> Teléfono: </Text> 
          <Text style={Styles.text}> {this.state.phone} </Text> 
        </View>
      </View>
    )
  }
}

module.exports = Profile