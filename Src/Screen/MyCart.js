import { StyleSheet, Text, View,Image,ScrollView } from 'react-native'
import React from 'react'
import { ImagePath } from '../assets'

const MyCart = () => {
  return (
    <View>
    <ScrollView>
      <Text style={{fontSize:20,fontWeight:"bold",marginTop:20,marginLeft:10}}>MyCart</Text>
      <View style={styles.img_pinner}>
<View style={styles.img}>
<Image source={ImagePath.WhitePista}/>
{/* <Text style={{fontSize:20,fontWeight:"bold",textAlign:'center',marginTop:-8}}>Itali Sambar</Text> */}
</View>
<View style={styles.tex}>
<Text style={{color:'black',fontSize:30}}>$ 65</Text>
<Text style={{color:'black'}}>White pasta</Text>
<Text style={{color:'black'}}>whin cheese source</Text>
<View style={{flexDirection:'row'}}>
  <View>
<Text style={{color:'red',fontSize:30}}> ****</Text>
</View>
<View style={styles.addbtn}>
<Text style={styles.pus_mins}>1 + -</Text>
</View>
</View>
</View>
        </View>
        <View style={styles.img_pinner}>
<View style={styles.img}>
<Image source={ImagePath.Momos}/>
{/* <Text style={{fontSize:20,fontWeight:"bold",textAlign:'center',marginTop:-8}}>Itali Sambar</Text> */}
</View>
<View style={styles.tex}>
<Text style={{color:'black',fontSize:30}}>$ 65</Text>
<Text style={{color:'black'}}>White pasta</Text>
<Text style={{color:'black'}}>whin cheese source</Text>
<View style={{flexDirection:'row'}}>
  <View>
<Text style={{color:'red',fontSize:30}}> ****</Text>
</View>
<View style={styles.addbtn}>
<Text style={styles.pus_mins}>1 + -</Text>
</View>
</View>
</View>
        </View>
        <View style={styles.img_pinner}>
<View style={styles.img}>
<Image source={ImagePath.Nodels}/>
{/* <Text style={{fontSize:20,fontWeight:"bold",textAlign:'center',marginTop:-8}}>Itali Sambar</Text> */}
</View>
<View style={styles.tex}>
<Text style={{color:'black',fontSize:30}}>$ 65</Text>
<Text style={{color:'black'}}>White pasta</Text>
<Text style={{color:'black'}}>whin cheese source</Text>
<View style={{flexDirection:'row'}}>
  <View>
<Text style={{color:'red',fontSize:30}}> ****</Text>
</View>
<View style={styles.addbtn}>
<Text style={styles.pus_mins}>1 + -</Text>
</View>
</View>
</View>
        </View>
        <View style={styles.btn_conf}>
<Text style={{fontSize:20,fontWeight:"bold",textAlign:'center',color:'white',marginTop:20}}>CONFIRM ORDER</Text>
        </View>
        </ScrollView>
    </View>
  )
}

export default MyCart

const styles = StyleSheet.create({
    img_pinner:{
        // borderWidth:2,
        marginTop:8,
        // borderColor:"blue",
        height:200,
        width:"100%",
        flexDirection:"row",
        justifyContent:'space-around'
      },
      img:{
        // marginTop:-10,
        // borderWidth:2,
        marginTop:8,
        // borderColor:"blue",
        height:190,
        width:"45%",
        backgroundColor:'#F9E0E0'
      },
      tex:{
        // marginTop:-20,
        // borderWidth:2,
        marginTop:8,
        // borderColor:"blue",
        height:190,
        width:"45%"
      },
      addbtn:{
        marginLeft:10,
        // marginTop:-20,
        borderRadius:20,
        // borderWidth:2,
        marginTop:8,
        // borderColor:"blue",
        height:40,
        width:100,
        backgroundColor:"red",
        marginTop:30
        
      },
      pus_mins:{
        fontSize:30,
        color:"white",
        fontWeight:"bold",
        textAlign:'center',
        
      },
      btn_conf:{
        height:70,
        width:200,
        backgroundColor:"red",
        borderRadius:20,
        alignSelf:"center"
      }

})