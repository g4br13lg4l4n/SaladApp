import { StyleSheet } from 'react-native'

const Styles = StyleSheet.create({
  background:{
    backgroundColor: '#F5F5F5',
    height: '100%',
    flex: 1
  },
  imgSalad: {
    backgroundColor: '#ccc',
    width: '100%',
    justifyContent: 'center',
  },
  bodyScroll: {
    flex: 10,
    backgroundColor: '#F5F5F5',
    height: '120%',
  },
  textp: {
    color: '#333333',
    letterSpacing: 1.8,
    fontSize: 22,
    textAlign: 'center',
    width: '80%',
    marginTop: 20,
    marginRight: 'auto',
    marginBottom: 20,
    marginLeft: 'auto',
    lineHeight: 28
  },
  button: {
    backgroundColor: '#FFFFFF',
    height: 60,
    paddingTop: 9,
    width: '100%',
    borderRadius: 5,
    marginTop: 10,
    marginRight: 'auto',
    marginBottom: 10,
    marginLeft: 'auto',
  },
  buttonText: {
    textAlign: 'center',
    color: '#333333',
    fontSize: 16,
    marginTop: 9,
    letterSpacing: 1.75,
    lineHeight: 24
  },
  contentButton: {
    width: '80%',
    marginRight: 'auto',
    marginLeft: 'auto'
  }
})

module.exports = {Styles}