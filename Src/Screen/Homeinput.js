import { StyleSheet, Text, View,Image, TextInput,button, TouchableOpacity } from 'react-native'
import React from 'react';
import { ImagePath } from '../assets';
// import { ImagePath } from '../assets/Images';

const Homeinput =({navigation}) => {
  return (
    <View style={styles.Homecontner}>
      <View style={styles.imggcontner}>
      <Image source={ImagePath.Manicon} style={{marginTop:-50}}/>
      </View>
      <View style={styles.indexcontner}>
        <View style={{flexDirection:"row"}}>
       <View><TextInput placeholder='Full Name' style={styles.textinp} placeholderTextColor="black"/></View> 
        <View><Text style={styles.text_edt}>EDIT</Text></View>
        </View>
        <View style={{width:'100%'}}>
       <View>
        <TextInput placeholder='My Account' style={styles.textinp_myacc} placeholderTextColor="black"/>
       <Text style={styles.text_fav_off_sting}>Favourites,Offers & Settings</Text>
       </View> 
       <View>
        <Image source={ImagePath.rightRorrow} style={{height:30,width:30 ,tintColor:'black',alignSelf:'flex-end',marginVertical:-50,right:20}}/>
       </View>
        </View> 
        <View style={{width:'100%'}}>
       <View><TextInput placeholder='Addresses' style={styles.textinp_myacc} placeholderTextColor="black"/>
       <Text style={styles.text_fav_off_sting}>Share,Edit & add New Addresses</Text>
       </View> 
        <View>
        <Image source={ImagePath.rightRorrow} style={{height:30,width:30 ,tintColor:'black',alignSelf:'flex-end',marginVertical:-50,right:20}}/>
       </View> 
        </View> 
        <View style={{width:'100%'}}>
       <View >
        <TextInput placeholder='Payments & Refunds' style={styles.textinp_myacc} placeholderTextColor="black"/>
       <Text style={styles.text_fav_off_sting}>Refund Status & Payment Modes</Text>
       </View> 
        <View>
        <Image source={ImagePath.rightRorrow} style={{height:30,width:30 ,tintColor:'black',alignSelf:'flex-end',marginVertical:-50,right:20}}/>
       </View> 
        </View> 
        <View style={{width:'100%'}}>
       <View><TextInput placeholder='Help' style={styles.textinp_help} placeholderTextColor="black"/>
       <Text style={styles.text_fav_off_sting}>FAQ & Link</Text>
       </View> 
        <View>
        <Image source={ImagePath.rightRorrow} style={{height:30,width:30 ,tintColor:'black',alignSelf:'flex-end',marginVertical:-50,right:20}}/>
       </View> 
        </View> 
        <View>
          <TouchableOpacity style={styles.logout_prant} onPress={()=>navigation.navigate('MyAccount')}>
            <Text style={styles.txt_logout}>
              LOGOUT
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Homeinput

const styles = StyleSheet.create({
    Homecontner:{
//  flex:1,
    },
    imggcontner:{
        borderWidth:2,
        borderColor:"red",
        width: "100%",
         height: 230,
         justifyContent:'center',
         alignItems:'center',
       
         backgroundColor: '#FF0059',
        //  backgroundColor: '#FE5F04EB',
    },
    indexcontner:{
        // borderWidth:2,
        // borderColor:"blue",
        width: "95%",
         height: 500,
         backgroundColor: '#FFF2F2',
         marginLeft:10,
        //  position:"absolute",
        marginTop:-60,

    },
    textinp:{
      backgroundColor:'#FFFFFF',
      color:'#FFFFFF',
      width:340,
      borderRadius:10,
      marginLeft:20,
      marginTop:20

    },
    textinp_myacc:{
      backgroundColor:'#FFFFFF',
      color:'#FFFFFF',
      width:'90%',
      borderRadius:10,
      marginLeft:20,
      marginTop:20,
      // height:100,
      padding:25
    },
    textinp_help:{
      backgroundColor:'#FFFFFF',
      color:'#FFFFFF',
      width:'90%',
      borderRadius:10,
      marginLeft:20,
      marginTop:20,
      // height:100,
      padding:20
    },
    text_edt:{
      marginLeft:-55 ,
     marginTop:30,
 fontWeight:'bold',
      color:'red',
    },
    text_fav_off_sting:{
      // fontWeight:'bold',
      color:'black',
      marginLeft:25 ,
     marginTop:-24,
    },
    logout_prant:{
      marginVertical:10,
      backgroundColor:'#FFFFFF',
      padding:15,
      width:"97%",
      marginLeft:8,
    },
 txt_logout:{
  fontSize:20,
  color:'black',
 },
})