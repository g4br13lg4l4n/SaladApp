import { View, Button, Text, TouchableOpacity, TextInput, ScrollView, StyleSheet} from 'react-native'
import React, {Component} from 'react'
import Styles from './styles'

class Check extends Component {
  render() {
    return (
      <ScrollView style={stylesGeneral.background}>    
        <Text style={Styles.title}> PERFIL </Text>  
        <Text style={Styles.text}> cantidad a pagar: </Text> 
        <View style={Styles.margin}>
          <TextInput 
            style={stylesGeneral.inputText}
            onChangeText={(email) => this.setState({email})}
            placeholder="Cantidad con la que desea pagar"
          />
        </View>
        <View style={Styles.margin}>
          <TextInput 
            style={stylesGeneral.inputText}
            onChangeText={(email) => this.setState({email})}
            placeholder="Teléfono"
          />
        </View>
        <View style={Styles.margin}>
          <TextInput 
            style={stylesGeneral.inputText}
            onChangeText={(email) => this.setState({email})}
            placeholder="Estado"
          />
        </View>
        <View style={Styles.margin}>
          <TextInput 
            style={stylesGeneral.inputText}
            onChangeText={(email) => this.setState({email})}
            placeholder="Colonia"
          />
        </View>
        <View style={Styles.margin}>
          <TextInput 
            style={stylesGeneral.inputText}
            onChangeText={(email) => this.setState({email})}
            placeholder="Calle"
          />
        </View>
        <View style={Styles.margin}>
          <TextInput 
            style={stylesGeneral.inputText}
            onChangeText={(email) => this.setState({email})}
            placeholder="Número de casa o departamento"
          />
        </View>
        <View style={Styles.margin}>
          <TextInput 
            multiline={true}
            numberOfLines={4}
            style={stylesGeneral.inputText}
            onChangeText={(email) => this.setState({email})}
            placeholder="Referencia del domicilio "
          />
        </View>
      </ScrollView>
    )
  }
}

const stylesGeneral = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white'
},
  inputText: {
    borderColor: '#E0E0E0',
    borderWidth: 1,
    width: '80%',
    fontSize: 16,
    paddingLeft: 12,
    marginTop: 10,
    marginRight: 'auto',
    marginBottom: 10,
    marginLeft: 'auto',
  },
  buttonPrimary: {
    width: '80%',
    marginTop: 20,
    marginRight: 'auto',
    marginBottom: 10,
    marginLeft: 'auto',
  }
})

module.exports = Check