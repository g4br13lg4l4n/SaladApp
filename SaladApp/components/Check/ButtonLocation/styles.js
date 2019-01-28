import { StyleSheet } from 'react-native'

const Styles = StyleSheet.create({
  contentButton: {
    position: 'absolute',
    zIndex: 9,
    bottom: 100,
    right: '10%',
    paddingLeft: 2
  },
  constIconCircle: {
    borderRadius: 44/2,
    width: 44,
    height: 44,
    backgroundColor: 'white',
    paddingLeft: 5,
    paddingTop: 3
  },
  icon:{
    marginRight: -7,
  },
})

module.exports = Styles