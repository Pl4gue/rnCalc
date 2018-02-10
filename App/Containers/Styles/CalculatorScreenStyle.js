import {
  StyleSheet
} from 'react-native'
import {
  ApplicationStyles
} from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  rootContainer: {
    flex: 1
  },

  displayContainer: {
    flex: 2.5,
    backgroundColor: '#193441',
    justifyContent: 'center'
  },

  displayText: {
    color: 'white',
    fontSize: 58,
    fontWeight: 'bold',
    textAlign: 'right',
    paddingRight: 18,
    paddingTop: 12
  },

  inputContainer: {
    flex: 7.5,
    backgroundColor: '#3E606F'
  },

  inputButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.5,
    borderColor: '#91AA9D'
  },

  inputButtonHighlighted: {
    backgroundColor: '#193441'
  },

  inputButtonText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white'
  },

  inputRow: {
    flex: 1,
    flexDirection: 'row'
  }
})
