import React, { Component } from "react";
import { View,Text } from "react-native";
import {Header} from "react-native-elements";
import layoutStyle from "../Styles/layoutStyle";

class MainHeader extends Component {
	render() {
		return(
			<Header
				leftComponent={{ icon: "menu", color: "#fff" }}
				centerComponent={{ text: "MY TITLE", style: { color: "#fff" } }}
				rightComponent={{ icon: "home", color: "#fff" }}
			/>
			// <View style={layoutStyle.header}> 
			// 	<Text>HEADER</Text>
			// </View>
		);
	}
}

export default MainHeader;