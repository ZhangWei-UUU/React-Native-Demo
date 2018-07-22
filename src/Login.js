import React, {Component} from "react";
import {View,Text} from "react-native";
import { Button,InputItem } from "antd-mobile-rn";
class Login extends Component{
  constructor(props){
    super(props);
    this.state={
      loading:false
    };
  }

  render(){
    return(
      <View>
        <Text>登录页面</Text>
        <InputItem/>
        <Button type="primary">登录</Button>
      </View>
    );
  }
}

export default Login;