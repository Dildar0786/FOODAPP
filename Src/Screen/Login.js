import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { ImagePath } from '../assets/index'
// import { Validation } from '../componts/Validation'
import { isValidForm, validators } from '../componts/Validation'
const Login = ({ navigation }) => {
  const[email,setemail]=useState('')
  
  const[password,setpassword]=useState('')
  const[error,seterror]=useState({})
  const vlifinton=()=>{
    const form={
      Email:validators.checkRequire('Email',email),
      Password:validators.checkPassword('Password',password)

    }
    seterror(form)
    if(isValidForm(form)){
      navigation.navigate('Singup')
    }
  }

  return (
    <View>
      <View style={styles.View_contner}>
        <Image source={ImagePath.istockphoto}/>


        <View style={styles.box}>
          <Text style={styles.tex_login}>
            Login
          </Text>
          <View style={styles.Vi_inp}>
            <TextInput placeholder='Email' style={styles.input}   onChange={(e)=>setemail(e)}/>
            {error?.Email== null?"" :<Text style={styles.txt_color}>{error?.Email}</Text>}
          </View>
          <View style={styles.Vi_inp}>
            <TextInput placeholder='password' style={styles.input} onChange={(e)=>setpassword(e)} />
            {error?.Password== null?"" :<Text style={styles.txt_color}>{error?.Password}</Text>}
          </View>
          <View>
            <Text style={styles.txt_forget}>Forget password</Text>
            <TouchableOpacity onPress={() => vlifinton()}>
              <Text style={styles.login_btn}>LIGIN</Text>
            </TouchableOpacity>
            <View style={styles.Txt_dont}>
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
  )
}

export default Login

const styles = StyleSheet.create({
  View_contner:{
    borderWidth: 2, 
    borderColor: 'red',
     width: "100%", height: 400, 
     borderBottomLeftRadius: 60,
     alignItems: 'center', 
     backgroundColor: '#FF0059'
  },
  box:{
    width: "92%",
     height: 350,
      backgroundColor: 'white' 
  },
  tex_login:{
    fontSize: 40, 
    color: 'black', 
    fontWeight: 'bold'

  },
  Vi_inp:{
    width: '95%', 
    justifyContent: 'space-around',
     alignSelf: 'center',
      marginVertical: 10 
  },
  input:{
    backgroundColor: '#FE8A4717' 
  },
  txt_forget:{
    marginLeft: 230,
     marginVertical: 10 
  },
  login_btn:{
    fontSize: 25, fontWeight: 'bold', 
    textAlign: 'center',
     backgroundColor: '#FF0059', 
    width: '80%', 
    alignSelf: 'center',
     padding: 20,
      borderRadius: 20 
  },
  Txt_dont:{
    flexDirection: 'row', 
    alignSelf: 'center',
     marginVertical: 5
  },
  txt_color:{
    color:"red",
fontWeight:'bold'
  }
})