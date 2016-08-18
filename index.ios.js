/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
'use strict';

import React, { Component,PropTypes } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  WebView,Dimensions,Navigator,TouchableHighlight, requireNativeComponent
} from 'react-native';
import DrawerLayout from 'react-native-drawer-layout';
import Camera from 'react-native-camera';
import ScrollableTabView, {DefaultTabBar, } from 'react-native-scrollable-tab-view';
import CVCameraIOS from './CVCameraIOS.js';
class AwesomeProj extends Component {
  renderScene(route, navigator) {
   if(route.index === 0) {
     
     return <MyScene navigator={navigator}/>
   }
   if(route.index === 1) {
     
     //return <AugView navigator={navigator}/>
     return <CVCameraIOS/>
   }
  }
  
  render() {
  const routes = [
    {title: 'First Scene', index: 0},
    {title: 'Second Scene', index: 1},
  ];
    
  return (
     <Navigator initialRoute={{ index: 0 }}
  renderScene={ this.renderScene } />

      
  );
}
  
}

class MyScene extends Component {
  
  render() {
    return (
      <ScrollableTabView style={{marginTop: 20, }} 
        renderTabBar={() => 
        <DefaultTabBar />} > 
        <TouchableHighlight onPress={() => {this.props.navigator.push({title: 'Second Scene', index: 1})}}>
        <Text tabLabel='Data'>Data</Text> 
        </TouchableHighlight>
        <Text tabLabel='Activity'></Text> 
      </ScrollableTabView>
    )
  }
}

class AugView extends Component {
  render() {
    return (
    <View style={styles.container}>
      <TouchableHighlight onPress={() => {this.props.navigator.pop()}}>
        <Text style = {styles.top}> We here now</Text>
    </TouchableHighlight>
      

      
        <WebView source={{uri: "https://twgljs.org/examples/twgl-cube.html" }} 
            style={{ width:Dimensions.get('window').width }} />
        
      </View>
      
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
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
  top: {
    marginTop:20,
    textAlign:'center',
  },
});

AppRegistry.registerComponent('AwesomeProj', () => AwesomeProj);
