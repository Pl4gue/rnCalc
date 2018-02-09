import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    paddingTop: Metrics.baseMargin,
    paddingBottom: Metrics.baseMargin
  },
  logo: {
    marginTop: Metrics.doubleSection,
    height: Metrics.images.logo,
    width: Metrics.images.logo,
    resizeMode: 'contain'
  },
  centered: {
    alignItems: 'center'
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: Metrics.doubleSection
  },
  calcButton: {
    backgroundColor: "#3E606F",
    width: 250,
    height: 5 * Metrics.doubleBaseMargin,
    borderColor: "transparent",
    borderWidth: 5,
    borderRadius: 15
  },
  calcButton_font: {
    fontSize: 22,
    textAlign: 'center',
    fontWeight: "700"
  },
  text: {
    flex: 1,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#ffffff',
    marginTop: Metrics.doubleBaseMargin
  },
  authorContainer: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    color: '#ffffff',
  },
  author: {
    textDecorationLine: 'underline'
  }
})
