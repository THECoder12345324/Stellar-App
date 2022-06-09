import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home'
import DailyPicture from '../screens/DailyPicture';
import Starmap from '../screens/Starmap';
import SpaceCrafts from '../screens/SpaceCrafts';

const Stack = createStackNavigator();

const Navigator = () => {
  return(
    <Stack.Navigator
     initialRouteName="Home"
     screenOptions={{
       headerShown: false
     }}>

      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Daily Picture" component={DailyPicture} />
      <Stack.Screen name="Spacecraft" component={SpaceCrafts} />
      <Stack.Screen name="Star Map" component={Starmap} />

    </Stack.Navigator>
  )
}

export default Navigator;