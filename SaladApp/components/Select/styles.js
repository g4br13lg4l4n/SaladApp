import { StyleSheet } from 'react-native'

const Styles = StyleSheet.create({
  bodyScroll: {
    backgroundColor: '#F5F5F5',
    flexDirection: 'column',
  },
  head:{
    justifyContent:'space-between',
    flexDirection:'row',
    marginLeft: '5%',
    marginRight: '5%',
    marginTop: '4%',
    marginBottom: 5,
    height: 35,
  },
  view: {
    marginLeft: '5%',
    marginRight: '5%',
    marginTop: '4%',
    marginBottom: '4%',
    backgroundColor: 'white'
  },
  viewH: {
    marginLeft: '5%',
    marginRight: '5%',
    marginTop: '4%',
    marginBottom: '4%',
    backgroundColor: 'white',
    height: 250
  },
  title: {
    paddingTop: 6,
    fontSize: 16,
    height: 32,
    color: '#333333',
    letterSpacing: 2.25,
    textAlign: 'center',
  },
  titleText: {
    paddingTop: 6,
    fontSize: 18,
    color: '#333333',
    letterSpacing: 1.6,
    textAlign: 'center',
    backgroundColor: 'white',
    padding: 2,
    paddingTop: 6,
    paddingBottom: 6
  },
  constIconCircle: {
    borderRadius: 36/2,
    width: 36,
    height: 36,
    backgroundColor: '#FF7A27'
  },
  icon:{
    marginRight: -10,
    marginLeft: 2
  },
  imgSalad: {
    backgroundColor: '#ccc',
    width: '100%',
    justifyContent: 'center',
  },
  viewScroll: {
    height: 900,
    marginTop: '4%',
    marginBottom: 20,
    paddingTop: 4,
    paddingBottom: 10,
  },
  categoryText: {
    marginTop: 10,
    color: '#9E9E9E',
    letterSpacing: 1,
    fontSize: 12,
    textAlign: 'left',
    marginLeft: '5%',
    marginRight: '5%',
  },
  frutName: {
    marginTop: 10,
    color: '#333333',
    fontSize: 18,
    lineHeight: 20,
    letterSpacing: 0.5,
    textAlign: 'left',
    marginLeft: '5%',
    marginRight: '5%',
  },
  contentInfo:{
    flexDirection: 'row',
    justifyContent:'space-around',
    backgroundColor: 'white',
  }
})
module.exports = Styles