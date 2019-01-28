import { StyleSheet, Dimensions } from 'react-native'
const {width, height} = Dimensions.get('window')

const SCREEN_HEIGHT = (height - 70)
const SCREEN_WIDTH = width

const Styles = StyleSheet.create({
  title: {
    margin: '10%',
    marginBottom: '8%',
    fontSize: 40,
    color: '#000000',
    letterSpacing: 2.25,
    textAlign: 'center'
  },
  text: {
    marginLeft: '10%',
    fontSize: 20,
    color: '#333333',
  },
  textf: {
    marginLeft: '10%',
    fontSize: 16,
    color: '#333333',
  },
  margin: {
    marginBottom: 18
  },
  viewAddressContent: {
    paddingTop: 5,
    paddingRight: 10,
    paddingLeft: 10,
    paddingBottom: 1,
    backgroundColor: 'white',
    position: 'absolute',
    marginTop: SCREEN_HEIGHT / 8,
    zIndex: 1,
    marginLeft: '5%',
    marginRight: '5%',
    width: '90%',
    borderRadius: 8,
  },
  viewAddress: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  youHere: {
    color: '#8E92A7',
    fontSize: 12,
    marginBottom: -6
  },
  inputTextSearh: {
    borderWidth: 0,
    fontSize: 16,
    width: '90%'
  },
  map:{
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT
  },
  acceptPayContent:{
    height: 60,
    width: '100%',
    backgroundColor: '#FF7A27',
    zIndex: 9,
    position: 'absolute',
    bottom: 0
  },
  acceptPay: {
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
    paddingTop: 18
  }
})
module.exports = Styles