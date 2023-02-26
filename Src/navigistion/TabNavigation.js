import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Screen/Home'
import { ImagePath } from '../assets';
import Login from '../Screen/Login';
import { Image } from 'react-native';
import Otpscreen  from '../Screen/Otpscreen';
import Singup  from '../Screen/Otpscreen';
const Tab = createBottomTabNavigator();

const TabNavigatoin = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
        tabBarShowLabel:'treu',
        tabBarInactiveBackgroundColor:"grey",
        tabBarHideOnKeyboard:true,
      
        // tabBarBadge​:2,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
       
          tabBarInactiveTintColor:'blue',
          tabBarIcon: ({ color, size }) => (
          <Image source={ImagePath.Homeicon}/>
          ),
          // tabBarBadg2,
         
        }}
      />
      <Tab.Screen
        name="Login"
        component={Login}
        options={{
          headerShown:false,
          tabBarLabel: 'Food',
          tabBarIcon: ({ color, size }) => (
            <Image source={ImagePath.gaddi}/>
          ),
          tabBarBadge: 3,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Otpscreen}
        options={{
          tabBarLabel: 'Instamart',
          tabBarIcon: ({ color, size }) => (
            <Image source={ImagePath.basket}/>
          ),
          tabBarBadge:2,
        }}
      />
        <Tab.Screen
        name="Singup"
        component={Singup}
        options={{
          tabBarLabel: 'Genie',
          tabBarIcon: ({ color, size }) => (
            <Image source={ImagePath.bag}/>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default TabNavigatoin