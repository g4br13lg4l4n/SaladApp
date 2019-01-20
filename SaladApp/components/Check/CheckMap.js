import { View, Text, TouchableOpacity, TextInput, ScrollView, Dimensions} from 'react-native'
import FindLocation from './FindLocation/FindLocation'
import {stylesGeneral} from '../StyleGeneral/styles'
import firebase from 'react-native-firebase'
import MapView from 'react-native-maps'
import React, {Component} from 'react'
import Styles from './styles'
const {width, height} = Dimensions.get('window')
// AIzaSyDbAs63vPEh02Y2rJ9v-ccAha6G1kabeoc

const ASPECT_RATIO = width / height
const LATITUDE_DELTA = 0.0922
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO

class CheckMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialPosition: {
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0,
        longitudeDelta: 0,
      },
      markerPosition:{
        latitude: 0,
        longitude: 0
      },
      error: null,
    }
  }

  componentDidMount(){
    navigator.geolocation.getCurrentPosition((position) => {
      let latitude = parseFloat(position.coords.latitude)
      let longitude = parseFloat(position.coords.longitude)

      const initialRegion = {
        latitude,
        longitude,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA
      }

      this.setState({initialPosition: initialRegion})
      this.setState({markerPosition: initialRegion})
    }, error => alert(JSON.stringify(error)),
    {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000})

    this.watchID = navigator.geolocation.watchPosition((position) => {
      let latitude = parseFloat(position.coords.latitude)
      let longitude = parseFloat(position.coords.longitude)

      let lastRegion = {
        latitude,
        longitude,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA
      }

      this.setState({initialPosition: lastRegion})
      this.setState({markerPosition: lastRegion})
    })
  }

  componentWillUnmount(){
    navigator.geolocation.clearWatch(this.watchID)
  }

  render() {
    return (
      <ScrollView style={stylesGeneral.background}
        showsVerticalScrollIndicator={false}>  
        <FindLocation/>
        <MapView
          style={Styles.map}
          initialRegion={this.state.initialPosition}>
          <MapView.Marker
            coordinate={this.state.markerPosition}>
            <View>

            </View>
          </MapView.Marker>
        </MapView>
      </ScrollView>
    )
  }

}

module.exports = CheckMap