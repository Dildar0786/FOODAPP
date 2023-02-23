import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Home from '../Screen/Home';

import Login from '../Screen/Login';
// import Otpscreen  from '../Screen/Otpscreen';
import Singup  from '../Screen/Singup';
const Tab = createMaterialTopTabNavigator();

const TaptopNavigation =() =>{
  return (
    <Tab.Navigator
      initialRouteName="TabNavigation"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
        tabBarLabelStyle: { fontSize: 12 },
        tabBarStyle: { backgroundColor: 'powderblue' },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ tabBarLabel: 'Home' }}
      />
      <Tab.Screen
        name="Login"
        component={Login}
        options={{ tabBarLabel: 'Updates' }}
      />
      <Tab.Screen
        name="Singup"
        component={Singup}
        options={{ tabBarLabel: 'Profile' }}
      />
    </Tab.Navigator>
  );
} 
export default TaptopNavigation 