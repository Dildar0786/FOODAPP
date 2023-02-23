import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { ImagePath } from '../assets'
const MyAccountSecond = () => {
  return (
    <View style={{flex:1,backgroundColor:"white"}}>
      <View style={{flexDirection:"row"}}>
<View>
  <Image source={ImagePath.LeftArrow} style={{height:20,width:30,tintColor:"black",marginLeft:20,marginTop:50}}/>
</View>

<View>
<Text style={{fontSize:20,fontWeight:'bold',color:"black",marginTop:45,marginLeft:20}}>HELP & SUPPORT</Text>
</View>
      
</View>    
<View style={styles.line_vi}>

</View>
<View>
<Text style={{fontSize:18,fontWeight:'bold',color:"black",marginTop:30,marginLeft:20}}>
  I want to partner my restaurent with swigy
</Text>
</View>
<View style={styles.line_vi}>

</View>
<View>
<Text style={{fontSize:17,fontWeight:'bold',color:"black",marginTop:30,marginLeft:20}}>
  What are the mandatary documents needed to
</Text>
<Text style={{fontSize:17,fontWeight:'bold',color:"black",marginLeft:20}}>
  Set my restaurent on swigy ?
</Text>
</View>
<View style={styles.line_vi}>

</View>
<View>
<Text style={{fontSize:17,fontWeight:'bold',color:"black",marginTop:30,marginLeft:20}}>
  What  are mandatary documents needed to
</Text>
<Text style={{fontSize:17,fontWeight:'bold',color:"black",marginLeft:20}}>
  Set my restaurent on swigy ?
</Text>
</View>
<View style={styles.line_vi}>

</View>
<View>
<Text style={{fontSize:17,fontWeight:'bold',color:"black",marginTop:30,marginLeft:20}}>
  What are the mandatary documents needed to
</Text>
<Text style={{fontSize:17,fontWeight:'bold',color:"black",marginLeft:20}}>
  list my restaurent on swigy ?
</Text>
</View>
<View style={styles.line_vi}>

</View>
    </View>
  )
}

export default MyAccountSecond

const styles = StyleSheet.create({

  line_vi:{
    borderBottomWidth:2,
    marginTop:30,
      width:"95%",
     borderColor:'black',
     marginLeft:10  
   },
})