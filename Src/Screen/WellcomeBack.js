import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const WellcomeBack = ({route}) => {
    const paramss = route?.params?.data?.item
    console.log('==pri==>', route?.params?.data?.item);
  return (
    <View>
      
       <Text>{paramss?.name}</Text> 
       <Text>{paramss.img1}</Text> 
       <Text>{paramss?.img2}</Text>
       <Text>{paramss?.img3}</Text> 

       <Text>{paramss?.price}</Text> 
      

    </View>
  )
}

export default WellcomeBack

const styles = StyleSheet.create({})