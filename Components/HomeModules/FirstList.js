import React, { Component } from "react";
import { View,Text,StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
const LIST = [
    {key:0, name:"工作进度",url:"progress",icon:"calendar",color:"#f2aa71"},
    {key:1, name:"报销管理",url:"progress",icon:"barcode",color:"#ecd162"},
    {key:2, name:"会议安排",url:"progress",icon:"comments",color:"#b3e380"},
    {key:3, name:"理财收益",url:"progress",icon:"bitcoin",color:"#7dc4fa"},
    {key:4, name:"保险计划",url:"progress",icon:"bed",color:"#80d4ef"},
    {key:5, name:"健康计划",url:"progress",icon:"heartbeat",color:"#9780ef"},
    {key:6, name:"出行计划",url:"progress",icon:"car",color:"#e380ef"},
    {key:7, name:"学习安排",url:"progress",icon:"book",color:"#ef80ac"},
];
const FirstList = () =>{
    return(
        <View style={styles.main}>
            {LIST.map(item=>{
                return(
                    <View key={item.key} style={styles.item}>
                        <Icon size={ 40 } name={item.icon} color={item.color}/>
                        <Text style={styles.p}>{item.name}</Text>
                    </View>
                );
            })}  
        </View>
    );
};

const styles = StyleSheet.create({
    main:{
        marginTop:10,
        minHeight:100,
        backgroundColor:"#fff",
        flex:1,
        flexDirection:"row",
        justifyContent:"center",
        flexWrap: "wrap",
        alignItems: "center"
    },
    item:{
        width:"25%",
        height:90,
        justifyContent:"center",
        alignItems: "center",
        paddingTop:20
    },
    p:{
        marginTop:10
    } 
});

export default FirstList;