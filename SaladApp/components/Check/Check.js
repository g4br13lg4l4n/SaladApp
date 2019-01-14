import { View, Button, Text, TouchableOpacity, TextInput, ScrollView} from 'react-native'
import {stylesGeneral} from '../StyleGeneral/styles'
import React, {Component} from 'react'
import Styles from './styles'

class Check extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countPay: '',
      check: {
        countPay: '',
        cashPay: '',
        phone:'',
        stateLocation: '',
        colony: '',
        street: '',
        numHome:'',
        refHome:''
      }
    }
    this.CountPay = this.CountPay.bind(this)
    this.registerCheck = this.registerCheck.bind(this)
  }

  componentWillMount() {
    const countPay = this.CountPay()
    this.setState((state) => {
      state.countPay = countPay
      state.check.countPay = countPay
    })
  }

  CountPay() {
    const { navigation } = this.props
    const count = navigation.getParam('countPay')
    return count
  }

  registerCheck() {
    console.warn(this.state.check)
  }

  render() {
    return (
      <ScrollView style={stylesGeneral.background}>    
        <Text style={Styles.title}> CHECK </Text>  
        <Text style={Styles.text}> cantidad a pagar: {this.state.countPay} </Text> 
        <View style={Styles.margin}>
          <TextInput 
            style={stylesGeneral.inputText}
            onChangeText={(cashPay) => this.setState((state) => {{state.check.cashPay = cashPay}})}
            placeholder="Cantidad con la que desea pagar"
          />
        </View>
        <View style={Styles.margin}>
          <TextInput 
            style={stylesGeneral.inputText}
            onChangeText={(phone) => this.setState((state) => {{state.check.phone = phone}})}
            placeholder="Teléfono"
          />
        </View>
        <View style={Styles.margin}>
          <TextInput 
            style={stylesGeneral.inputText}
            onChangeText={(stateLocation) => this.setState((state) => {{state.check.stateLocation = stateLocation}})}
            placeholder="Estado"
          />
        </View>
        <View style={Styles.margin}>
          <TextInput 
            style={stylesGeneral.inputText}
            onChangeText={(colony) => this.setState((state) => {{state.check.colony = colony}})}
            placeholder="Colonia"
          />
        </View>
        <View style={Styles.margin}>
          <TextInput 
            style={stylesGeneral.inputText}
            onChangeText={(street) => this.setState((state) => {{state.check.street = street}})}
            placeholder="Calle"
          />
        </View>
        <View style={Styles.margin}>
          <TextInput 
            style={stylesGeneral.inputText}
            onChangeText={(numHome) => this.setState((state) => {{state.check.numHome = numHome}})}
            placeholder="Número de casa o departamento"
          />
        </View>
        <View style={Styles.margin}>
          <TextInput 
            multiline={true}
            numberOfLines={2}
            style={stylesGeneral.inputText}
            onChangeText={(refHome) => this.setState((state) => {{state.check.refHome = refHome}})}
            placeholder="Referencia del domicilio "
          />
        </View>
        <TouchableOpacity 
          onPress={()=> { this.registerCheck() }}
          style={stylesGeneral.button}>
          <Text style={stylesGeneral.textButton}> CREAR PEDIDO </Text>
        </TouchableOpacity>
      </ScrollView>
    )
  }
}

module.exports = Check