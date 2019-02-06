import React from 'react'
import { DangerZone } from 'expo'
const { Lottie } = DangerZone

import {
  StyleSheet,
  View,
  Button,
} from 'react-native';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    animation: null,
  };

  componentWillMount() {
    this._playAnimation();
  }

  render() {
    return (
      <View style={styles.animationContainer}>
        {this.state.animation &&
          <Lottie
            ref={animation => {
              this.animation = animation;
            }}
            style={{
              width: '100%',
              height: '100%',
              backgroundColor: '#eee',
              alignItems: 'center',
            }}
            source={this.state.animation}
          />}
        <View style={styles.buttonContainer}>
          <Button title="Restart Animation" onPress={this._playAnimation} />
        </View>
      </View>
    );
  }

  _playAnimation = () => {
    if (!this.state.animation) {
      this._loadAnimationAsync();
    } else {
      this.animation.reset();
      this.animation.play();
    }
  };

  _loadAnimationAsync = () => {
    const animSource = require('../assets/images/mapletest-nomask.json')
    this.setState({ animation: animSource }, this._playAnimation);
  };
}

const styles = StyleSheet.create({
  animationContainer: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  buttonContainer: {
    paddingTop: 20,
  },
});

