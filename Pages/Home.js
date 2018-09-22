import React, { Component } from "react";
import { View,Text,Button } from "react-native";

class Home extends Component {
    static navigationOptions = {
        title: "Home",
        headerStyle: {
            backgroundColor: "#f4511e",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
            fontWeight: "bold",
        },
    };

    render(){

        return(
            <View>
                <Text>主页</Text>
                <Button
                    title="Go to Details" onPress={() => this.props.navigation.navigate("Login")}
                />
            </View>	);
    }
}

export default Home;
