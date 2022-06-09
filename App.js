import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Navigator from './navigation/Navigator';
import DrawerNavigator from './navigation/DrawerNavigator'
import Exoplanet from './screens/Exoplanet'

export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}
