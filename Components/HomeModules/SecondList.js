import React, { Component } from "react";
import { View,Text,StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
const LIST = [
    {key:0, name:"工作进度",url:"progress",icon:"calendar",color:"#f2aa71"},
    {key:1, name:"报销管理",url:"progress",icon:"barcode",color:"#ecd162"},
    {key:2, name:"会议安排",url:"progress",icon:"comments",color:"#b3e380"},
    {key:3, name:"理财收益",url:"progress",icon:"bitcoin",color:"#7dc4fa"},
    {key:4, name:"保险计划",url:"progress",icon:"bed",color:"#80d4ef"},
    {key:5, name:"健康计划",url:"progress",icon:"heartbeat",color:"#9780ef"},
    {key:6, name:"出行计划",url:"progress",icon:"car",color:"#e380ef"},
    {key:7, name:"学习安排",url:"progress",icon:"book",color:"#ef80ac"},
]
export default () =>{
    return(
        <View style={styles.main}>
            <View style={styles.title}>
              <Text style={styles.titleP}>待办事项</Text>
            </View>
        {LIST.map(item=>{
            return(
                <View key={item.key} style={styles.item}>
                   <Icon size={ 40 } name={item.icon} color={item.color}/>
                    <Text style={styles.p}>{item.name}</Text>
                </View>
            )
        })}  
        </View>
    )
}

const styles = StyleSheet.create({
    main:{
        marginTop:10,
        minHeight:300,
        paddingTop:10,
        paddingLeft:10,
        backgroundColor:"#fff",
        flex:1,
        flexDirection:"column",
        justifyContent:"center",
        flexWrap: 'wrap',
        alignItems: 'center'
    },
    title:{
        flexDirection:"column",
        height:20,
        width:"100%"
    },
    titleP:{
        fontSize:20
    },
    item:{
        height:90,
        justifyContent:"center",
        alignItems: 'center',
        paddingTop:20,
    },
    p:{
        marginTop:10
    } 
});
