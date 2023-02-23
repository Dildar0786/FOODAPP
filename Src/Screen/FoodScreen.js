import { StyleSheet, Text, View ,Image, TextInput} from 'react-native'
import React from 'react'
import { ImagePath } from '../assets'
const FoodScreen = () => {
  return (
    <View>
        {/* <Image source={ImagePath.Manicon} style={{height:20,width:24,tintColor:"black",marginTop:10,marginLeft:20}}/> */}
      <Text style={{fontSize:15,fontWeight:'bold',color:"grey",marginLeft:40,marginTop:20}}>DELIVER TO</Text>
      <View style={{flexDirection:'row',marginTop:10,}}>
        <View>
            <Image source={ImagePath.LoctionIcon} style={{height:40,width:25}}/>
        </View>
        <View>
           <Text style={{marginLeft:15,fontSize:20,marginTop:5}}>Home.Mansorovar jaipur</Text> 
        </View>
        <View>
        <Image source={ImagePath.upload} style={{height:20,width:20,marginLeft:60,marginTop:10}}/>
        </View>
        
      </View>
      <View style={{flexDirection:'row', borderWidth:2,borderColor:"black",width:'95%',marginLeft:10}}>
      <View>
      <Image source={ImagePath.search} style={{width:20,height:20,marginTop:10}}/>
       
      </View>
      <View>
      <TextInput placeholder='Search for Food' placeholderTextColor='grey'/>
      </View>
      </View>
      <View style={styles.bgimg}>
    <Image source={ImagePath.upToImg} style={{ height:200,
        width:"100%",borderRadius:20}}/>
      </View>
      
      <View style={{flexDirection:"row",marginTop:20,justifyContent:'space-around'}}>
        <View style={styles.box_1}>
            <Image source={ImagePath.Burgar} style={{width:"100%",height:60}}/>
        <Text style={{fontSize:20,marginLeft:10}}>Burgar</Text>
        </View>
        <View style={styles.box_1}>
        <Image source={ImagePath.Pizza} style={{width:"100%",height:60}}/>
        <Text style={{fontSize:20,marginLeft:10}}>Pizza</Text>
        </View>
        <View style={styles.box_1}>
        <Image source={ImagePath.snacks} style={{width:"100%",height:60}}/>
           <Text style={{fontSize:20,marginLeft:10}}>Snacks</Text> 
        </View>
      </View>
      <View style={styles.bgimg_2}>
      <Image source={ImagePath.BigPizza} style={{width:"100%",height:150}}/>

</View>
<View style={styles.Exfood}>
<Text style={{fontSize:30,fontWeight:'bold',color:"white"}}>EXPORE FOOD</Text>
</View>
    </View>
  )
}

export default FoodScreen

const styles = StyleSheet.create({
    bgimg:{
        borderWidth:2,
        marginLeft:5,
        marginTop:15,
        height:200,
        width:"98%",
        borderRadius:20,
        borderColor:'black'
    },
    bgimg_2:{
        borderWidth:2,
        // marginLeft:5,
        borderRadius:10,
        marginTop:15,
        height:150,
        width:"70%",

        borderColor:'black',
        alignSelf:'center'
    },
    box_1:{
        borderWidth:2,
        marginLeft:5,
        marginTop:15,
        height:100,
        width:"30%",
        borderColor:'black',
        backgroundColor:'#FF0059'
    },
    Exfood:{
        borderWidth:2,
        marginLeft:5,
        marginTop:10,
        height:100,
        borderRadius:20,
        width:"70%",
        justifyContent:'center',
        alignItems:"center",
        alignSelf:'center',
        backgroundColor:'#FF0059'
    }
})