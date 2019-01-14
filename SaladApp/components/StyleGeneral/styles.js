import { StyleSheet } from 'react-native'

const stylesGeneral = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white'
  },
  backgroundBlue: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#F5F5F5'
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
  },
  button: {
    margin: '10%',
    backgroundColor: '#FF8C2B',
    borderRadius: 40,
    borderColor: '#FF6322',
    borderWidth: 1,
    alignItems: 'center',
    paddingTop: 12,
    paddingBottom: 12
  },
  textButton: {
    color: '#FFFFFF',
    fontSize: 18,
    letterSpacing: 1
  }
})

module.exports = {stylesGeneral}