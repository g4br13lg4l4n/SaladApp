import { View, Text, TouchableOpacity, ScrollView, Dimensions, PermissionsAndroid} from 'react-native'
import ButtonLocation from './ButtonLocation/ButtonLocation'
import FindLocation from './FindLocation/FindLocation'
import {stylesGeneral} from '../StyleGeneral/styles'
import firebase from 'react-native-firebase'
import MapView from 'react-native-maps'
import React, {Component} from 'react'

import Styles from './styles'
const {width, height} = Dimensions.get('window')
const ASPECT_RATIO = width / height
const LATITUDE_DELTA = 0.0922
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO

class CheckMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countPay: 0,
      initialPosition: {
        countPay: 0,
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0,
        longitudeDelta: 0,
      },
      markerPosition:{
        latitude: 0,
        longitude: 0
      },
      hasPosition: false,
      error: null,
    }
    this.watchLocation = this.watchLocation.bind(this)
    this.findLocationComponent = this.findLocationComponent.bind(this)
    this.requestCameraPermission = this.requestCameraPermission.bind(this)
  }

  CountPay() {
    const { navigation } = this.props
    const count = navigation.getParam('countPay')
    return count
  }

  componentWillMount() {
    this.requestCameraPermission()
    const countPay = this.CountPay()
    this.setState((state) => {
      state.countPay = countPay
      state.initialPosition.countPay = countPay
    })
    this.watchLocation()
    
  }

  watchLocation(){
    this.watchID = navigator.geolocation.watchPosition((position) => {
      const latitude = parseFloat(position.coords.latitude)
      const longitude = parseFloat(position.coords.longitude)

      console.warn(latitude)

      this.setState((state) => {
        state.initialPosition.latitude = latitude,
        state.initialPosition.longitude = longitude,
        state.initialPosition.latitudeDelta = LATITUDE_DELTA,
        state.initialPosition.longitudeDelta = LONGITUDE_DELTA
      })
      this.setState((state) => {
        state.markerPosition.latitude = latitude,
        state.markerPosition.longitude = longitude
      })
      this.setState({hasPosition: true})
      this.findLocationComponent()
      
    })
  }

  findLocationComponent(){  
    if(this.state.hasPosition){
      return (<FindLocation
        position={this.state.initialPosition}
      />)
    }
  }


  requestCameraPermission() {
    try {
      const granted = PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Cool Photo App Camera Permission',
          message:
            'Cool Photo App needs access to your camera ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.warn('You can use the camera');
      } else {
        console.warn('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  }

  componentWillUnmount(){
    navigator.geolocation.clearWatch(this.watchID)
  }

  registerCheck() {
    console.warn(this.state.initialPosition)
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        firebase.database().ref(`users/${user.uid}`).push(this.state.initialPosition, 
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

  render() {
    return (
      <ScrollView style={stylesGeneral.background}
        showsVerticalScrollIndicator={false}>  
        {this.findLocationComponent()}
        <MapView
          style={Styles.map}
          region={this.state.initialPosition}>
          <MapView.Marker
            coordinate={this.state.markerPosition}>
            <View>

            </View>
          </MapView.Marker>
        </MapView>
        <ButtonLocation
          getPosition={() => {this.watchLocation()}}
        />
        <TouchableOpacity 
          onPress={()=> { this.registerCheck() }}
          style={Styles.acceptPayContent}>
          <Text style={Styles.acceptPay}>Pagar ${this.state.countPay}</Text>
        </TouchableOpacity>
      </ScrollView>
    )
  }

}

module.exports = CheckMap