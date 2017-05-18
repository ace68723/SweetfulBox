SweetProductDetial


import React, { Component } from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';

// var ScrollableTabView = require('react-native-scrollable-tab-view');
import ScrollableTabView from 'react-native-scrollable-tab-view'
import SweetProductDetialScrollView from './SweetProductDetialScrollView';
const {height, width} = Dimensions.get('window');

console.log(height,width)

export default class SweetProductDetial extends Component {
	constructor() {
		super();
		this.state = {
			attr1: [
				{ image: require('./Images/1.png') },
				{ image: require('./Images/2.png') },
				{ image: require('./Images/3.png') },
				{ image: require('./Images/4.png') },
			]
		}
	}
  render() {
    return (

        <ScrollView style={styles.container}>
            <SweetProductDetialScrollView attr1={this.state.attr1}/>

            <View style={{}}>
              <View style={{alignItems:'center'}}>
                <Text style={{fontSize:19,
                              fontWeight:'600',
                              // textAlign: 'center',
                            }}>
                    浪味仙 | 创意花式薯卷
                </Text>

                <Text style={{color:'#848689',
                              fontWeight:'500',
                              fontSize:15,
                              // textAlign: 'center',
                              marginTop:10,
                            }}>
                    田园蔬菜口味
                </Text>

                <View style={{flexDirection:'row',
                              // backgroundColor:"black",
                              width:150,
                              // alignSelf:'flex-end',
                              marginTop:10,}}>
                  <Text style={{color:'#ff768b',
                                fontWeight:'400',
                                fontSize:15,
                                textAlign: 'right',
                                flex:0.55,
                                // marginRight:10,
                                paddingRight:20,
                                // backgroundColor:"blue"
                              }}>
                      $4.99
                  </Text>
                  <View style={{flex:0.45,}}>
                    <View style={{backgroundColor:"#ff768b",
                                 width:16,
                                 height:16,
                                 alignItems:'center',
                                 justifyContent:'center',
                                }}>
                          <Text style={{color:'#ffffff',
                                        fontWeight:'400',
                                        fontSize:13,
                                      }}>
                              6
                          </Text>
                    </View>
                  </View>
                </View>
              </View>

              <View style={{marginTop:20}}>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                  <Text style={{marginLeft:20,
                                color:'#848689',
                                fontWeight:'500',
                                fontSize:15,
                              }}>
                    口味
                  </Text>
                  <View style={{marginLeft:10,
                                backgroundColor:"#ffffff",
                                borderColor: '#ff768b',
                                borderWidth: 1,
                                padding:10,
                                paddingTop:5,
                                paddingBottom:5,
                              }}>
                    <Text style={{fontSize:12,fontWeight:"600"}}>
                      田园蔬菜口味
                    </Text>
                  </View>

                  <View style={{marginLeft:10,
                                backgroundColor:"#ffffff",
                                borderColor: '#848689',
                                borderWidth: 1,
                                padding:10,
                                paddingTop:5,
                                paddingBottom:5,
                              }}>
                    <Text style={{fontSize:12,fontWeight:"600"}}>
                      韩式泡菜口味
                    </Text>
                  </View>

                              <View style={{marginLeft:10,
                                backgroundColor:"#ffffff",
                                borderColor: '#848689',
                                borderWidth: 1,
                                padding:10,
                                paddingTop:5,
                                paddingBottom:5,
                              }}>
                    <Text style={{fontSize:12,fontWeight:"600"}}>
                      海苔口味
                    </Text>
                  </View>
                </View>
                <View style={{flexDirection:'row',alignItems:'center',marginTop:15}}>
                  <Text style={{marginLeft:20,
                                color:'#848689',
                                fontWeight:'500',
                                fontSize:15,
                              }}>
                    大小
                  </Text>
                  <View style={{marginLeft:10,
                                backgroundColor:"#ffffff",
                                borderColor: '#848689',
                                borderWidth: 1,
                                padding:10,
                                paddingTop:5,
                                paddingBottom:5,
                              }}>
                    <Text style={{fontSize:12,fontWeight:"600"}}>
                      大包 | 84G/克
                    </Text>
                  </View>

                  <View style={{marginLeft:10,
                                backgroundColor:"#ffffff",
                                borderColor: '#ff768b',
                                borderWidth: 1,
                                padding:10,
                                paddingTop:5,
                                paddingBottom:5,
                              }}>
                    <Text style={{fontSize:12,fontWeight:"600"}}>
                      小包 | 42G/克
                    </Text>
                  </View>
                </View>
              </View>
            </View>

            <View style={{flex:0.15,backgroundColor:'yellow',}}>
            </View>
            <ScrollableTabView
                      prerenderingSiblingsNumber = {2}
                      tabBarUnderlineStyle={{backgroundColor:'#ff768b',
                                             width:80,
                                             marginLeft:55,
                                             height:3,

                                           }}
                      style={{borderColor:"#ffffff"}}
                      tabBarActiveTextColor={"#ff768b"}
                      tabBarTextStyle={{ fontSize: 15} }
            >
                <View tabLabel="服务明细">
                  <Image
                     style={{ width: width*0.446,
                              height: width*0.446*1.4043}}
                     source={require('./Images/1.png')}
                   />
                </View>
                <View tabLabel="产品详情">
                  <Image
                     style={{ width: width*0.446,
                              height: width*0.446*1.4043}}
                     source={require('./Images/2.png')}
                   />
                </View>
             </ScrollableTabView>
        </ScrollView>

    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
