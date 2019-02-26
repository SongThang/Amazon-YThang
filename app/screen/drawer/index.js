import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity
} from "react-native";
import { COLORS, LAYOUT } from "../../module";
import ICon from 'react-native-vector-icons/Ionicons'
export default class DrawerScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={{flex:1,}}>
            <View style={styles.titleBox}>
              <Text style={styles.text}>Hello.</Text>
              <TouchableOpacity>
              <Text style={styles.text}>Sign In</Text>
              </TouchableOpacity>
            </View>
            <View style={{paddingHorizontal:16, borderBottomColor: '#333',
      borderBottomWidth:0.4, paddingBottom:16}}>
            <TouchableOpacity>
            <Text style={styles.text1}>Home </Text>
            </TouchableOpacity>
            <TouchableOpacity>
            <Text style={styles.text1}>Your Orders </Text>
            </TouchableOpacity>
            <TouchableOpacity>
            <Text style={styles.text1}>Your Lists </Text>
            </TouchableOpacity>
            <TouchableOpacity>
            <Text style={styles.text1}>Your Account </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{flexDirection:'row', alignItems: "center", justifyContent: "space-between"}}>
            <Text style={styles.text1}>Shop by Department </Text>
            <ICon style={{fontSize:18, paddingTop:22, paddingRight:12, fontWeight:'100'}} name='ios-arrow-forward'/>
            </TouchableOpacity>
            </View>
            <View style={{paddingHorizontal:16}}>
            <TouchableOpacity style={{flexDirection:'row', alignItems: "center", justifyContent: "space-between"}}>
            <Text style={styles.text1}>Setting</Text>
            <ICon style={{fontSize:18, paddingTop:22, paddingRight:12, fontWeight:'100'}} name='ios-arrow-forward'/>
            </TouchableOpacity>
            <TouchableOpacity style={{flexDirection:'row', alignItems: "center", justifyContent: "space-between"}}>
            <Text style={styles.text1}>Customer Service</Text>
            </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
  titleBox: {
      flexDirection:'row',
      backgroundColor:'#226782',
      paddingHorizontal: 12,
      paddingTop: 44,
      paddingBottom: 18,
  
  },
  text:{
      fontSize:24,
      color: "#fff",  
  },
  text1:{
    fontSize:18,
    color: "#000", 
    paddingTop:22,
    fontWeight: '200'
},
});
