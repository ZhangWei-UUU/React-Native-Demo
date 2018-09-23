import React, { Component } from "react";
import { View,Text,StyleSheet } from "react-native";

const LIST = [
    {key:0, name:"工作进度",url:"progress"},
    {key:1, name:"报销管理",url:"progress"},
    {key:2, name:"会议安排",url:"progress"},
    {key:3, name:"理财收益",url:"progress"},
    {key:4, name:"保险计划",url:"progress"},
    {key:5, name:"健康计划",url:"progress"},
    {key:6, name:"出行计划",url:"progress"},
    {key:7, name:"学习安排",url:"progress"},
]
export default () =>{
    return(
        <View style={styles.main}>
         <Text>zhangwei</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    main:{
        width:"80%",
        height:300,
        backgroundColor:"#fff"
    }
});
