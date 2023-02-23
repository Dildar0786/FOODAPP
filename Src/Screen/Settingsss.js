import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { ImagePath } from '../assets'

const Settingsss = () => {
    return (
        <View>
            <View style={styles.img_contner}>

                <View>
                    <Image source={ImagePath.LeftArrow} style={styles.letf_arrow} />
                </View>
                <View>
                    <Text style={styles.text_favrt}>SETTINGS</Text>
                    <Text style={styles.text_child_picture}>PICTURE IN PICTURE MODE</Text>
                </View>
                
                </View>
            <View style={styles.line_vi}>

            </View>

            <View style={styles.contenr}>
      <View>
        <Text style={styles.txt_hna}>Allow Picture in Picture Mode</Text>
      {/* <Text style={{marginLeft:10}}>Favourites,Offers & Settings</Text> */}
      </View>
      <View>
        <Image source={ImagePath.upload} style={styles.upload}/>
      </View>

      
      </View>
      <View style={styles.line_vi}>

</View>

<View style={{alignSelf:'center',marginTop:10,}}>
<Text style={styles.comon_txt}>pip Mode allow you to live track your order in a small</Text>
<Text style={styles.comon_txt}>
    window pinned to one coner of your srceen while you
</Text>
<Text style={styles.comon_txt}>
    navigate to other apps or to the home screen.
</Text>
<Text style={{marginTop:40,fontSize:20,fontWeight:'bold',color:'black'}}>
    SMS PREFEERENCES
</Text>
<Text style={{marginTop:10,fontSize:15,color:'black'}}>
    Order lelated SMS cannot be disable as they 
</Text>
<Text style={{fontSize:15,color:'black'}}>ceitical to provide service</Text>
</View>
<View style={styles.line_vi}>

</View>
<View style={styles.contenr}>
      <View>
        <Text style={styles.txt_hna}>Allow Picture in Picture Mode</Text>
      {/* <Text style={{marginLeft:10}}>Favourites,Offers & Settings</Text> */}
      </View>
      <View>
        <Image source={ImagePath.upload} style={styles.upload}/>
      </View>

      
      </View>
      <View style={styles.line_vi}>

</View>
<View style={{alignSelf:'center',marginTop:20}}>
    <Text style={{fontSize:16,color:'black'}}>
        keep this on to receve Offer recommendtions &
    </Text>
    <Text style={{fontSize:16,color:'black'}}>
        timly remimders besed on your intereste
    </Text>
</View>
        </View>
    )
}

export default Settingsss

const styles = StyleSheet.create({
    img_contner: {
        flexDirection: 'row',

    },
    letf_arrow: {
        width: 30,
        height: 20,
        tintColor: "black",
        marginTop: 22,
        marginLeft: 20,
    },
    text_favrt: {
        fontSize: 20,
        fontWeight: "bold",
        marginLeft: 25,
        marginTop: 20,
        color: 'black'
    },
    text_child_picture: {

        fontSize: 20,
        // fontWeight:"bold",
        marginLeft: 20,
        marginTop: 8,
        color: 'black'
    },
    line_vi: {
        borderBottomWidth: 2,
        marginTop: 20,
        width: "95%",
        borderColor: 'black',
        marginLeft: 10
    },
    contenr:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginVertical:20,
    },
    txt_hna:{
        fontWeight:"bold",
      color:"black",
      fontSize:20,
      marginLeft:10
    },
    upload:{
        tintColor:'black',
        height:30,
        width:40
      },
      comon_txt:{
        fontSize:15,
        color:'black',

      }
})