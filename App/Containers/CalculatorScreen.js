import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'

// Styles
import styles from './Styles/CalculatorScreenStyle'

class CalculatorScreen extends Component {
  render () {
    return (
      <View style={styles.rootContainer}>
          <View style={styles.displayContainer}></View>
          <View style={styles.inputContainer}></View>
      </View>
    )
  }

}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CalculatorScreen)
