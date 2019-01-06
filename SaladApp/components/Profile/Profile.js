import {stylesGeneral} from '../StyleGeneral/styles'
import {View, Text} from 'react-native'
import React, {Component} from 'react'
import Styles from './styles'

class Profile extends Component {
  
  render() {
    return (
      <View style={stylesGeneral.background}>    
        <Text style={Styles.title}> PERFIL </Text>  
        <View>
          <Text style={Styles.text}> Usuario: </Text> 
          <Text style={Styles.text}> tstets </Text> 
          <Text style={Styles.text}> Correo: </Text> 
          <Text style={Styles.text}> tstets </Text> 
          <Text style={Styles.text}> Teléfono: </Text> 
          <Text style={Styles.text}> tstets </Text> 
        </View>
      </View>
    )
  }
}

module.exports = Profile