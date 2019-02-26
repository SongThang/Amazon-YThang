import React, { Component } from 'react'
import { Text, StyleSheet, View,Image,TouchableOpacity, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import Swiper from '../../component/swiper'
export default class index extends Component {
  render() {
  
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.row}>
          <TouchableOpacity onPress={() =>this.props.navigation.openDrawer()}>
          <Icon style={styles.Icon} name='ios-menu'/>
          </TouchableOpacity>
          <TouchableOpacity>
          <Image style={styles.Image} source={require('../../img/amazon.png')}/>
          </TouchableOpacity>
          </View>
          <View style={styles.row}>
          <TouchableOpacity>
          <Icon style={styles.Icon} name='ios-mic'/>
          </TouchableOpacity>
          <TouchableOpacity>
          <Icon style={{color: '#fff', fontSize: 32,}} name='ios-cart'/>
          </TouchableOpacity>
          </View>
        </View>
        <View style={styles.search}>
        <TouchableOpacity>
        <View style={styles.row}>
        <Icon style={styles.searchIcon}name='ios-search'/>
        <Text style={styles.Text} >What are you looking for?</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity>
        <View style={styles.row}>
        <Icon style={styles.searchIcon}name='ios-camera'/>
        </View>
        </TouchableOpacity>
        </View>
        <ScrollView>
        <View style={styles.row1}>
          <Icon style={{color:'#fff',fontSize:26}} name='ios-pin'/>
          <Text style={{color:'#fff', paddingLeft: 12,fontSize:16}}>Deliver to Cambodia</Text>
        </View>
        <View style={styles.swiper}>
        <Swiper/>
        </View>
        <View style={styles.singInCard}>
        <Text style={styles.textSignIn}>Sign in for the best experience</Text>
        <TouchableOpacity>
        <View style={styles.signInButton}>
          <Text style={{fontSize: 18}}>
            Sign in
          </Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity>
        <View style={{flexDirection:'row', justifyContent: "space-between"}} >
        <Text style={{fontSize: 16, padding:12,color:'#0e37ff', fontWeight: '200'}}>
            Create an account
          </Text>
          <Icon style={{fontSize: 18, padding:12,color:'#0e37ff', fontWeight: '100'}} name='ios-arrow-forward'/>
        </View>
        </TouchableOpacity>
        </View>
        <View style={styles.card}>
        <View style={styles.productCard}>
        <Text style={{fontSize:22,}}>Deal of the day</Text>
        </View>
        <View style={{alignItems:"center", paddingTop: 20}}>
          <Image style={{width:100,height:100, borderRadius:50}} source={require('../../img/cs.jpg')}/>
        </View>
        <View style={{padding:12}}>
        <Text>Save up to 37% on RAVPower Power Bank </Text>
          <Text>$11.99- $40.99 </Text>
          <Text>Ends in .....</Text>
        </View>
          <View style={{flexDirection:'row', justifyContent: "space-between"}}>
            <Image style={styles.Images} source={require('../../img/Electronics_and_Computer_Science_Society_Logo.png')}/>
            <Image style={styles.Images} source={require('../../img/pc-clipart-computer-scientist-712828-279955.png')}/>
            <Image style={styles.Images} source={require('../../img/computer_science_careers.png')}/>
            <Image style={styles.Images} source={require('../../img/computer_science_careers.png')}/>
          </View>
          <View style={styles.productCard1}>
        <Text style={{fontSize:14,color:'#0e37ff',}}>Shop all deals</Text>
        <Icon style={{fontSize: 18,color:'#0e37ff', fontWeight: '100'}} name='ios-arrow-forward'/>
        </View>
        </View>
        <View style={styles.card}>
        <Text style={styles.title}>Shop women's fashion</Text>
        <Image style={{width:350, height:300,}} source={require('../../img/kk.png')}/>
        </View>
        <View style={styles.card}>

        </View>
        <View style={styles.card}>

        </View>
        </ScrollView>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#0891c5'
  },
  header:{
    marginTop:42,
    paddingHorizontal: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center',
  },
  Icon:{
    color: '#fff',
    fontSize: 32,
    paddingRight: 18,
  },
  searchIcon:{
    color: '#0891c5',
    fontSize: 26,
    fontWeight: '100'
  },
  Image:{
    width: 80,
    height: 30,
  },
  Images:{
    width: 80,
    height: 55,
  },
  row:{
    flexDirection:'row',
    alignItems: 'center',
  },
  row1:{
    flexDirection:'row',
    alignItems: 'center',
    backgroundColor: '#16464e',
    marginTop:12,
    height: 40,
    paddingHorizontal:12
  },
  search:{
    backgroundColor:'#fff',
    height: 40,
    marginHorizontal: 12,
    justifyContent: 'space-between',
    alignItems:'center',    
    flexDirection: 'row',
    paddingHorizontal:12,
    marginBottom: 8
  },
  Text:{
    fontSize:12,
    color:'#333',
    paddingLeft: 12,
  },
  swiper:{
    height:150,
    paddingHorizontal:2,
  },
  singInCard:{
    height:150,
    backgroundColor: '#fff',
    marginTop: 4,
  },
  textSignIn:{
    fontSize:20,
    padding:12,
    fontWeight: '400'
  },
  signInButton:{
    alignItems:"center",
    justifyContent: "center", 
    backgroundColor: 'orange',
    height:50, 
    marginHorizontal:12,
    marginTop: 12
  },
  productCard:{
    borderBottomColor:'#000', 
    borderBottomWidth:0.3,
    marginHorizontal:12,
    padding: 12
  },
  productCard1:{
    borderTopColor: '#000',
    borderTopWidth: 0.5,
    marginHorizontal:12,
    paddingTop: 12,
    marginTop: 22,
    flexDirection:'row', 
    justifyContent: "space-between"
  },
  card:{
    marginTop:3,
    height:370,
    backgroundColor:'#fff',
  },
  title:{
    fontSize:24,
    padding:12
  }
})
