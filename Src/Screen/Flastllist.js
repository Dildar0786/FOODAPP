import { StyleSheet, Text, View,Image,ScrollView } from 'react-native'
import React from 'react'
import{ImagePath, Imagepath} from '../assets'
const Flastllist = () => {
 
  
  return (
    <View>
        <ScrollView>
        <View style={styles.line_vi}>
<Image source={ImagePath.upToImg} style={styles.uptoimg}/>
</View>
        <View style={styles.img_pinner}>
<View style={styles.img}>
<Image source={ImagePath.paniar}/>
<Text style={{fontSize:20,fontWeight:"bold",textAlign:'center',marginTop:-8}}>Panner</Text>
</View>
<View style={styles.tex}>
<Text>Panner Butter Masala</Text>
<Text>3.9 (500 +) 46 mins</Text>
<Text style={{color:'red',fontSize:15}}>EXTRA 20% OFF</Text>
<Text style={{color:'red',fontSize:15}}>ADD FREE DELIEVERY</Text>
<Text style={{color:'red',fontSize:15}}>ONE</Text>
<Text style={{color:'red'}}>Benefet</Text>
<Text style={{color:'red'}}> $ 9.62</Text>
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
<Image source={ImagePath.ItaliDosa}/>
<Text style={{fontSize:20,fontWeight:"bold",textAlign:'center',marginTop:-8}}>Itali Sambar</Text>
</View>
<View style={styles.tex}>
<Text>Itali Sambar</Text>
<Text>3.9 (500 +) 46 mins</Text>
<Text style={{color:'red',fontSize:15}}>EXTRA 20% OFF</Text>
<Text style={{color:'red',fontSize:15}}>ADD FREE DELIEVERY</Text>
<Text style={{color:'red',fontSize:15}}>ONE</Text>
<Text style={{color:'red'}}>Benefet</Text>
<Text style={{color:'red'}}> $ 9.62</Text>
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
<Image source={ImagePath.WhitePista}/>
<Text style={{fontSize:20,fontWeight:"bold",textAlign:'center',marginTop:-8}}>Vag Thali</Text>
</View>
<View style={styles.tex}>
<Text>Vag Thali</Text>
<Text>3.9 (500 +) 46 mins</Text>
<Text style={{color:'red',fontSize:15}}>EXTRA 20% OFF</Text>
<Text style={{color:'red',fontSize:15}}>ADD FREE DELIEVERY</Text>
<Text style={{color:'red',fontSize:15}}>ONE</Text>
<Text style={{color:'red'}}>Benefet</Text>
<Text style={{color:'red'}}> $ 9.62</Text>
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
        </ScrollView>
    </View>
  )
}

export default Flastllist

const styles = StyleSheet.create({
  line_vi:{
    // borderWidth:2,
    // borderColor:"red",
    height:220,
    width:"100%"
  },
  uptoimg:{
    width:"100%",
    height:220,
  },
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
    backgroundColor:"red"
  },
  pus_mins:{
    fontSize:30,
    color:"white",
    fontWeight:"bold",
    textAlign:'center',
  }
})