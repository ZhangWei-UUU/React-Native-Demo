import React, { Component } from "react";
import { View, Text,DrawerLayoutAndroid } from "react-native";
import { NativeRouter, Link,Route } from "react-router-native";
import { List, ListItem,Avatar } from "react-native-elements";
import Home from "./Home";
import Settings from "./Settings";
import NavMenu from "../Constant/NavMenu";
import NavStyle from "../Styles/navigatorStyle";
import Login from "./Login";
const bcuri = require("../img/login-background.jpg");
class Frame extends Component {
	render() {
		var navigator =( <View style={{flex: 1, backgroundColor: "#fff"}}>
			<View>
				<View style={NavStyle.header}>
					<Avatar
						medium
						rounded
						source={bcuri}
						activeOpacity={0.7}
					/>	
					<Text style={NavStyle.p}>{"尚未登录"}</Text>
				</View>
				<List containerStyle={{marginBottom: 20}}>
					{
						NavMenu.map((menu,key) => (
							<Link to={menu.url} key={key}>
								<ListItem
									roundAvatar
									leftIcon={{name:menu.icon}}
									key={menu.name}
									title={menu.name}
								/>
							</Link>
						))
					}
				
				</List>
			</View>
		</View>);
		return(
			<NativeRouter>
				<DrawerLayoutAndroid
					drawerWidth={300}
					drawerPosition={DrawerLayoutAndroid.positions.Left}
					renderNavigationView={()=>navigator }>
					<View>
						<View>					
							<Route exact path="/" component={Home}/>
							<Route path="/settings" component={Settings}/>
							<Route path="/login" component={Login}/>
						</View>
					</View>
				</DrawerLayoutAndroid>
			</NativeRouter>
		);
	}
}

export default Frame;
