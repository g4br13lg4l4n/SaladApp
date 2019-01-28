import { View, Text, TouchableOpacity, TextInput, ScrollView, Dimensions} from 'react-native'
import MapView from 'react-native-maps'
import React, {Component} from 'react'
import Styles from '../styles'
class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }


  render(){
    return(
      <MapView
          style={Styles.map}
          region={this.state.initialPosition}>
        <MapView.Marker
          coordinate={this.state.markerPosition}>
          <View>

          </View>
        </MapView.Marker>
      </MapView>
    )
  }
}

module.exports = Map