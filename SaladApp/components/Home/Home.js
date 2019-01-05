import {View, Text, TouchableHighlight, Image} from 'react-native'
import React, {Component} from 'react'
import {Styles} from './styles'

class Home extends Component {

  option() {
    alert('opción')
  }

  render() {
    return (
      <View style={Styles.background}>
        <Image style={Styles.imgSalad}
          source={require('../../imgs/salad.png')}
        />
        <View style={Styles.body}>
          <Text style={Styles.textp}>
            Construye tu ensalada con la cantidad de ingredientes que desees
          </Text>

          <TouchableHighlight style={Styles.contentButton} onPress={()=>{ this.option() }} underlayColor="white">
            <View style={Styles.button}>
              <Text style={Styles.buttonText}>ENSALADA CON 4 INGREDIENTES</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight style={Styles.contentButton} onPress={()=>{ this.option() }} underlayColor="white">
            <View style={Styles.button}>
              <Text style={Styles.buttonText}>ENSALADA CON 6 INGREDIENTES</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight style={Styles.contentButton} onPress={()=>{ this.option() }} underlayColor="white">
            <View style={Styles.button}>
              <Text style={Styles.buttonText}>ENSALADA CON 8 INGREDIENTES</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight style={Styles.contentButton} onPress={()=>{ this.option() }} underlayColor="white">
            <View style={Styles.button}>
              <Text style={Styles.buttonText}>ENSALADA CON 10 INGREDIENTES</Text>
            </View>
          </TouchableHighlight>

        </View>
      </View>  
    )
  }
}

module.exports = Home