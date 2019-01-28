import Icon from 'react-native-vector-icons/FontAwesome'
import { View, TouchableOpacity} from 'react-native'
import React, {Component} from 'react'
import Styles from './styles'


class ButtonLocation extends Component{
  constructor(props) {
    super(props);
    this.state = {}
  }

  render(){
    return(
      <View style={Styles.contentButton}>
        <TouchableOpacity
         style={Styles.constIconCircle}
          onPress={()=> { this.props.getPosition() }}>
          <Icon.Button
            name="dot-circle-o" style={Styles.icon} onPress={()=>{ this.props.getPosition() }} color="#FF7A27" size={22} backgroundColor="transparent"
          />
        </TouchableOpacity>
      </View>
    )
  }

}

module.exports = ButtonLocation