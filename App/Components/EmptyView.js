'use strict';
import React, {
	Component,
} from 'react';
import {
  Animated,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';


const { width, height } = Dimensions.get('window');
export default class SweetProductDetial extends Component {

  constructor() {
      super();
      this.state = {
      };
  }
	componentDidMount() {
	}



  render() {
      return (
        <View >
          <Text>
            Hello SweetProductDetial
          </Text>

        </View>
      );
  }
}
const styles = StyleSheet.create({
});
