import {View, Text, TouchableHighlight, Image, FlatList} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import {stylesGeneral} from '../StyleGeneral/styles'
import React, {Component} from 'react'
import Styles from './styles'

class Select extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [{
        category: 'VERDURA',
        name: 'Tomate',
        calorias: '50',
        img: '../../imgs/tomate.png'
      },{
        category: 'VERDURA',
        name: 'Lechuga',
        calorias: '10',
        img: '../../imgs/lechuga.png'
      },{
        category: 'VERDURA',
        name: 'Aguacate',
        calorias: '200',
        img: '../../imgs/aguacate.png'
      }],
    }
  }
  
  render(){
    return(
      <View style={stylesGeneral.backgroundBlue}>

        <View style={Styles.head}>
          <TouchableHighlight style={Styles.constIcon}>
            <Icon.Button name="shopping-basket" color="#FF7A27" backgroundColor="transparent"> </Icon.Button>
          </TouchableHighlight>

          <Text style={Styles.title}>Construye tu ensalada</Text> 

          <TouchableHighlight style={Styles.constIconCircle}>
            <Icon.Button name="shopping-bag" color="#FFFFFF" style={Styles.icon} size={16} backgroundColor="transparent"> </Icon.Button>
          </TouchableHighlight>
        </View> 

        <View style={Styles.view}>
          <Image style={Styles.imgSalad}
              source={require('../../imgs/imgSelect.png')}
            />
            <Text style={Styles.titleText}>SELECCIONA LOS INGREDIENTES DE TU ENSALADA</Text> 
        </View>

        <View style={Styles.viewScroll}>

          <FlatList
            data={this.state.data}
            renderItem={({item}) => 
            <View style={Styles.view}>
                <Image style={Styles.imgSalad}
                   source={require(''+item.img+'')}
                />
                <Text style={Styles.titleText}>{item.category}</Text> 
                <Text style={Styles.titleText}>{item.name}</Text> 
                <Text style={Styles.titleText}>{item.calorias}</Text> 
            </View>
          }
          />
                
        </View>
          
      </View>
    )
  }
}

module.exports = Select