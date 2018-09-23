import React, { Component } from "react";
import { View,Text } from "react-native";
import FirstList from '../HomeModules/FirstList';

class Comment extends Component {
    static navigationOptions = {
        title: "推荐",
        headerStyle: {
            backgroundColor: "#fff",
        },
        headerTintColor: "#484848",
    };
    render(){
        return(
           <View>
               <FirstList/>
           </View>
        );
    }
}

export default Comment;
