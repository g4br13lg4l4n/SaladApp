import { StyleSheet } from 'react-native'

const Styles = StyleSheet.create({
  head:{
    justifyContent:'space-between',
    flexDirection:'row',
    marginLeft: '5%',
    marginRight: '5%',
    marginTop: '4%',
    marginBottom: 5,
  },
  view: {
    marginLeft: '5%',
    marginRight: '5%',
    marginTop: '4%',
    marginBottom: '4%',
  },
  viewScroll:{
    marginTop: '4%',
    marginBottom: 20,
    paddingTop: 4,
    paddingBottom: 10,
  },
  title: {
    paddingTop: 6,
    fontSize: 16,
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
  container: {
    flex: 1,
    marginTop: 20,
  }
})
module.exports = Styles