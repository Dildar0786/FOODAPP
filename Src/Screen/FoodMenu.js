import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { ImagePath } from '../assets'

const FoodMenu = () => {
  return (
    <View>
        <View style={{justifyContent:'center',alignItems:"center",marginTop:10}}>
      
      <View>
        <Text style={{fontSize:30}}>FOOD MENU</Text>
        </View>
        <View style={styles.line_vi}>

</View>
      <View>
        <Text style={{fontSize:20}}>
            Choose your best food have a great day</Text>
      </View>
      <View style={{flexDirection:"row",marginTop:10}}>
        <View style={styles.box_1}>
            <Image source={ImagePath.Burgar} style={{width:"100%",height:60}}/>
        <Text style={{fontSize:20,marginLeft:10}}>Burgar</Text>
        </View>
        <View style={styles.box_1}>
        <Image source={ImagePath.Pizza} style={{width:"100%",height:60}}/>
        <Text style={{fontSize:20,marginLeft:10,}}>Pizza</Text>
        </View>
        <View style={styles.box_1}>
        <Image source={ImagePath.snacks} style={{width:"100%",height:60}}/>
           <Text style={{fontSize:20,marginLeft:10}}>Snacks</Text> 
        </View>
      </View>
      
      </View>
      <Text style={{fontSize:30,color:'black',fontWeight:"bold",marginTop:10}}>More</Text>
<View style={{flexDirection:'row',justifyContent:'space-around',marginTop:5}}>
      <View style={{borderWidth:2,borderColor:"black",height:200,width:"40%"}}>
      <View style={{backgroundColor:"#FF0059",height:20,width:50,alignSelf:"center"}}>
        <Text style={{fontSize:15,fontWeight:"bold",textAlign:"center",color:"white"}}>
            New
        </Text>
      </View>
      <View style={{height:110,width:"100%",backgroundColor:'grey'}}>
  <Image source={ImagePath.choleBatoreImg} style={{height:110,width:"100%"}}/>
</View>
<Text style={{fontSize:20,color:'black',fontWeight:"bold"}}>Chole Bhature</Text>
<View style={{flexDirection:"row",justifyContent:'space-between'}}>
<View>
    <Text style={{fontSize:20,color:'black',fontWeight:"bold"}}>$ 9.62</Text>
</View>
<View style={{backgroundColor:"red",height:40,width:45,borderRadius:20}}>
    <Text style={{color:"white",fontSize:20,textAlign:"center"}}>ADD</Text>
</View>
</View>
      </View>
      <View style={{borderWidth:2,borderColor:"black",height:200,width:"40%"}}>
      <View style={{borderWidth:2,backgroundColor:"#FF0059",height:20,width:50,alignSelf:"center"}}>
        <Text style={{fontSize:15,fontWeight:"bold",textAlign:"center",color:"white"}}>
            New
        </Text>
      </View>
      <View style={{borderWidth:2,borderColor:"black",height:110,width:"100%",backgroundColor:'grey'}}>
  <Image source={ImagePath.choleBatoreImg} style={{height:110,width:"100%"}}/>
</View>
<Text style={{fontSize:20,color:'black',fontWeight:"bold"}}>Chole Bhature</Text>
<View style={{flexDirection:"row",justifyContent:'space-between'}}>
<View>
    <Text style={{fontSize:20,color:'black',fontWeight:"bold"}}>$ 9.62</Text>
</View>
<View style={{backgroundColor:"red",height:40,width:45,borderRadius:20}}>
    <Text style={{color:"white",fontSize:20,textAlign:"center"}}>ADD</Text>
</View>
</View>
      </View>
      </View>
      <View style={{flexDirection:"row",justifyContent:'space-around'}}>
      <View style={styles.Img_punnjabi}>
   <Image source={ImagePath.panjabiImg} style={styles.Imgpng}/>
      </View>
      <View style={styles.Img_punnjabi} >
<Image source={ImagePath.paniar} style={styles.Imgpng}/>
      </View>
      </View>
      <View style={styles.Img_punnjabi_1}>
<Image source={ImagePath.upToImg} style={{ width:"100%",height:110}}/>
      </View>
    </View>
  )
}

export default FoodMenu

const styles = StyleSheet.create({
    line_vi:{
        borderBottomWidth:2,
        marginTop:30,
          width:"90%",
         borderColor:'red',
         marginLeft:10 ,
         alignSelf:"center" 
       },
       box_1:{
        // borderWidth:2,
        marginLeft:5,
        marginTop:15,
        height:100,
        width:"30%",
        justifyContent:'space-between',
        // borderColor:'black',
        backgroundColor:'#FF0059'
    },
    Img_punnjabi:{
    // borderWidth:2,
        marginTop:20,
          width:"40%",
          height:110,
        //  borderColor:'red',
         marginLeft:10 ,
         
    },
    Img_punnjabi_1:{
        // borderWidth:2,
            marginTop:10,
              width:"60%",
              height:110,
            //  borderColor:'red',s
             marginLeft:10 ,
             alignSelf:"center"
             
        },
        Imgpng:{
            height:110,
            width:"100%"
        }
})