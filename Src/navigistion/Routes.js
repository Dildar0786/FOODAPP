// In App.js in a new project

import * as React from 'react';
// import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { NavigationContainer } from '@react-navigation/native';
import Home from '../Screen/Home';
import Login from '../Screen/Login';
import Singup from '../Screen/Singup';
import Otpscreen from '../Screen/Otpscreen';
import Homeinput from '../Screen/Homeinput';
import MyAccount from '../Screen/MyAccount';

import TabNavigation from './TabNavigation';
import TaptopNavigation from './TaptopNavigation';

import Welcome from '../Screen/Welcome';
import WellcomeBack  from '../Screen/WellcomeBack';
import Favourites from '../Screen/Favourites';
import Settingsss from '../Screen/Settingsss';
import LoctionScreen from '../Screen/LoctionScreen';
import MyAccountSecond from '../Screen/MyAccountSecond';
import FoodScreen from '../Screen/FoodScreen';
import FoodMenu from '../Screen/FoodMenu';
import Flastllist from '../Screen/Flastllist';
import MyCart from '../Screen/MyCart';
import DelevryScreen from '../Screen/DelevryScreen';
import Homeee from '../Screen/Homeee';
import { DataApi } from '../Screen/DataApi';
import ApiDEmo from '../Screen/ApiDEmo';






const Stack = createNativeStackNavigator();

const Routes =()=> {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='TabNavigation'> 
        <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
        <Stack.Screen name="Login" component={Login}  options={{headerShown:false}}/>
        <Stack.Screen name="Singup" component={Singup} options={{headerShown:false}} />
        <Stack.Screen name="Otpscreen" component={Otpscreen} options={{headerShown:false}} />
        <Stack.Screen name="Homeinput" component={Homeinput} options={{headerShown:false}} />
        <Stack.Screen name="MyAccount" component={MyAccount} options={{headerShown:false}} />
        <Stack.Screen name="Welcome" component={Welcome} options={{headerShown:false}} />
        <Stack.Screen name="WellcomeBack" component={WellcomeBack} options={{headerShown:false}} />

        <Stack.Screen name="Favourites" component={Favourites} options={{headerShown:false}} />
        <Stack.Screen name="Settingsss" component={Settingsss} options={{headerShown:false}} />



        <Stack.Screen name="TabNavigation" component={TabNavigation} options={{headerShown:false}} />
        <Stack.Screen name="TaptopNavigation" component={TaptopNavigation} options={{headerShown:false}} />
        <Stack.Screen name="LoctionScreen" component={LoctionScreen} options={{headerShown:false}} />
        <Stack.Screen name="MyAccountSecond" component={MyAccountSecond} options={{headerShown:false}} />
        <Stack.Screen name="FoodScreen" component={FoodScreen} options={{headerShown:false}} />
        <Stack.Screen name="FoodMenu" component={FoodMenu} options={{headerShown:false}} />
        <Stack.Screen name="Flastllist" component={Flastllist} options={{headerShown:false}} />
        <Stack.Screen name="MyCart" component={MyCart} options={{headerShown:false}} />
        <Stack.Screen name="DelevryScreen" component={DelevryScreen} options={{headerShown:false}} />
        <Stack.Screen name="Homeee" component={Homeee} options={{headerShown:false}} />
        <Stack.Screen name="DataApi" component={DataApi} options={{headerShown:false}} />
        <Stack.Screen name="ApiDEmo" component={ApiDEmo} options={{headerShown:false}} />













        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;