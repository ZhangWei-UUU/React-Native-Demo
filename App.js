/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, ViewPagerAndroid, View, Text,DrawerLayoutAndroid } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { NativeRouter,Route, Link } from 'react-router-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component{
    componentDidMount(){
        SplashScreen.hide();
    }

    click = () =>{
        console.log("xx")
    }
    
  render() {
    var navigationView = (
        <View style={{flex: 1, backgroundColor: '#fff'}}>
        
            <View>
                <Link to="/">
          <Text>主页</Text>
          </Link>
          <Link to="/settings">
          <Text>设置</Text>
          </Link>
          </View>
         
        </View>
      );
    var Home = ()=> (
        <View style={{flex: 1}}>
        <Text>家dsaaaaaaaaaaaaads</Text>
        </View>
    )

    var Settings = ()=>(
        <View style={{flex: 1, alignItems: 'center'}}>
        <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>World!</Text>
      </View>
    )
    return (
        <NativeRouter>
        <DrawerLayoutAndroid
        drawerWidth={200}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={() => navigationView}>
       <View>
           <Text>首页LOGO</Text>
        <Route exact path="/" component={Home}/>
        <Route path="/settings" component={Settings}/>
        </View>
      </DrawerLayoutAndroid>
      </NativeRouter>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
