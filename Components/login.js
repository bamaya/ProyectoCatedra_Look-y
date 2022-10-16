import react from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput} from 'react-native';
import * as Font from 'expo-font';
import { AntDesign } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import layer from '../src/img/layer_login.png';
import line from '../src/img/Line.png';

const Login = props =>  {
  const NavigateToHome = props => {
    props.navigation.navigate('Root');
  }
  const NavigateToRegistro = props => {
    props.navigation.navigate('Registro');
  }
  return (
    <View style={styles.container}>
        <Image style={styles.layer} source={layer}/>

        <Text style={styles.title1}>INICIO DE SESIÓN</Text>

        <View style={styles.box}>
          <Text style={styles.parametros}>CORREO ELECTRÓNICO: </Text> 
            <TextInput style={styles.input} />
          <Text style={styles.parametros}>CONTRASEÑA: </Text>
            <TextInput style={styles.input} />
        </View>
        
        <Image source={line} style={styles.line1}></Image>
        <Image source={line} style={ styles.line2}></Image>
        <Text style={styles.text}>¿No tienes una cuenta?</Text>
        
        <TouchableOpacity style={styles.btn} onPress={() => NavigateToHome(props) }>
          <Text style={styles.txt_btn}>INGRESAR</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn2} onPress={() => NavigateToRegistro(props) }>
          <Text style={styles.registro} >REGISTRATE</Text>
        </TouchableOpacity>
        <StatusBar style="auto" />
    </View>
  );
}

export default Login;

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
    position: 'absolute',
    fontSize: 66,
    textAlign: 'center',
    fontFamily: 'Open-sans-condensed-bold',
    color: '#FFFFFF',
    fontStyle: 'normal',
    top: 55,
    left: 57
  },
  arrow: {
    position: 'absolute',
    left: 275,
    top: 725,
  },
  box: {
    position: 'absolute',
    width: 351,
    height: 235,
    left: 16,
    top: 371,
    borderColor: 'white',
    borderWidth: 1,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  layer: {
    position: 'absolute',
    top: -10,
    width: 385,
    height: 361,
  },
  btn: {
    position: 'absolute',
    width: 260,
    height: 61,
    left: 62,
    top: 645,
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
  line1: {
    position: 'absolute',
    left: 0,
    top: 769,
  },
  line2: {
    position: 'absolute',
    right: 0,
    top: 769,
  },
  text: {
    fontFamily: 'Open-sans-condensed-bold',
    color: '#FFFFFF',
    fontStyle: 'normal',
    top: 350,
  },
  registro: {
    position: 'absolute',
    fontFamily: 'Open-sans-condensed-bold',
    color: '#FFFFFF',
    fontStyle: 'normal',
    fontSize: 18,
    top: 7,
    left: 23
  },
  btn2: {
    position: 'absolute',
    width: 130,
    height: 41,
    left: 125,
    top: 786,
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
    backgroundColor: '#5F7ADB',
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
    marginBottom: 15,
  },
});
