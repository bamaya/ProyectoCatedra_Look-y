import react, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableHighlight} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import * as Font from 'expo-font';
import Zona2 from './zona';
import Oriental from './oriental';
import Central from './central';
import Occidental from './occidental';

const Stack = createNativeStackNavigator();
export default function Zona() {
  return (
    <Stack.Navigator
    screenOptions={{
    headerShown: false
  }}
    >
    <Stack.Screen name="zona2" component={Zona2} />
    <Stack.Screen name="oriental" component={Oriental} />
    <Stack.Screen name="central" component={Central} />
    <Stack.Screen name="occidental" component={Occidental} />
  </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#26292B',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bki: {
    position: 'absolute',
    height: 845,
    width: 400,
  }, 
  title1: {
    fontSize: 36,
    textAlign: 'center',
    fontFamily: 'Open-sans-condensed-bold',
    color: '#FFFFFF',
    fontStyle: 'normal',
  },
  button: {
    backgroundColor: '#5F7ADB',
    borderRadius: 100,
    padding: '5%',
    marginBottom: '10%',
    width: '90%',
  }
});
