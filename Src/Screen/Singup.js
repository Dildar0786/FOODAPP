import { StyleSheet, Text, View ,Image,TextInput, ScrollView} from 'react-native'
import React from 'react'
import { ImagePath } from '../assets/index'

const Singup = ({navigation}) => {
  
  return ( 
<ScrollView>
    <View>
      <View style={styles.View_contner}>
        <Image source={ImagePath.scotter} />
       


        <View style={styles.box}>
          <Text style={styles.Txt_login}>
            Login
          </Text>

          <View style={styles.Vi_inp}>
            <TextInput placeholder='Email' style={styles.inp_1} />
          </View>
          <View style={styles.Vi_inp_1}>
            <TextInput placeholder='password' style={styles.inp_1} />
          </View>
          <View style={styles.Vi_inp}>
            <TextInput placeholder='Confiram password' style={styles.inp_1} />
          </View>
          <View>
            <Text style={{ marginLeft: 230, marginVertical: 10 }}>Forget password</Text>
            <View>
              <Text onPress={() => navigation.navigate('Otpscreen')} style={styles.Txt_login}>SIGN UP</Text>
            </View>
            
            <View style={{ flexDirection: 'row', alignSelf: 'center', marginVertical: 5 }}>
              <View>
                <Text>Don't have an account ?</Text>
              </View>
              <View>
                <Text style={{ color: 'red' }}>Resgister</Text>
              </View>
            </View>

          </View>
        </View>
 
      </View>

    </View>
    </ScrollView>
  )
}

export default Singup

const styles = StyleSheet.create({
  View_contner:{
    // borderWidth: 2,
     borderColor: 'red',
      // width: "100%", 
      // height: 350,
    //    borderBottomLeftRadius: 60,
    //     alignItems: 'center',
         backgroundColor: '#FF0059'
  },
  box:{
    width: "98%", 
    height: 600,
     backgroundColor: 'white',
     marginTop:-80
  },
  Txt_login:{
    fontSize: 40,
     color: 'black', 
     fontWeight: 'bold'
  },
  Vi_inp:{
    width: '95%', 
    justifyContent: 'space-around',
     alignSelf: 'center', 
     marginVertical: 8 
  },
  inp_1:{
    backgroundColor: '#FE8A4717'
  },
  Vi_inp_1:{
    width: '95%', 
    justifyContent: 'space-around',
     alignSelf: 'center', 
     marginVertical: 8 
  },
  login_btn:{
    fontSize: 25, fontWeight: 'bold', 
    textAlign: 'center',
     backgroundColor: '#FF0059', 
    width: '80%', 
    alignSelf: 'center',
     padding: 20,
      borderRadius: 20 
  }
})