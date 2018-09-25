import React, { Component } from "react";
import { View,StyleSheet } from "react-native";
import Carousel, {ParallaxImage  } from "react-native-snap-carousel";
import { ENTRIES } from "./CarouselData";

export default class MyCarousel extends Component{
    _renderItem ({item}) {
        return (
            <View style={styles.slider}>
                <ParallaxImage
                    style={styles.image}
                    source={{ uri: item.illustration }}/>
            </View>
        );
    }

    render(){
        return(
            <Carousel
                layout={"stack"} layoutCardOffset={18} 
                data={ENTRIES}
                renderItem={this._renderItem}
                sliderWidth={300}
                itemWidth={300}
            />
        );
    }
}

const styles = StyleSheet.create({
    slider:{
        height:200,
        width:"100%"
    },
    image:{
        width:"100%",
        height:200
    }
});
