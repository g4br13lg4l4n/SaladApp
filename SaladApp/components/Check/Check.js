import { View, Button, Text, TouchableOpacity, TextInput, ScrollView} from 'react-native'
import {stylesGeneral} from '../StyleGeneral/styles'
import React, {Component} from 'react'
import Styles from './styles'

class Check extends Component {
  render() {
    return (
      <ScrollView style={stylesGeneral.background}>    
        <Text style={Styles.title}> CHECK </Text>  
        <Text style={Styles.text}> cantidad a pagar: </Text> 
        <View style={Styles.margin}>
          <TextInput 
            style={stylesGeneral.inputText}
            onChangeText={(email) => this.setState({email})}
            placeholder="Cantidad con la que desea pagar"
          />
        </View>
        <View style={Styles.margin}>
          <TextInput 
            style={stylesGeneral.inputText}
            onChangeText={(email) => this.setState({email})}
            placeholder="Teléfono"
          />
        </View>
        <View style={Styles.margin}>
          <TextInput 
            style={stylesGeneral.inputText}
            onChangeText={(email) => this.setState({email})}
            placeholder="Estado"
          />
        </View>
        <View style={Styles.margin}>
          <TextInput 
            style={stylesGeneral.inputText}
            onChangeText={(email) => this.setState({email})}
            placeholder="Colonia"
          />
        </View>
        <View style={Styles.margin}>
          <TextInput 
            style={stylesGeneral.inputText}
            onChangeText={(email) => this.setState({email})}
            placeholder="Calle"
          />
        </View>
        <View style={Styles.margin}>
          <TextInput 
            style={stylesGeneral.inputText}
            onChangeText={(email) => this.setState({email})}
            placeholder="Número de casa o departamento"
          />
        </View>
        <View style={Styles.margin}>
          <TextInput 
            multiline={true}
            numberOfLines={4}
            style={stylesGeneral.inputText}
            onChangeText={(email) => this.setState({email})}
            placeholder="Referencia del domicilio "
          />
        </View>
        <TouchableOpacity 
          style={stylesGeneral.button}>
          <Text style={stylesGeneral.textButton}> CREAR PEDIDO </Text>
        </TouchableOpacity>
      </ScrollView>
    )
  }
}

module.exports = Check