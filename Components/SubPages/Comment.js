import React, { Component } from "react";
import { ScrollView,Dimensions } from "react-native";
import Carousel from "../HomeModules/Carousel";
import FirstList from "../HomeModules/FirstList";
import SecondList from "../HomeModules/SecondList";

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
            <ScrollView style={{flex:1}}>
                <Carousel/>
                <FirstList/>
                <SecondList/>
            </ScrollView>
        );
    }
}

export default Comment;
