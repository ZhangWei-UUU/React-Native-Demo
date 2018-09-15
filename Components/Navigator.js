import React, { Component } from "react";
import { View,Text } from "react-native";
import { Link } from "react-router-native";

class Navigator extends Component {
	render() {
		return(
			<View style={{flex: 1, backgroundColor: "#fff"}}>
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
	}
}

export default Navigator;
