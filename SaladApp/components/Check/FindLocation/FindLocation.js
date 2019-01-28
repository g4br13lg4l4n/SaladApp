import { View, Text, TextInput} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import React, {Component} from 'react'
import Styles from '../styles'
const Key = 'AIzaSyDLN4-o2ty46mImCKgylSuxlS36LskAlCQ'

class FindLocation extends Component {

  constructor(props) {
    super(props);
    this.state = {
      initialPosition: {...this.props.position},
      address: ''
    }
  }

  componentDidMount(){
    const position = this.state.initialPosition
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${position.latitude},${position.longitude}&key=${Key}`)
    .then(function(response) {
      const data = JSON.parse(response._bodyInit)
      const result = data.results
      this.setState({address: result[0].formatted_address})
    }.bind(this))
  }

  clearInputLocation(){
    this.setState({
      address: ''
    })
  }

  render() {
    return (
      <View style={Styles.viewAddressContent}>
        <Text  style={Styles.youHere}>Tu estas aquí:</Text>
        <View style={Styles.viewAddress}>    
          <TextInput 
              style={Styles.inputTextSearh}
              placeholder="Dirección"
              value={this.state.address}
              onChangeText={(address) => this.setState({address})}
            /> 
            <Icon.Button name="pencil" onPress={()=>{ this.clearInputLocation() }} color="#FF7A27" backgroundColor="transparent"></Icon.Button> 
        </View> 
      </View> 
    )
  }
}

module.exports = FindLocation