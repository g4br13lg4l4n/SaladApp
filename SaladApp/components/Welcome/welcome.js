import React, {Component} from 'react' 
import { View, Button, Text, TouchableOpacity} from 'react-native'
import Styles from './styles' 
import {stylesGeneral} from '../StyleGeneral/styles'

class Welcome  extends Component{

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
              onPress={()=> { alert('hola') }}
            />
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
module.exports = Welcome