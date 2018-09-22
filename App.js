/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from "react";
import SplashScreen from "react-native-splash-screen";
// import { createBottomTabNavigator,createStackNavigator } from "react-navigation";
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Icon from 'react-native-vector-icons/FontAwesome';

const RootStack =  createMaterialBottomTabNavigator({
    Home: { screen: Home,        
        navigationOptions: {
        tabBarLabel: 'Test',
        tabBarIcon:() => <Icon size={ 20 } name="rocket" color={ '#fff' }/>
    }
},
    Login: { screen: Login ,
        navigationOptions: {
            tabBarLabel: 'Test',
            tabBarIcon:() => <Icon size={ 20 } name="facebook" color={ '#fff' }/>
        }},
  }, {
    initialRouteName: 'Home',
    barStyle:{backgroundColor:"red"},
    activeColor: '#fff',
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

