import { View, Button, Text, TouchableOpacity} from 'react-native'
import {stylesGeneral} from '../StyleGeneral/styles'
import firebase from 'react-native-firebase'
import React, {Component} from 'react' 
import Styles from './styles' 

class Welcome  extends Component {

  static navigationOptions = {
    headerMode: 'none'
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.props.navigation.navigate('Home')
      }
    })
  }

  render() {
    return (
      <View style={stylesGeneral.background}>
        <Text style={Styles.Title}> SALAD </Text>
        <View style={Styles.maginToHead}>

          <TouchableOpacity 
            onPress={() => {this.props.navigation.navigate('Login')}}
            style={stylesGeneral.button}>
            <Text style={stylesGeneral.textButton}> LOGIN </Text>
          </TouchableOpacity>

          <Text style={Styles.withoutCount}>¿No tienes una cuenta?</Text>

          <TouchableOpacity 
            onPress={() => {this.props.navigation.navigate('Signup')}}
            style={stylesGeneral.button}>
            <Text style={stylesGeneral.textButton}> REGISTRAR </Text>
          </TouchableOpacity>

        </View>
      </View>
    )
  }
}
module.exports = Welcome