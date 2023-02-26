import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import { ImagePath } from '../assets/index';
import Swiper from 'react-native-swiper';


const Home = ({navigation}) => {
  return (
    <View style={styles.View_contner}>
      
      <Swiper style={{width:'100%',height:400}} autoplay={true} autoplayTimeout={0.9}>
    <Image source={ImagePath.dalevryboy} style={styles.img_delvry}/>
    </Swiper>
    
    <Text style={styles.Txt_oder}>order from a wide range </Text>

    <Text style={styles.txt_re}>of restaurant </Text>
    <View style={{flexDirection:"row" ,alignSelf:'center'}}>
    {/* <Text style={styles.Dot}>.</Text> */}
    {/* <Text style={{fontSize:40}}>..</Text> */}
    
    </View>
    <Text style={styles.txt_redy}>Ready from a wide range of restaurant </Text>
    <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
      <Text style={styles.get_btn}>GET STARTED</Text>

    </TouchableOpacity>
 

  </View>
  )
}

export default Home

const styles = StyleSheet.create({
  View_contner:{
    width:"100%",
    height:350,
    borderRadius:20
  },
  img_delvry:{
    backgroundColor:'#F4C21087',
    width:'100%',
    height:350
  },
  Txt_oder:{
    fontSize:25,
    fontWeight:'bold',
    color:'black',
    textAlign:'center',
    marginVertical:10
  },
  txt_re:{
    fontSize:25,
    fontWeight:'bold',
    color:'black',
    textAlign:'center'
  },

Dot:{
  fontSize:40,
  fontWeight:'bold',
  color:'red',
  textAlign:'center'
},
txt_redy:{
  fontSize:15,
  fontWeight:'bold',
  textAlign:'center',
  marginVertical:20

},
get_btn:{
  fontSize:25,
  fontWeight:'bold',
  textAlign:'center',
  backgroundColor:'#FF0059',
  width:'80%',
  alignSelf:'center',
  padding:20,
  borderRadius:20,
  marginVertical:10
}
})