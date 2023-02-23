import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { DataApi, myfatchpost } from './DataApi';
// import{FetchGetCall,postCall} from '.'

const Homeee = () => {
    useEffect(()=>{
const res  = getData(); 
// console.log("data",)
    },[])
    const getData= async()=>{
        // const res=await DataApi();
        const res=await myfatchpost ({
            title:"hh",
            body:"khg",
            userId:24,
        });
        console.log("data==",res);
    }
  return (
    <View>
      <Text>Homeee</Text>
    </View>
  )
}

export default Homeee

const styles = StyleSheet.create({})