import { View, Text, TouchableOpacity, TextInput} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import React, {Component} from 'react'
import Styles from '../styles'

class FindLocation extends Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.editLocation = this.editLocation.bind(this)
  }

  editLocation(){
    alert('editar');
  }

  render() {
    return (
      <View style={Styles.viewAddressContent}>
        <Text  style={Styles.youHere}>Tu estas aquí:</Text>
        <View style={Styles.viewAddress}>    
          <TextInput 
              style={Styles.inputTextSearh}
              placeholder="Dirección"
            /> 
            <Icon.Button name="pencil" onPress={()=>{ this.editLocation() }} color="#FF7A27" backgroundColor="transparent"></Icon.Button> 
        </View> 
      </View> 
    )
  }
}

module.exports = FindLocation