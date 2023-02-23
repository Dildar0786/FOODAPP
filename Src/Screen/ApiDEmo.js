import { StyleSheet, Text, View,FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'

const ApiDEmo = () => {
    const[api,setApi]=useState()
    useEffect(()=>{
        getApi()
    },)
    const getApi= async()=>{
        let response = await fetch("https://api.sampleapis.com/coffee/hot")
         let abc= await response.json()
         console.log(abc)
        setApi(abc)
    }
    // setApi(abc)
    const xyz=({item})=>{
return(
    <View>
<Text>{item.description}</Text>
<Text>{item.title}</Text>
<Text style={{color:'red'}}>{item.ingredients}</Text>

    </View>
)
    }
  return (
    <View>
      <Text>ApiDEmo</Text>
      <FlatList data={api}
      renderItem={xyz}
      />

    </View>
  )
}

export default ApiDEmo

const styles = StyleSheet.create({})