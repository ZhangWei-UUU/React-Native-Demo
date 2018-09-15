/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from "react";
import SplashScreen from "react-native-splash-screen";
import Frame  from "./Pages/Frame";

class App extends Component{
	componentDidMount(){
		SplashScreen.hide();
	}
	render() {
		return (
			<Frame/>
		);
	}
}

export default App;

