import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { ImagePath } from '../assets'
const Favourites = () => {
  return (
    <View style={{flex:1}}>
        <View style ={styles.vi_contner}>
        <View style={styles.img_contner}>
        <View> 
            <Image source={ImagePath.LeftArrow} style={styles.letf_arrow}/>
        </View>
       <View>
        <Text style={styles.text_favrt}>Favourites</Text>
       </View>
       
       
       </View>
       <View style ={styles.line_vi}>

</View>

<View style ={styles.cerlcal}>
 <Image source={ImagePath.heart} style={styles.heart_img}/>
</View>



</View>
 <View>
    <Text style={styles.text_where}>WHERE IS THE LOVE ?</Text>
    <Text style={styles.text_child_once}>Once you Favourite a restaurent,it will appear here. </Text>
 </View>
    </View>
  )
}

export default Favourites

const styles = StyleSheet.create({
    letf_arrow:{
        width:30,
        height:20,
        tintColor:"white",
        marginTop:22,
        marginLeft:20,
    },
   text_favrt:{
 fontSize:20,
   fontWeight:"bold",
   marginLeft:25,
   marginTop:20,
   color:'white'
   },
   img_contner:{
     flexDirection:'row',
    
     
   },
   vi_contner:{
    borderColor:'red',
    borderWidth:2,
    height:420,
    width:"98%",
    borderRadius:10,
    marginLeft:5,
    backgroundColor:'#FE5F04EB'
   },
   line_vi:{
    borderBottomWidth:2,
    marginTop:30,
      width:"95%",
     borderColor:'white',
     marginLeft:10  
   },
   cerlcal:{
//  borderWidth:2,
//  borderColor:"red",
 borderRadius:110,
 height:200,
 width:250,
 alignSelf:'center',
 marginTop:80,
 backgroundColor:'white'
 
//   alignItems:'center',
//   justifyContent:'center',
   },
   heart_img:{
    width:200,
    height:180,
    marginLeft:20,
    marginTop:15
   },
   text_where:{
    textAlign:'center',
    fontSize:30,
    fontWeight:'bold',
    color:'black',
    marginTop:30,
   },
   text_child_once:{
    textAlign:'center',
    fontSize:15,
    color:'black',
    marginTop:10,
   }

})