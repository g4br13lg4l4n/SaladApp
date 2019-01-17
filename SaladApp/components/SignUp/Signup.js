import {View, TextInput, Text, TouchableOpacity, Platform, ActivityIndicator} from 'react-native'
import AwesomeAlert from 'react-native-awesome-alerts'
import {stylesGeneral} from '../StyleGeneral/styles'
import firebase from 'react-native-firebase'
import React, {Component} from 'react'
import {Styles} from './styles'

const ios = Platform.OS === 'ios' 

class Signup extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',  
      name: '',
      phone: '',
      loading: false,
      showAlert: false
    }
    this.showAlert = this.showAlert.bind(this)
    this.hideAlert = this.hideAlert.bind(this)
    this.showLoading = this.showLoading.bind(this)
  }

  showAlert() {
    this.setState({
      showAlert: true
    })
  }

  hideAlert() {
    this.setState({
      showAlert: false
    })
  }


  showLoading() {
    if(this.state.loading){
      return (<View><ActivityIndicator size="small" color="#FFFFFF" /></View>)
    }else {
      return (<Text style={stylesGeneral.textButton}> ENTRAR </Text>)
    }
  }

  register() {
    if(!this.state.email == '' && !this.state.password == '' && !this.state.phone == '' && !this.state.name == '') {
      this.setState({
        loading: true
      })
      firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then((res) => {
          const data = {
            email: this.state.email,
            phone: this.state.phone, 
            name: this.state.name,
          }
          firebase.database().ref('users/' + res.user.uid).set(data, 
            err => {
              if(err) {
                //console.warn('error guarda --->', err)
              }else { 
                //console.warn('guardado')
              }
            })

        }).catch(err => {
          console.warn(err)
        })
    }else {
      this.showAlert()
    }
  }

  render() {
    let loading = this.showLoading()
    return (
      <View style={stylesGeneral.background}>
        <Text style={Styles.title}>
          REGISTRO
        </Text>
        <TextInput 
          style={stylesGeneral.inputText}
          onChangeText={(name) => this.setState({name})}
          placeholder="Nombre completo"
        />
        <TextInput
          style={stylesGeneral.inputText}
          onChangeText={(phone) => this.setState({phone})}
          placeholder="Teléfono"
          keyboardType= "numeric"
          />
        <TextInput 
          style={stylesGeneral.inputText}
          onChangeText={(email) => this.setState({email})}
          placeholder="Email"
          keyboardType= "email-address"
        />
        <TextInput
          style={stylesGeneral.inputText}
          onChangeText={(password) => this.setState({password})}
          placeholder="Password"
          secureTextEntry={true}
        />
        <TouchableOpacity 
          onPress={()=> { this.register() }}
          style={stylesGeneral.button}>
          {loading}
        </TouchableOpacity>
        <AwesomeAlert
          show={this.state.showAlert}
          showProgress={false}
          message="Datos incompletos"
          closeOnTouchOutside={false}
          closeOnHardwareBackPress={false}
          showConfirmButton={true}
          confirmText="Cerrar"
          confirmButtonColor="#4093f1"
          onConfirmPressed={() => {
            this.hideAlert()
          }}
        />
      </View>
    )
  }

  static navigationOptions = ios ? {
    title: 'REGISTRO',
    headerStyle: {
      backgroundColor: '#FF8C2B',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    }
  } : '';

}

module.exports = Signup 