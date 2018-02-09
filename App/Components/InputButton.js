import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { TouchableOpacity, Text } from 'react-native'

import styles from './Styles/InputButtonStyle'

export default class InputButton extends Component {
  // // Prop type warnings
  // static propTypes = {
  //   someProperty: PropTypes.object,
  //   someSetting: PropTypes.bool.isRequired,
  // }
  //
  // // Defaults for props
  // static defaultProps = {
  //   someSetting: false
  // }

  render() {
    return (
        <TouchableOpacity style={styles.inputButton}>
            <Text style={styles.inputButtonText}>{this.props.value}</Text>
        </TouchableOpacity>
    )
  }
}
