import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { ImagePath } from '../assets'
const MyAccount = () => {
  return (
    <View style={{flex:1,backgroundColor:"white"}}>
        <View style={styles.contenr}>
      <View>
        <Text style={styles.txt_hna}>HEONA MONTENA</Text>
      <Text style={{marginLeft:10}}>+966737579</Text>
      </View>
      <View>
        <Text style={styles.txt_edt}>EDIT</Text>
      </View>

      
      </View>
      <View style ={{borderBottomWidth:2}}>

      </View>

      <View style={styles.contenr}>
      <View>
        <Text style={styles.txt_hna}>My Account</Text>
      <Text style={{marginLeft:10}}>Favourites,Offers & Settings</Text>
      </View>
      <View>
        <Image source={ImagePath.upload} style={styles.upload}/>
      </View>

      
      </View>
      <View style ={{borderStyle:"dashed",width:"100%",borderColor:'black',height:5,borderBottomWidth:2}}>

      </View>
      <View style={styles.heartcontner}>
    <View style={styles.hearticon}>
   <Image source={ImagePath.heartBlank} style={styles.heartBlank_icon}/>
    </View>
    <View>
 <Text style={styles.txt_favurt}> Favourites</Text>
    </View>
    <View style={styles.right_arrow}>
<Image source={ImagePath.rightRorrow} style={{width:20,height:20,marginLeft:240}}/>
    </View>
      </View>
      <View style={styles.heartcontner_1}>
    <View style={styles.hearticon}>
   <Image source={ImagePath.heartBlank} style={styles.heartBlank_icon}/>
    </View>
    <View>
 <Text style={styles.txt_favurt}> Favourites</Text>
    </View>
    <View style={styles.right_arrow}>
<Image source={ImagePath.rightRorrow} style={{width:20,height:20,marginLeft:240}}/>
    </View>
      </View>
      <View style={styles.heartcontner_2}>
    <View style={styles.hearticon}>
   <Image source={ImagePath.settings} style={styles.heartBlank_icon}/>
    </View>
    <View>
 <Text style={styles.txt_favurt}> Favourites</Text>
    </View>
    <View style={styles.right_arrow}>
<Image source={ImagePath.rightRorrow} style={{width:20,height:20,marginLeft:240}}/>
    </View>
      </View>
      
      <View style ={{borderBottomWidth:2,marginVertical:15}}>

      </View>
      <View style={{flexDirection:'row'}}>
      <View>
        <Text style={styles.txtaddres}>
          Addresses
        </Text>
        <Text style={{marginLeft:10}}>
          Share,Edit,New Addresses
        </Text>
      </View>
      <View>
        <Image source={ImagePath.rightRorrow} style={{width:20,height:20,marginLeft:210}}/>
      </View>
      </View>
      <View style={styles.box_gift}>
        <View>
          <Image source={ImagePath.gift} style={{height:50,width:50,backgroundColor:'#F4D5BD63'}}/>
        </View>
    <View>
    <Text style={{fontWeight:'bold',fontSize:15}}>
      Do you know ?
    </Text>
    <Text style={{fontSize:14}}>
     you can now Share addresses with friends and
    </Text>
    <Text style={{fontSize:14}}>
     famliy using a smart Link!
    </Text>
    </View>
   
      </View>

      <View style ={{borderBottomWidth:2}}>

      </View>
      <View style={{flexDirection:'row'}}>
        <View>
      <Text style={{fontSize:20, marginLeft:10,fontWeight:"bold",marginTop:10}}>
     Payments & Refunds
    </Text>
    </View>
    <View>
      <Image source={ImagePath.upload} style={styles.upload_1}/>
    </View>
    </View>
    <Text style={{fontSize:14,marginLeft:10,marginVertical:5}}>
    Refunds Status & Payment Modes
    </Text>
    
    <View style ={{borderStyle:"dashed",width:"100%",borderColor:'black',height:5,borderBottomWidth:2,marginVertical:10}}>

      </View>
      <View style={{flexDirection:'row'}}>
        <View>
      <Text style={{fontSize:20, marginLeft:10,fontWeight:"bold",marginTop:5}}>
     Help
    </Text>
    </View>
    <View>
      <Image source={ImagePath.rightRorrow} style={styles.rightRorrow_1}/>
    </View>
    </View>
    <Text style={{fontSize:14,marginLeft:10,marginVertical:5}}>
     FAQs & Links
    </Text>  
    </View>
  )
}

export default MyAccount

const styles = StyleSheet.create({
contenr:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginVertical:20,
},
txt_hna:{
    fontWeight:"bold",
  color:"black",
  fontSize:15,
  marginLeft:10
},
txt_edt:{
    fontWeight:"bold",
  color:"red"
},
upload:{
  tintColor:'black',
  height:30,
  width:40
},
upload_1:{
  tintColor:'black',
  height:20,
  width:30,
  marginLeft:150,
  marginTop:10,
},
rightRorrow_1:{
  tintColor:'black',
  height:20,
  width:30,
  marginLeft:300,
  marginTop:20,
  
},
heartcontner:{
  marginVertical:10,
//  borderColor:'red',
//  borderWidth:2,
 flexDirection:'row'
 

},
heartcontner_1:{
  marginVertical:8,
//  borderColor:'red',
//  borderWidth:2,
 flexDirection:'row'
 

},
heartcontner_2:{
  marginVertical:8,
//  borderColor:'red',
//  borderWidth:2,
 flexDirection:'row'
 

},

heartBlank_icon:{
  tintColor:'black',
  height:25,width:25,
  // marginTop:
},
hearticon:{
  width:10,
  height:20,
},
txt_favurt:{
  fontSize:20,
  marginLeft:25
},
txtaddres:{
  fontWeight:"bold",
  color:"black",
  fontSize:20,
  marginLeft:10
},
box_gift:{
  // borderColor:"red",
  backgroundColor:'#F4D5BD63',
  // boder:"none",
  borderWidth:2,height:90,
  width:"90%",borderRadius:10,
  marginVertical:22,
  flexDirection:'row',
  marginLeft:10,
}
})