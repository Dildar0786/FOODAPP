import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import { ImagePath } from '../assets/index';


const Home = ({navigation}) => {
  return (
    <View style={{width:"100%",height:350,borderRadius:20}}>
    <Image source={ImagePath.dalevryboy} style={{backgroundColor:'#F4C21087',width:'100%',height:350}}/>
    <Text style={{fontSize:25,fontWeight:'bold',color:'black',textAlign:'center',marginVertical:10}}>order from a wide range </Text>

    <Text style={{fontSize:25,fontWeight:'bold',color:'black',textAlign:'center'}}>of restaurant </Text>
    <View style={{flexDirection:"row" ,alignSelf:'center'}}>
    <Text style={{fontSize:40,fontWeight:'bold',color:'red',textAlign:'center'}}>.</Text>
    <Text style={{fontSize:40}}>..</Text>
    </View>
    <Text style={{fontSize:15,fontWeight:'bold',textAlign:'center',marginVertical:20}}>Ready from a wide range of restaurant </Text>
    <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
      <Text style={{fontSize:25,fontWeight:'bold',textAlign:'center',backgroundColor:'#FF0059',width:'80%',alignSelf:'center',padding:20,borderRadius:20,marginVertical:10}}>GET STARTED</Text>

    </TouchableOpacity>
    {/* <View style={{borderWidth:2,width:"100%",height:70,borderColor:'red',flexDirection:'row'}}>
      <View style={{borderWidth:2,width:"25%",height:60,borderColor:'red'}}>
      <Image  source={ImagePath.home}/>
      </View>
      <View style={{borderWidth:2,width:"25%",height:60,borderColor:'red'}}>
      <Image  source={ImagePath.home}/>
      </View>
      <View style={{borderWidth:2,width:"25%",height:60,borderColor:'red'}}>
      <Image  source={ImagePath}/>
      </View>
      <View style={{borderWidth:2,width:"25%",height:60,borderColor:'red'}}>

      </View>
    </View> */}

  </View>
  )
}

export default Home

const styles = StyleSheet.create({})