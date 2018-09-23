import React, { Component } from "react";
import { createStackNavigator } from "react-navigation";
import MainMap from '../Components/SubPages/MainMap';
import Search from '../Components/SubPages/Search';

const RootStack =  createStackNavigator({
    MainMap: { screen: MainMap},
    Search: { screen: Search},
})
class Map extends Component {
    render(){
        return(
           <RootStack/>
        );
    }
}

export default Map;
