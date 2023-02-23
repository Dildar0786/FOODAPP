import { StyleSheet, Text, View,Image,ScrollView } from 'react-native'
import React from 'react'
import { ImagePath } from '../assets'

const DelevryScreen = () => {
  return (
    <View>
      <ScrollView>
       <View style={styles.line_vi}>
<Image source={ImagePath.GrilImg} style={styles.uptoimg}/>
</View>
<Text style={styles.delvertxt}>
    Delivery
</Text>
<View style={{flexDirection:"row",justifyContent:'space-between',marginTop:10}}>
   <View>
    <Text>Address details</Text>
   </View> 
  <View>
    <Text style={{color:'red',marginLeft:-20}}>Change</Text>
  </View>  
</View>
<View style={styles.box_contner}>
<Text style={styles.txth_hena}>Hena Mantena</Text>
<View style={styles.line_vi}>

</View>
<View>
  <Text style={styles.txt_km}>
    Km 5 refinery road opsite
  </Text>
  <Text style={styles.txt_km}>
    Public road, effurun jaipur state
  </Text>
</View>
<View style={styles.line_vi}>

</View>
<Text style={styles.txt_Num}>+918058637495</Text>
</View>
<View style={styles.box_contner_1}>
<View>
  <Text style={styles.txt_Door}>Door delivery</Text>
  <View style={styles.line_vi_1}>

</View>
  <Text style={styles.txt_Door}> Pick up</Text>
</View>
</View>
<Text style={{fontSize:20,marginLeft:15,color:'black',fontWeight:"bold"}}>Delivery methed</Text>
<View style={styles.box_contner_2}>
  <View style={{flexDirection:"row"}}>
<View>
  <Image source={ImagePath.card} style={{width:50,height:40,marginTop:20,marginLeft:10}}/>
</View>
 <View> 
  <Text style={{fontSize:30,marginLeft:60,marginTop:20}}>Card</Text>
 </View>
 </View>
 <View style={{flexDirection:"row"}}>
<View>
  <Image source={ImagePath.BankIcon} style={{width:50,height:40,marginTop:20,marginLeft:10}}/>
</View>
 <View> 
  <Text style={{fontSize:30,marginLeft:60,marginTop:20}}>Bank</Text>
 </View>
 </View>
</View>
</ScrollView>
    </View>
  )
}

export default DelevryScreen

const styles = StyleSheet.create({
    line_vi:{
        // borderWidth:2,
        // borderColor:"red",
        height:230,
        width:"100%",
        marginTop:10
      },
      line_vi_1:{
        borderWidth:1,
        borderColor:"grey",
        // height:230,
        // width:"100%",
        marginTop:20
      },
      uptoimg:{
        width:"100%",
        height:230,
      },
      delvertxt:{
        fontSize:25,
        fontWeight:'bold',
        marginTop:10

      },
      box_contner:{
        height:200,
        marginTop:10,
        width:"95%",
        // backgroundColor:"red",
        backgroundColor:"#C4C4C424",
        marginLeft:10,
        
      },
      txth_hena:{
        fontSize:20,
        marginLeft:10,
        fontWeight:'bold',
        marginTop:20,
        color:"black"
      },
      line_vi:{
        borderWidth:1,
        borderColor:"grey",
        // height:220,
        // width:"100%"
      },
      txt_km:{
        fontSize:20,
        marginLeft:10,
        // fontWeight:'bold',
        marginTop:10,
        color:"black"
      },
      txt_Num:{
        fontSize:20,
        marginTop:20,
        marginLeft:10
      },
      box_contner_1:{
        height:150,
        marginTop:10,
        width:"95%",
        // backgroundColor:"red",
        backgroundColor:"#C4C4C424",
        marginLeft:10,
      },
      box_contner_2:{
        height:100,
        marginTop:10,
        width:"95%",
        backgroundColor:"red",
        // backgroundColor:"#C4C4C424",
        marginLeft:10,
        // flexDirection:"row",

      },
      txt_Door:{
        fontSize:25,
        marginTop:20,
        marginLeft:40,
        color:"black"
      }
})