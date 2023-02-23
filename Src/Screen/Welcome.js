import { StyleSheet, Text, TextInput, TouchableOpacity, View,FlatList, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { ImagePath } from '../assets/index'

const Welcome = ({navigation}) => {
   
    // const[name,setname]=useState('')
    // const[email,setemail]=useState('')
    // const[password,setpassword]=useState('')
    const data=[ 
        {
        name:"dildar",
        email:"dk131999mmail.com",
        password:10000,
        img1:ImagePath.dalevryboy,
        price:555999,
        mgheart:ImagePath.BankIcon
    },
    {
        name:"Islam",
        email:"ik131999mmail.com",
        password:123456,
        img1:require('../assets/Images/delveryboy.png'),
        price:87777,
        mgheart:ImagePath.BankIcon    
   
    },
    {
        name:"dildar",
        email:"ik131999mmail.com",
        password:10000,
        img2:ImagePath.dalevryboy,

        price:555999,
        mgheart:ImagePath.BankIcon
    },
    {
        name:"dildar",
        email:"ik131999mmail.com",
        password:10000,
        img2:require('../assets/Images/girlsitting.png'),
        price:555999,
        mgheart:ImagePath.BankIcon
    },
    {
        name:"dildar",
        email:"ik131999mmail.com",
        password:10000,
        img2:require('../assets/Images/girlsitting.png'),
        price:555999,
    },
    {
        name:"dildar",
        email:"ik131999mmail.com",
        password:10000,
        img3:ImagePath.dalevryboy,
        price:555999,
        
    },
    {
        name:"dildar",
        email:"ik131999mmail.com",
        password:10000,
        img3:require('../assets/Images/scotter.png'),
        price:555999,
    },
    {
        name:"dildar",
        email:"ik131999mmail.com",
        password:10000,
        img2:require('../assets/Images/girlsitting.png'),
        price:555999,
    },
    {
        name:"dildar",
        email:"ik131999mmail.com",
        password:10000,
        img1:require('../assets/Images/delveryboy.png'),
        price:<TouchableOpacity>
            <Text>00786999</Text>
        </TouchableOpacity>,
    },
]

const renderItem=({item})=>{
    
    return(
        <TouchableOpacity onPress={()=>navigation.navigate('WellcomeBack',{data:{item}})}>
        <View style={{borderWidth:2,width:"100%",height:200,flexDirection:"row"}}>
            
            <View style={{borderWidth:2,width:200,height:200,backgroundColor:'orange'}}>
            <Text style={{marginVertical:10,color:"blue"}}>
                {item.name}

            </Text>
            <Text  style={{color:"red"}}>
                {item.email}
            </Text>
            <Text  style={{color:"orange"}}>
                {item.password}s
            </Text>
            </View>
            <View style={{borderWidth:2,width:200,height:200,borderColor:"red"}}>
        <Image source={item.img1}  style={{width:100,height:100}}/>
        <Image source={item.img2}  style={{width:100,height:100}}/>
        <Image source={item.img3}  style={{width:100,height:100}}/>
<Text>{item.price}</Text>
<TouchableOpacity onPress={()=>Bankclik()}>
<Image style={{width:50,height:50}} source={item.mgheart}/>
</TouchableOpacity>
            </View>
        </View>
        </TouchableOpacity>
    )
}
  return (
    <View>
      {/* <TextInput  onChangeText={(e)=>setname(e)} 
      placeholder='enter your name'style={{borderWidth:1,marginVertical:20}} />
      <Text>{name}</Text>
      <TextInput  onChangeText={(e)=>setemail(e)} placeholder='enter your emali'style={{backgroundColor:'red',borderWidth:1,marginVertical:20}} />
      <Text>{email}</Text>
      <TextInput onChangeText={(e)=>setpassword(e)}  placeholder='enter your password'style={{backgroundColor:'red',borderWidth:1}} />
      <Text>{password}</Text> */}
    <FlatList renderItem={renderItem}
    data={data}
    // horizontal
    // showsHorizontalScrollIndicator={false}
    
    />
    {/* //   <TouchableOpacity onPress={()=>navigation.navigate('WellcomeBack')}>
    //     <Text>submit</Text>
    //   </TouchableOpacity> */}
    </View>
  )
}

export default Welcome

const styles = StyleSheet.create({})