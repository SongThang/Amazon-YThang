import React, { Component } from 'react'
import { Image, StyleSheet, View,Text } from 'react-native'
import Swiper from "react-native-swiper";

export default (SwiperCom = () => (
        
  <Swiper style={styles.wrapper}
  autoplay={true}
  dot={<View style={{backgroundColor:'rgba(0,0,0,.2)', width: 20, height: 2, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 1,}} />}
  activeDot={<View style={{backgroundColor: '#007aff', width: 20, height: 2,  marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 1,}} />}
  >
  <View style={styles.slide1}>
    <Text style={styles.text}>Computer Science</Text>
  </View>
  <View style={styles.slide1}>
    <Text style={styles.text}>If the best</Text>
  </View>
  <View style={styles.slide1}>
    <Text style={styles.text}>For You</Text>
  </View>
</Swiper>
        
    )
);
const styles = StyleSheet.create({
  wrapper:{
        marginHorizontal:12 ,
        borderRadius:22,
    },
  slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9DD6EB",
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold"
  },
  img:{
    height:200,
    width: 380,
    borderRadius: 12,
    overflow: 'hidden',
  }
});
