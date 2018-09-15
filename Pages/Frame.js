import React, { Component } from "react";
import { View, Text,DrawerLayoutAndroid } from "react-native";
import { NativeRouter, Link,Route } from "react-router-native";
import Home from "./Home";
import Settings from "./Settings";
import NavMenu from "../Constant/NavMenu";
class Frame extends Component {
	render() {
		var navigator =( <View style={{flex: 1, backgroundColor: "#fff"}}>
			<View>
				{NavMenu.map((menu,key)=>{
					return(
						<Link to={menu.url} key={key}>
							<Text>{menu.name}</Text>
						</Link>
					);
				})}
			</View>
		</View>);
		return(
			<NativeRouter>
				<DrawerLayoutAndroid
					drawerWidth={300}
					drawerPosition={DrawerLayoutAndroid.positions.Left}
					renderNavigationView={()=>navigator }>
					<View>
						<Text>首页LOGO</Text>
						<View>					
							<Route exact path="/" component={Home}/>
							<Route path="/settings" component={Settings}/>
						</View>
					</View>
				</DrawerLayoutAndroid>
			</NativeRouter>
		);
	}
}

export default Frame;
