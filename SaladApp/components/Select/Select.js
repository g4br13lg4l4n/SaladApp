import {View, Text, TouchableHighlight} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import {stylesGeneral} from '../StyleGeneral/styles'
import React, {Component} from 'react'
import Styles from './styles'

class Select extends Component {
  
  render(){
    return(
      <View style={stylesGeneral.background}>
        <View style={Styles.head}>
          <TouchableHighlight style={Styles.constIcon}>
            <Icon.Button name="shopping-basket" color="#FF7A27" backgroundColor="#FFF"> </Icon.Button>
          </TouchableHighlight>

          <Text style={Styles.title}>Construye tu ensalada</Text> 

          <TouchableHighlight style={Styles.constIconCircle}>
            <Icon.Button name="shopping-bag" color="#FFFFFF" style={Styles.icon} size={16} backgroundColor="transparent"> </Icon.Button>
          </TouchableHighlight>
        </View> 
      </View>
    )
  }
}

module.exports = Select