import {View, TextInput, Text, TouchableOpacity, Platform, ActivityIndicator} from 'react-native'
import AwesomeAlert from 'react-native-awesome-alerts'
import {stylesGeneral} from '../StyleGeneral/styles'
import firebase from 'react-native-firebase'
import React, {Component} from 'react'
import {Styles} from './styles'
const ios = Platform.OS === 'ios'

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      showAlert: false,
      loading: false
    }
    this.showAlert = this.showAlert.bind(this)
    this.hideAlert = this.hideAlert.bind(this)
    this.showLoading = this.showLoading.bind(this)
  }

  showLoading() {
    if(this.state.loading){
      return (<View><ActivityIndicator size="small" color="#FFFFFF" /></View>)
    }else {
      return (<Text style={stylesGeneral.textButton}> ENTRAR </Text>)
    }
  }

  showAlert() {
    this.setState({
      showAlert: true
    })
  }

  hideAlert() {
    this.setState({
      showAlert: false,
      loading: false
    })
  }

  login() {
    if(!this.state.email == '' && !this.state.password == ''){
      this.setState({
        loading: true
      })
      firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(res => {
        this.props.navigation.push('TabNavigation')
      })
      .catch(err => {
        this.showAlert()
      })
    }
  }

  render() {
    let loading = this.showLoading()
    return (
      <View style={stylesGeneral.background}>
        <Text style={Styles.title}>
          LOGIN
        </Text>
        <TextInput 
          style={stylesGeneral.inputText}
          onChangeText={(email) => this.setState({email})}
          placeholder="Email"
          keyboardType= "email-address"
          returnKeyType="next"
        />
        <TextInput
          style={stylesGeneral.inputText}
          onChangeText={(password) => this.setState({password})}
          placeholder="Password"
          secureTextEntry={true}
          returnKeyType="go"
          />
        <TouchableOpacity 
          onPress={()=> { this.login() }}
          style={stylesGeneral.button}>
          {loading}
        </TouchableOpacity>

        <AwesomeAlert
          show={this.state.showAlert}
          showProgress={false}
          message="Su usuario o contraseña son incorrectos"
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
    title: 'LOGIN',
    headerStyle: {
      backgroundColor: '#CCCCCC',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    }
  } : '';

}

module.exports = Login 