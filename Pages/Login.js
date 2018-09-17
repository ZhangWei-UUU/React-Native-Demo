import React, { Component } from "react";
import { View,ImageBackground, Dimensions, StyleSheet,TextInput} from "react-native";
import { Button, Text } from "react-native-elements";
const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

const bcuri = require("../img/login-background.jpg");

class Login extends Component{
    submit = () =>{
        console.log("xx")
    };

	render(){
		return(
			<ImageBackground source={bcuri}
				style={styles.bgImage}>
				<View style={styles.loginView}>
					<Text h3 style={{ color: "#fff",textAlign:"center"}}>登录</Text>
                    <TextInput
                       style={{height: 40, borderColor: '#fff', borderWidth: 1}}
                    //    onChangeText={(text) => this.setState({text})}
                    //    value={this.state.text}
                    />
					<Button
						large
                        onPress={this.submit}
                      
						buttonStyle={styles.submit}
						title='登录'
						button
					/>    
				</View>	
			</ImageBackground>
		);
	}
}

const styles = StyleSheet.create({
	loginView: {	
		paddingTop:300
	},
	bgImage: {
		flex: 1,
		top: 0,
		left: 0,
		width: SCREEN_WIDTH,
		height: SCREEN_HEIGHT,
		justifyContent: "center",
		alignItems: "center"
    },
    submit:{
        backgroundColor:"red",
        width:200,
        borderRadius:10
    }
});

export default Login;