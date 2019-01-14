import {View, Text, TouchableHighlight, Image, ScrollView} from 'react-native'
import {stylesGeneral} from '../StyleGeneral/styles'
import React, {Component} from 'react'
import {Styles} from './styles'

class Home extends Component {

  constructor(props) {
    super(props);
    this.option = this.option.bind(this);
  }

  option(num) {
    this.props.navigation.navigate('Select', { count: num });
  }

  componentWillUnmount(){
    console.warn('un mount')
  }

  render() {
    return (
      <View style={stylesGeneral.backgroundBlue}>
        <Image style={Styles.imgSalad}
          source={require('../../imgs/salad.png')}
        />
        <ScrollView style={Styles.bodyScroll}>
          <Text style={Styles.textp}>
            Construye tu ensalada con la cantidad de ingredientes que desees
          </Text>

          <TouchableHighlight style={Styles.contentButton} onPress={()=>{ this.option(4) }} underlayColor="white">
            <View style={Styles.button}>
              <Text style={Styles.buttonText}>ENSALADA CON 4 INGREDIENTES</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight style={Styles.contentButton} onPress={()=>{ this.option(6) }} underlayColor="white">
            <View style={Styles.button}>
              <Text style={Styles.buttonText}>ENSALADA CON 6 INGREDIENTES</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight style={Styles.contentButton} onPress={()=>{ this.option(8) }} underlayColor="white">
            <View style={Styles.button}>
              <Text style={Styles.buttonText}>ENSALADA CON 8 INGREDIENTES</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight style={Styles.contentButton} onPress={()=>{ this.option(10) }} underlayColor="white">
            <View style={Styles.button}>
              <Text style={Styles.buttonText}>ENSALADA CON 10 INGREDIENTES</Text>
            </View>
          </TouchableHighlight>

        </ScrollView>
      </View>  
    )
  }
}

module.exports = Home