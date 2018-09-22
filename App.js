/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from "react";
import SplashScreen from "react-native-splash-screen";
import { createStackNavigator } from "react-navigation";
import Home from "./Pages/Home";
import Login from "./Pages/Login";

const RootStack = createStackNavigator({
    Home: {	
        screen: Home,
        title:"home",
    },
    Login :{
        title:"login",
        screen: Login
    }
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

