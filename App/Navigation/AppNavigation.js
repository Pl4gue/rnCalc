import {
  StackNavigator
} from 'react-navigation'
import CalculatorScreen from '../Containers/CalculatorScreen'
import LaunchScreen from '../Containers/LaunchScreen'

import { Easing, Animated } from 'react-native'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  CalculatorScreen: {
    screen: CalculatorScreen
  },
  LaunchScreen: {
    screen: LaunchScreen
  }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'LaunchScreen',
  navigationOptions: {
    headerStyle: styles.header,
    gesturesEnabled: true,
    gesturesDirection: 'inverted'
  },
  transitionConfig: () => ({
    transitionSpec: TransitionSpec,
    screenInterpolator: sceneProps => {
      const { layout, position, scene } = sceneProps;
      const { index } = scene;
      const width = layout.initWidth;

      return {
        opacity: position.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [ 0, 1, 0],
        }),
        transform: [{
          translateX: position.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [-width, 0, width],
          }),
        }]
      };
    },
    headerTitleInterpolator: sceneProps => {
      const { layout, position, scene } = sceneProps;
      const { index } = scene;

      return {
        opacity: position.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [ 0, 1, 0],
        }),
        transform: [{
          translateX: position.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [-50, 0, 50],
          }),
        }]
      };
    },
  }),
});

const TransitionSpec = ({
  duration: 1000,
  easing: Easing.bezier(0.2833, 0.99, 0.31833, 0.99),
  timing: Animated.timing,
});


export default PrimaryNav
