import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { ImagePath } from '../assets'
const LoctionScreen = () => {
  return (
    <View>
      <View style={styles.contner_2_vi}>
       <View style={styles.gift_boder_vi}>
  <Image source={ImagePath.giftRoted} style={styles.gift_img}/>
  </View>
  <View>
    <Text style={styles.text_hding_now}>
        NOW,SHARE ADDRESSES WHITH A TAPI
    </Text>
  </View>
  <View style={styles.loct_contner}>
      <View>
  <Image source={ImagePath.LoctionIcon}/>
        </View> 
      <View>
<Text style={styles.text_send_contct}>
    Send contect Address to anyone using
</Text>
<Text style={styles.text_send_contct}>
    Smart links
</Text>
      </View>
      </View>
      <View style={styles.loct_contner}>
      <View>
  <Image source={ImagePath.LoctionIcon}/>
        </View> 
      <View>
<Text style={styles.text_send_contct}>
    Saving someone's address? add recevier's
</Text>
<Text style={styles.text_send_contct}>
    phone number and forget delvery adderss
</Text>
      </View>
      </View>

      </View>
      <View>
        <Text style={{fontWeight:"bold",color:"grey",fontSize:25,marginTop:10,marginLeft:10}}>
            SAVED ADDRESSES
        </Text>
      </View>
      <View style={styles.home_box}>
      <View style={styles.home_icon_contner}>
      <View>
  <Image source={ImagePath.Homeicon} style={{marginLeft:10,}}/>
        </View> 
      <View>
<Text style={styles.text_home_bold}>
    Home
</Text>

      </View>

      </View>
      <View style={{marginLeft:20,marginTop:10}}>
        <Text style={styles.tex_km}>
   Km 5 refinery road appsite public
        </Text>
        <Text style={styles.tex_km}>
      road,effurun jaipur state
        </Text>
        <Text style={styles.tex_phone} >
   phone number + 8058637495
        </Text>
      </View>
      <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:15}}>
        <View>
        <Text style={styles.text_comon}>
    EDIT
        </Text>
        </View>
        <View>
        <Text style={styles.text_comon}>
    DELETE
        </Text>
        </View>
        <View>
        <Text style={styles.text_comon}>
    SHARE
        </Text>
        </View>
        
      </View>
      <View style={styles.line_vi}>

</View>
<View style={styles.txt_box_ADD}>
<Text style={{marginLeft:20,fontSize:25,color:"black",fontWeight:"bold",marginTop:20}}>ADD NEW ADDRESSES</Text>
</View>

      </View>
     
    </View>
  )
}

export default LoctionScreen

const styles = StyleSheet.create({
    contner_2_vi:{
        backgroundColor:'#F4D5BD2B',
        // borderWidth:2,
        width:"95%",
        height:250,marginLeft:10,
        marginTop:70
    },
    gift_boder_vi:{
        // borderColor:'red',
        // borderWidth:2,
        width:100,height:100,alignSelf:'center',
        marginTop:-50,
        backgroundColor:'#FF0059'
    },
    gift_img:{
        height:100,width:100,
        tintColor:'white'
    },
    text_hding_now:{
        textAlign:"center",
        marginTop:20,fontSize:18,
        fontWeight:"bold",
        color:'black'
    },
    loct_contner:{
        flexDirection:'row',
       justifyContent:'space-around',
       marginTop:15 
    },
    text_send_contct:{
        fontWeight:'bold',
        fontSize:15,
        color:'black'
    },
    home_box:{
        height:320,
        width:"95%",
        marginLeft:10,
        backgroundColor:'#F4D5BD2B',
        // borderWidth:2,
        marginTop:20
    },
    home_icon_contner:{
        flexDirection:'row',
        marginTop:10
    },
    text_home_bold:{
        fontWeight:'bold',
        fontSize:20,
        color:'black',
        marginLeft:30
    },
    tex_km:{
        fontWeight:'bold',
        fontSize:20,
        color:'black',  
    },
    tex_phone:{
        fontWeight:'bold',
        fontSize:20,
        color:'black',
        marginTop:20
    },
    text_comon:{
        fontWeight:'bold',
        fontSize:20,
        color:'red',
        // marginTop:20
    },
    line_vi: {
        borderBottomWidth: 2,
        marginTop: 10,
        width: "95%",
        borderColor: 'black',
        marginLeft: 10,
    },
    txt_box_ADD:{
    height:80,
    width:300,
    borderRadius:30,
    borderColor: 'red',
    alignSelf:'center',
    marginTop:20,
borderWidth:2
    }
})