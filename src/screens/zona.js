import react, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableHighlight} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import * as Font from 'expo-font';

const Stack = createNativeStackNavigator();
const Zona2 = props => {
    const NavigateToZona= (props,lugar) => {
        props.navigation.navigate(lugar);
      }
  return (
    <View style={styles.container}>
        <TouchableHighlight style={styles.button} onPress={() => {NavigateToZona(props,'oriental');}}>
          <Text style={styles.title1}>Zona Oriental</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.button} onPress={() => {NavigateToZona(props,'central');}}>
          <Text style={styles.title1}>Zona Central</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.button} onPress={() => {NavigateToZona(props,'occidental');}}>
          <Text style={styles.title1}>Zona Occidental</Text>
        </TouchableHighlight>
        <StatusBar style="auto" />
    </View>
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

export default Zona2;
