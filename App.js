/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from "react";
import {StyleSheet, View, Text,DrawerLayoutAndroid } from "react-native";
import SplashScreen from "react-native-splash-screen";
import { NativeRouter,Route,Link } from "react-router-native";
import Home from "./Pages/Home";
import Settings  from "./Pages/Settings";

export default class App extends Component{
	componentDidMount(){
		SplashScreen.hide();
	}
    
	render() {
		var navigator =( <View style={{flex: 1, backgroundColor: "#fff"}}>
			<View>
				<Link to="/">
					<Text>主页</Text>
				</Link>
				<Link to="/settings">
					<Text>设置</Text>
				</Link>
			</View>
		</View>);
		return (
			<NativeRouter>
				<DrawerLayoutAndroid
					drawerWidth={200}
					drawerPosition={DrawerLayoutAndroid.positions.Left}
					renderNavigationView={()=>navigator }>
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

