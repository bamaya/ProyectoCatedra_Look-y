import react from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView,Image, TextInput} from 'react-native';
import * as Font from 'expo-font';
import layer from '../src/img/layer_registro.png';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Registro = props => {
  const NavigateToLogin = props => {
    props.navigation.navigate('Login');
  }
  return (
      <View style={styles.container}>
          <Image source={layer} style={styles.layer}/>
          <Text style={styles.title1}>REGISTRARSE</Text>

          <View style={styles.box}>
            <Text style={styles.parametros}>NOMBRE: </Text> 
              <TextInput style={styles.input} />
            <Text style={styles.parametros}>CORREO ELECTRÓNICO: </Text> 
              <TextInput style={styles.input} />
            <Text style={styles.parametros}>CONTRASEÑA: </Text>
              <TextInput style={styles.input} />
            <Text style={styles.parametros}>REPETIR CONTRASEÑA: </Text>
              <TextInput style={styles.input} />
          </View>

            <TouchableOpacity style={styles.btn} onPress={() => NavigateToLogin(props) }>
              <Text style={styles.txt_btn}>REGISTRAR</Text>
            </TouchableOpacity>
          <StatusBar style="auto" />
      </View>
  );
}

export default Registro;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A2B2EE',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bki: {
    position: 'absolute',
    height: 845,
    width: 400,
  }, 
  title1: {
    position: 'absolute',
    fontSize: 66,
    textAlign: 'center',
    fontFamily: 'Open-sans-condensed-bold',
    color: '#FFFFFF',
    fontStyle: 'normal',
    top: 115,
    left: 30
  },
  btn: {
    position: 'absolute',
    width: 260,
    height: 61,
    left: 70,
    top: 745,
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
    backgroundColor: '#5F7ADB',
  },
  txt_btn: {
    fontFamily: 'Open-sans-condensed-bold',
    color: '#FFFFFF',
    fontStyle: 'normal',
    fontSize: 46,
    textAlign: 'center',
    bottom: 2,
  },
  layer: {
    position: 'absolute',
    top: -20,
    width: 385,
    height: 361,
  },
  parametros: {
    fontFamily: 'Open-sans-condensed-bold',
    color: '#FFFFFF',
    fontStyle: 'normal',
    fontSize: 18,
    top: 15,
    marginBottom: 15,
    left: 19.5
  },
  input: {
    backgroundColor: 'white',
    width: 311,
    height: 50,
    left: 19.5,
    top: 9,
    marginBottom: 5,
  },
  box: {
    position: 'absolute',
    width: 351,
    height: 235,
    left: 24,
    top: 318,
  },
});
