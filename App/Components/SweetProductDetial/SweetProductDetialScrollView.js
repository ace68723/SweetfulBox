// @flow
import React, { Component } from 'react';
import {
  Animated,
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  Image,
  View,
} from 'react-native';

// import MessageQueue from 'MessageQueue';
// MessageQueue.spy(true);

const SCREEN_WIDTH = Dimensions.get('window').width;
const {height, width} = Dimensions.get('window');

const xOffset = new Animated.Value(0);

const onScroll = Animated.event(
  [{ nativeEvent: { contentOffset: { x: xOffset } } }],
  { useNativeDriver: true }
);

function CardView(props: { children?: ReactElement<*> }) {
  return (
    <Animated.ScrollView
      scrollEventThrottle={16}
      onScroll={onScroll}
      horizontal
      pagingEnabled
      style={style.scrollView}
      showsHorizontalScrollIndicator={false}>
      {props.children}
    </Animated.ScrollView>
  )
}

function Page(props: { children?: ReactElement<*> }) {
  return (
    <View style={style.scrollPage}>
      {props.children}
    </View>
  )
}

function Card(props: { page: object, index: number }) {
  return (
    <Animated.View style={[style.card, rotateTransform(props.index)]}>
      <Image source={props.page.image}
             style={{ width: width*0.446,
                      height: width*0.446*1.4043}}/>
    </Animated.View>
  );
}

function rotateTransform(index: number) {
  return {
    transform: [{
      translateX: xOffset.interpolate({
        inputRange: [(index - 1) * SCREEN_WIDTH, index * SCREEN_WIDTH, (index + 1) * SCREEN_WIDTH],
        outputRange: [-150, 0, 150],
      })
    }]
  };
}
export default class SweetProductDetialScrollView extends Component{
  constructor() {
    super()
  }
  render(){
    const pages = this.props.attr1.map((page,key)=>{
      return (
        <Page key = {key}>
          <Card page={page} index={key}/>
        </Page>
      )
    })
    return (
      <CardView>
        {pages}
      </CardView>
    );
  }

}

const style = StyleSheet.create({
  scrollView: {
    flexDirection: 'row',
  },
  scrollPage: {
    width: SCREEN_WIDTH,
    padding: 20,
  },
  card: {
    height: 300,
    width:200,
    alignSelf:'center',
    justifyContent: 'center',
    alignItems: 'center',
    // borderRadius: 4,
    // borderColor: 'black',
    // borderWidth: 1,
    backgroundColor: '#F5FCFF',
  }
});
