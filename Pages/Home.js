import React, { Component } from "react";
import { View,Text } from "react-native";
import MainHeader from "../Components/MainHeader";

class Home extends Component {
	render() {
		return(
			<View>
				<MainHeader/>
				<Text>主页</Text>
			</View>
		);
	}
}

export default Home;
