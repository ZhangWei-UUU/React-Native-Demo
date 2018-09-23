/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from "react";
import SplashScreen from "react-native-splash-screen";
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Map from "./Pages/Map";
import Tool from "./Pages/Tool";
import Icon from 'react-native-vector-icons/FontAwesome';

const RootStack =  createMaterialBottomTabNavigator({
    Home: { screen: Home,        
        navigationOptions: {
        tabBarLabel: '首页',
        tabBarIcon:() => <Icon size={ 20 } name="home"/>
    }},
    Map: { screen: Map ,
            navigationOptions: {
            tabBarLabel: '地图',
            tabBarIcon:() => <Icon size={ 20 } name="map" />
    }},
    Tool: { screen: Tool ,
            navigationOptions: {
            tabBarLabel: '理财',
            tabBarIcon:() => <Icon size={ 20 } name="money" />
    }},
    Login: { screen: Login ,
        navigationOptions: {
            tabBarLabel: '登录',
            tabBarIcon:() => <Icon size={ 20 } name="user" />
        }}
  }, {
    initialRouteName: 'Home',
    barStyle:{backgroundColor:"#fff"},
    activeColor: '#ff8080',
  }
);

class App extends Component{
    componentDidMount(){
        SplashScreen.hide();
    }
    render() {
        return (
            <RootStack/>
        );
    }
}

export default App;

