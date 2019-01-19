import { View, Button, Text, TouchableOpacity, TextInput, ScrollView} from 'react-native'
import {stylesGeneral} from '../StyleGeneral/styles'
import firebase from 'react-native-firebase'
import MapView from 'react-native-maps'
import React, {Component} from 'react'
import Styles from './styles'

class CheckMap extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  getInitialState() {
    return {
      region: {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
    }
  }

  onRegionChange(region) {
    this.setState({ region })
  }


  render() {
    return (
      <ScrollView style={stylesGeneral.background}
        showsVerticalScrollIndicator={false}>  
        <MapView
          region={this.state.region}
          onRegionChange={this.onRegionChange}
        />
      </ScrollView>
    )
  }

}

module.exports = CheckMap