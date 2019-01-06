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
            style={stylesGeneral.buttonPrimary}  
          >
          <Button
              style={stylesGeneral.buttonPrimary}
              title="LOGIN" color="#FF8C2B" 
              onPress={() => {this.props.navigation.navigate('Login')}}
            />
          </TouchableOpacity>

          <Text style={Styles.withoutCount}>¿No tienes una cuenta?</Text>
          <TouchableOpacity
            style={stylesGeneral.buttonPrimary}  
          >
            <Button
              title="REGISTRAR" color="#FF6322"
              onPress={() => {this.props.navigation.navigate('Signup')}}
            />
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
module.exports = Welcome