import React, { Component } from "react";
import { View,Text } from "react-native";

class MainMap extends Component {
    static navigationOptions = {
        title: "主地图",
        headerStyle: {
            backgroundColor: "#f4511e",
        },
        headerTintColor: "#fff",
    };
    render(){
        return(
            <View>
                <Text>主地图</Text>
            </View>
        );
    }
}

export default MainMap;
