import React, { Component } from "react";
import { createStackNavigator } from "react-navigation";
import Comments from '../Components/SubPages/Comment';
import Search from '../Components/SubPages/Search';

const RootStack =  createStackNavigator({
    Comment: { screen: Comments},
    Search: { screen: Search},
})

class Home extends Component {
    render(){
        return( <RootStack/>);
    }
}

export default Home;
