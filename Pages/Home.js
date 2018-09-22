import React, { Component } from "react";
import { View,Text,Button } from "react-native";
import PropTypes from 'prop-types';

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
        let { navigation } = this.props;
        return(
        <View>
         <Text>主页</Text>
			<Button
				title="Go to Details"
				onPress={() => navigation.navigate("Login")}
			/>
    </View>	);
    }
}

Home.propTypes = {
    navigation: PropTypes.func.isRequired
};

export default Home;
