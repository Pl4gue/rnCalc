import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

// Styles
import styles from './Styles/CalculatorScreenStyle'
import buttonStyles from './../Components/Styles/InputButtonStyle'

// Define the input buttons that will be displayed in the calculator.
const inputButtons = [
  [1, 2, 3, '/'],
  [4, 5, 6, '*'],
  [7, 8, 9, '-'],
  [0, '.', '=', '+'],
  ['C', 'CE', 'Ans', 'Back']
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
            if(input == 'Back') {
              inputRow.push(
                <TouchableOpacity style={styles.inputButton} key={r + "-" + i}
                  onPress={() => {this.props.navigation.navigate('LaunchScreen')}}>
                    <Text style={styles.inputButtonText}>
                      {input}
                    </Text>
                </TouchableOpacity>
              );
            } else {
              inputRow.push(
                <TouchableOpacity style={styles.inputButton} key={r + "-" + i}>
                    <Text style={styles.inputButtonText}>
                      {input}
                    </Text>
                </TouchableOpacity>
              );  
            }
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
