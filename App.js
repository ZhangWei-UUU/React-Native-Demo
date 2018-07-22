import React, { Component } from "react";
import { View, Text } from "react-native";
import { Tabs } from "antd-mobile-rn";
import Login from "./src/Login";

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {
    const tabs = [
      { title: "First Tab" },
      { title: "Second Tab" },
      { title: "Third Tab" },
    ];
    const style = {
      alignItems: "center",
      justifyContent: "center",
      height: 150,
      backgroundColor: "#fff",
    };
    return (
      <View>
        <Login />
        <Tabs tabs={tabs} initialPage={1} tabBarPosition="top">
          <View style={style}>
            <Text>
Content of First Tab
            </Text>
          </View>
          <View style={style}>
            <Text>
Content of Second Tab
            </Text>
          </View>
          <View style={style}>
            <Text>
Content of Third Tab
            </Text>
          </View>
        </Tabs>
      </View>
    );
  }
}

export default App;
