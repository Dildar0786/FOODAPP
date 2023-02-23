import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react';
import { ImagePath } from '../assets/index';

const Otpscreen = ({navigation}) => {
  return (
    <View style={styles.Otpconter}>
      <View  style={styles.optchild}>
      <Image source={ImagePath.girl} style={styles.imggril}/>
      </View>
      <View  style={styles.optchildsecod}>
        <View>
          <Text style={styles.textotp}>OTP</Text>
        </View>

        <View style={styles.text_opt_send}>
              <View>
                <Text>Enter OTP Send To</Text>
              </View>
              <View>
                <Text style={{ color: 'red' ,marginLeft:5}}>0007860786</Text>
              </View>
              

            </View>


    <View style={styles.btnprent}>
       <View style={styles.otpbtn_1}>

       </View>
       <View style={styles.otpbtn_2}>

       </View>
       <View style={styles.otpbtn_3}>

       </View>
       <View style={styles.otpbtn_4}>

       </View>
       </View>
       <View>
              <Text  onPress={()=>navigation.navigate('Homeinput')} style={styles.submit_inp}>SUBMIT</Text>
            </View>

            <View style={styles.text_opt_send}>
              <View>
                <Text>Don't Receive the OPT ?</Text>
              </View>
              <View>
                <Text style={{ color: 'red' ,marginLeft:5}}>RESEND</Text>
              </View>
              

            </View>


      </View>
    </View>
  )
}

export default Otpscreen

const styles = StyleSheet.create({
  Otpconter:{
    flex:1,
    
    
     
  },
  optchild:{
    borderWidth:2,
    borderColor:"red",
    width: "100%",
     height: 250,
     justifyContent:'center',
     alignItems:'center',
     backgroundColor: '#FF0059'
  },
  optchildsecod:{
    borderWidth:2,
    borderColor:"blue",
    width: "95%",
     height: 400,
     backgroundColor: 'white',
     marginLeft:10
  },
  imggril:{
    width: 250,
     height: 280,
  },
  btnprent:{
flexDirection:'row',
justifyContent:'space-around',
 marginVertical:10
  },

  otpbtn_1:{
    width:50,
    height:50,
    borderColor:'red',
    backgroundColor:'#FE8A4717',
    borderRadius:10,
  },
  otpbtn_2:{
    width:50,
    height:50,
    borderColor:'red',
    backgroundColor:'#FE8A4717',
    borderRadius:10,
  },
  otpbtn_3:{
    width:50,
    height:50,
    borderColor:'red',
    backgroundColor:'#FE8A4717',
    borderRadius:10,
  },
  otpbtn_4:{
    width:50,
    height:50,
    borderColor:'red',
    backgroundColor:'#FE8A4717',
    borderRadius:10,
  },
  text_opt_send:{
    flexDirection: 'row', 
    alignSelf: 'center',
     marginVertical: 5 
  },
  submit_inp:{
    fontSize: 25, 
    fontWeight: 'bold',
     textAlign: 'center', 
     backgroundColor: '#FF0059', 
     width: '80%', alignSelf: 'center',
      padding: 20, borderRadius: 20 ,
      marginVertical:15
  },
  textotp:{
    fontSize:30,
    fontWeight:"bold",
    color:"#000000",
    marginVertical:10
  }

})