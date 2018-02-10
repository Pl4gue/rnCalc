import React, { Component } from 'react'
import { View, Text, TouchableHighlight } from 'react-native'
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
  constructor(props) {
    super(props);
    
    this.initialState = {
      previousInputValue: 0,
      inputValue: 0,
      selectedSymbol: null
    };

    this.state = this.initialState;
    }

  render () {
    return (
      <View style={styles.rootContainer}>
          <View style={styles.displayContainer}>
            <Text style={styles.displayText}>
              {this.state.inputValue}
            </Text>
          </View>
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
                <TouchableHighlight style={styles.inputButton} 
                                    key={r + "-" + i}
                                    onPress={() => {this.props.navigation.goBack()}}>
                    <Text style={styles.inputButtonText}>
                      {input}
                    </Text>
                </TouchableHighlight>
              );
            } else {
              inputRow.push(
                <TouchableHighlight style={styles.inputButton} 
                                    key={r + "-" + i}
                                    underlayColor="#193441"
                                    onPress={() => this._onInputButtonPressed(input)}>
                    <Text style={styles.inputButtonText}>
                      {input}
                    </Text>
                </TouchableHighlight>
              );  
            }
        }

        views.push(<View style={styles.inputRow} key={"row-" + r}>{inputRow}</View>)
    }

    return views;
  }

  _onInputButtonPressed(input) {
    switch (typeof input) {
        case 'number':
            return this._handleNumberInput(input)
        case 'string':
            return this._handleStringInput(input)
    }
  }

  _handleNumberInput(num) {
    let inputValue = (this.state.inputValue * 10) + num;
    this.setState({
        inputValue: inputValue
    });
  }

  _handleStringInput(str) {
    switch (str) {
        case '/':
        case '*':
        case '+':
        case '-':
            this.setState({
                selectedSymbol: str,
                previousInputValue: this.state.inputValue,
                inputValue: 0
            });
            break;
    }
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
