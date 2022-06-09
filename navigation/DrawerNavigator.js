import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer'
import Navigator from './Navigator';
import Home from '../screens/Home';
import Spacecraft from '../screens/SpaceCrafts'
import StarMap from '../screens/Starmap';
import DailyPic from '../screens/DailyPicture';
import Exoplanets from '../screens/Exoplanet';
import Agencies from '../screens/Agencies';
import InterestingFacts from '../screens/InterestingFacts';
import ISSTracker from '../screens/ISSTracker';
import Meteors from '../screens/Meteors';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {

  return (
    <Drawer.Navigator
      screenOptions={{headerShown: false, drawerActiveTintColor: "#009B77", swipeEdgeWidth: 50, drawerStyle:{
        backgroundColor: "#b19cd9"
        
      }}}
      defaultStatus={'open'}
    >
      <Drawer.Screen name="Home" component={Home}/>
      <Drawer.Screen name="Spacecraft" component={Spacecraft} />
      <Drawer.Screen name="Star Map" component={StarMap} />
      <Drawer.Screen name="Daily Picture" component={DailyPic} />
      <Drawer.Screen name="Interesting Facts" component={InterestingFacts} />
      <Drawer.Screen name="ISS Tracker" component={ISSTracker} />
      <Drawer.Screen name="Exoplanets" component={Exoplanets} />
      <Drawer.Screen name="Meteors" component={Meteors} />
      <Drawer.Screen name="Space Agencies" component={Agencies} />
      

    </Drawer.Navigator>
  )

}

export default DrawerNavigator;