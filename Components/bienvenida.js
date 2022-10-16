import react, {useEffect, useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Button, View, Image} from 'react-native';
import * as Font from 'expo-font';
import bk from '../src/img/bk_inicio.png';
import { AntDesign } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Bienvenida = props => {
    const [fontsLoaded, setFontsLoaded] = useState(false);
  
    useEffect(() => {
      if (!fontsLoaded) {
        Font.loadAsync({
        'Open-sans-condensed-bold': require('../src/assets/OpenSans-CondBold.ttf'),
        'Open-sans-condensed-light': require('../src/assets/OpenSans-CondLight.ttf'),
        });
      }
    });

    const NavigateToLogin = props => {
      props.navigation.navigate('Login');
    }
  
    return (
      <View style={styles.container}>
          <Image style={styles.bki} source={bk}/>
          <Text style={styles.title1}>BIENVENIDO SERA UN GUSTO PODER  AYUDARTE EN ESTE NUEVO VIAJE</Text>
          <AntDesign name="arrowright" size={83} color="white" style={styles.arrow} onPress={() => NavigateToLogin(props)} />
          <StatusBar style="auto" />
        </View>
    );
  }

  export default Bienvenida;
  
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
    arrow: {
      position: 'absolute',
      left: 275,
      top: '80%',
    },
  });
  