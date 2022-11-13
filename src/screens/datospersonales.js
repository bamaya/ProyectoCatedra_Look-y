import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text,Button, View, TouchableOpacity, TouchableHighlight,ScrollView,Image, TextInput, Platform, SafeAreaView} from 'react-native';
import * as Font from 'expo-font';
import bkr from '../img/layer_reserva.png';
import RNPickerSelect from 'react-native-picker-select';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DateTimePicker from '@react-native-community/datetimepicker';


const Datospersonales = props => {
  const NavigateToHome = props => {
    props.navigation.navigate('Root');
  }


  return (
    
  
<View style={styles.bkir}>
<Image style={styles.bki} source={bkr}/>
<ScrollView>
<Text></Text>
<Text></Text>
<Text style={styles.label}>       Datos Personales</Text>
<Text></Text>
    <Text style={styles.label}>       Nombres:</Text>
 <TextInput
    style={styles.input}
    
    />
     <Text style={styles.label}>       Apellidos:</Text>
 <TextInput
    style={styles.input}
    
    />
     <Text style={styles.label}>       Telefono:</Text>
 <TextInput
    style={styles.input}
    
    />
    <TouchableOpacity style={{...styles.button2, backgroundColor:'#0d7321'}} onPress={() => NavigateToHome(props) }>
          <Text style={{...styles.buttonText,color:'#ffff'}}> Realizar Pago</Text>
        </TouchableOpacity>
       </ScrollView>
   </View>

  );
}

export default Datospersonales;

const styles = StyleSheet.create({
  button:{
    alignSelf: 'center',
    borderRadius:10,
    paddingVertical: 15,
    marginVertical:10,
    width: '90%'
    
  },
  button1:{
    alignSelf: 'center',
    borderRadius:10,
    paddingVertical: 15,
    marginVertical:0,
    width: '90%'
    
  },
  button2:{
    alignSelf: 'center',
    borderRadius:10,
    paddingVertical: 15,
    marginVertical:100,
    width: '90%'
    
  },
  button3:{
    alignSelf: 'center',
    borderRadius:10,
    paddingVertical: 15,
    marginVertical:0,
    width: '90%'
    
  },
  bki: {
    position: 'absolute',
    height: 950,
    width: 450,
  }, 
  bkir: {
    flex: 1,
    backgroundColor: '#26292B',
  },
  buttonText:{
textAlign:'center',
color:'#ffff',
fontSize:16,
  },
  ciudad:{
    width:250,
    height:300,
    marginRight:10,
    marginTop:20
   },
   inputAndroid: {
    marginTop:10,
    fontSize: 16,
    paddingHorizontal: 20,
    paddingVertical:2,
    borderWidth: 0.5,
    borderColor: 'black',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30,
    backgroundColor: '#5F7ADB',
    foreColor:'#ffff',
    width:'90%',
    alignSelf:'center'
   

  },
  title1: {
    fontSize: 30,
    textAlign: 'left',
    fontFamily: 'Open-sans-condensed-bold',
    color: '#FFFFFF',
    fontStyle: 'normal',
    marginTop:38,
    marginHorizontal:5,
    

  },
  label: {
    
    fontWeight: 'bold',
    fontSize: 18,
 marginVertical:20,

    color:'white',
  },
  label1: {
    fontWeight: 'bold',
    fontSize: 25,
 marginVertical:15,
    color:'white',
    alignSelf:'center'
  },
  container: {
    
    backgroundColor: '#26292B',
width:'100%',
  },
  input: {
   
      height: 50,
      width:350,
      borderColor: '#e1e1e1',
      borderWidth: 1,
      borderStyle: 'solid',
      backgroundColor:'white',
      alignSelf:'center'
   
      },
});
  