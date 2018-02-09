import React, { Component } from 'react'
import { ScrollView, Image, View, Linking} from 'react-native'
import { Images } from '../Themes'

import { Button, Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

// Styles
import styles from './Styles/LaunchScreenStyles'

export default class LaunchScreen extends Component {
  render () {
    return (
      <View style={styles.mainContainer}>
        <ScrollView style={styles.container}>

          <View style={styles.centered}>
            <Image source={Images.launch} style={styles.logo} />
          </View>
          <Text style={styles.text}>
              {"React Native Calculator"}
          </Text>
          <Text style={styles.authorContainer}>
              <Text>by </Text>
              <Text style={styles.author} 
                onPress={() => Linking.openURL('http://david-wu.me')}>
              {"David Wu (Pl4gue)"}
              </Text>
          </Text>
          <View style={styles.buttonContainer}>
            <Button
              title={"Open\nCalculator"}
              textStyle={styles.calcButton_font}
              buttonStyle={styles.calcButton}
              onPress={() => this.props.navigation.navigate('CalculatorScreen')}
            />
           </View>

        </ScrollView>
      </View>
    )
  }
}
