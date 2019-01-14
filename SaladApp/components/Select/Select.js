import {View, Text, TouchableHighlight, Image, FlatList, ScrollView} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import {stylesGeneral} from '../StyleGeneral/styles'
import React, {Component} from 'react'
import Styles from './styles'

const Tomate = require('../../imgs/tomate.png')
const Lechuga = require('../../imgs/lechuga.png')
const Aguacate = require('../../imgs/aguacate.png')

class Select extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: '',
      first: false,
      data: [{
        category: 'VERDURA',
        name: 'Tomate',
        calorias: '50',
        img: Tomate
      },{
        category: 'VERDURA',
        name: 'Lechuga',
        calorias: '10',
        img: Lechuga
      },{
        category: 'VERDURA',
        name: 'Aguacate',
        calorias: '200',
        img: Aguacate
      }],
    }
    this.Count = this.Count.bind(this)
  }

  componentWillMount() {
    console.warn('2')
    count = this.Count()
    this.setState({
      count,
      first: true
    })
  }

  componentDidUpdate() {
    if(this.state.first == true){
      
      count = this.Count()
      console.warn(count)
      this.state.count = count
    } 
  }

  Count() {
    const { navigation } = this.props
    const count = navigation.getParam('count')
    return count
  }
  
  render() {
    return(
      <View style={stylesGeneral.backgroundBlue}>
        <ScrollView style={Styles.bodyScroll}>
          <View style={Styles.head}>
            <TouchableHighlight style={Styles.constIcon}>
              <View>
                <Icon.Button name="shopping-basket" color="#FF7A27" backgroundColor="transparent"><Text>{this.state.count} </Text></Icon.Button>
              </View>
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
                style={Styles.flatList}
                data={this.state.data}
                renderItem={ ({item}) => 
              
              <View style={Styles.view}>
                  <Image style={Styles.imgSalad}
                    source={item.img}
                  />
                  <Text style={Styles.categoryText}>{item.category}</Text> 
                  <Text style={Styles.frutName}> {item.name}</Text> 

                  <View style={Styles.contentInfo}>
                    <View>
                      <Icon.Button name="tasks" color="#BDBDBD" backgroundColor="transparent">{item.calorias}</Icon.Button>
                    </View>
                    <TouchableHighlight> 
                      <Icon.Button name="heart" color="#BDBDBD" backgroundColor="transparent">Agregar</Icon.Button> 
                    </TouchableHighlight>
                  </View>

              </View>
            }
            keyExtractor={(item, index) => index.toString()}
            />  
          </View>


        </ScrollView>
      </View>
    )
  }
}

module.exports = Select