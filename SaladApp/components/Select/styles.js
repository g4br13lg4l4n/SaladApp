import { StyleSheet } from 'react-native'

const Styles = StyleSheet.create({
  head:{
    flex: 1,
    justifyContent:'space-between',
    flexDirection:'row',
    marginLeft: '5%',
    marginRight: '5%',
    marginTop: '4%',
    marginBottom: '4%',
  },
  title: {
    paddingTop: 6,
    fontSize: 16,
    color: '#333333',
    letterSpacing: 2.25,
    textAlign: 'center',
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
  }
})
module.exports = Styles