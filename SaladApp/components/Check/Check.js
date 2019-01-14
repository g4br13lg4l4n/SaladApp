import { View, Button, Text, TouchableOpacity, TextInput, ScrollView} from 'react-native'
import {stylesGeneral} from '../StyleGeneral/styles'
import firebase from 'react-native-firebase'
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
        codePost: '',
        street: '',
        numHome:'',
        refHome:''
      }
    }
    this.CountPay = this.CountPay.bind(this)
    this.registerCheck = this.registerCheck.bind(this)
    this.doClear = this.doClear.bind(this)
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
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        firebase.database().ref(`users/${user.uid}`).push(this.state.check, 
          err => {
            if(err) {
              console.warn('error guarda --->', err)
            }else { 
              console.warn('Pedido en curso')
              this.doClear()
            }
          })
      }
    })
  }

doClear() {
  this.refs["cashPay"].clear()
  this.refs["phone"].clear()
  this.refs["stateLocation"].clear()
  this.refs["colony"].clear()
  this.refs["street"].clear()
  this.refs["numHome"].clear()
  this.refs["refHome"].clear()
  this.refs["codePost"].clear()

  this.setState(state => {
    state.check.countPay = '',
    state.check.cashPay = '',
    state.check.phone = '',
    state.check.codePost = '',
    state.check.stateLocation = '',
    state.check.colony = '',
    state.check.street = '',
    state.check.numHome = '',
    state.check.refHome = ''
  })
}

  

  render() {
    return (
      <ScrollView style={stylesGeneral.background}>    
        <Text style={Styles.title}> CHECK </Text>  
        <Text style={Styles.text}> cantidad a pagar: {this.state.countPay} </Text> 
        <View style={Styles.margin}>
          <TextInput 
            ref="cashPay"
            style={stylesGeneral.inputText}
            onChangeText={(cashPay) => this.setState((state) => {{state.check.cashPay = cashPay}})}
            placeholder="Cantidad con la que desea pagar"
            keyboardType= "numeric"
          />
        </View>
        <View style={Styles.margin}>
          <TextInput 
            ref="phone"
            style={stylesGeneral.inputText}
            onChangeText={(phone) => this.setState((state) => {{state.check.phone = phone}})}
            placeholder="Teléfono"
            keyboardType= "numeric"
          />
        </View>
        <View style={Styles.margin}>
          <TextInput 
            ref="stateLocation"
            style={stylesGeneral.inputText}
            onChangeText={(stateLocation) => this.setState((state) => {{state.check.stateLocation = stateLocation}})}
            placeholder="Estado"
          />
        </View>
        <View style={Styles.margin}>
          <TextInput 
            ref="codePost"
            style={stylesGeneral.inputText}
            onChangeText={(codePost) => this.setState((state) => {{state.check.codePost = codePost}})}
            placeholder="Codigo Postal"
            keyboardType= "numeric"
          />
        </View>
        <View style={Styles.margin}>
          <TextInput 
            ref="colony"
            style={stylesGeneral.inputText}
            onChangeText={(colony) => this.setState((state) => {{state.check.colony = colony}})}
            placeholder="Colonia"
          />
        </View>
        <View style={Styles.margin}>
          <TextInput 
            ref="street"
            style={stylesGeneral.inputText}
            onChangeText={(street) => this.setState((state) => {{state.check.street = street}})}
            placeholder="Calle"
          />
        </View>
        <View style={Styles.margin}>
          <TextInput 
            ref="numHome"
            style={stylesGeneral.inputText}
            onChangeText={(numHome) => this.setState((state) => {{state.check.numHome = numHome}})}
            placeholder="Número de casa o departamento"
          />
        </View>
        <View style={Styles.margin}>
          <TextInput 
            ref="refHome"
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