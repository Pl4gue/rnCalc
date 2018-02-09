import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'

import InputButton from './../Components/InputButton';

// Styles
import styles from './Styles/CalculatorScreenStyle'

// Define the input buttons that will be displayed in the calculator.
const inputButtons = [
  [1, 2, 3, '/'],
  [4, 5, 6, '*'],
  [7, 8, 9, '-'],
  [0, '.', '=', '+']
];

class CalculatorScreen extends Component {
  render () {
    return (
      <View style={styles.rootContainer}>
          <View style={styles.displayContainer}></View>
          <View style={styles.inputContainer}>
            {this._renderInputButtons()}
          </View>
      </View>
    )
  }

  /**
   * For each row in `inputButtons`, create a row View and add create an InputButton for each input in the row.
   */
  _renderInputButtons() {
    let views = [];

    for (var r = 0; r < inputButtons.length; r ++) {
        let row = inputButtons[r];

        let inputRow = [];
        for (var i = 0; i < row.length; i ++) {
            let input = row[i];

            inputRow.push(
                <InputButton value={input} key={r + "-" + i} />
            );
        }

        views.push(<View style={styles.inputRow} key={"row-" + r}>{inputRow}</View>)
    }

    return views;
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
