import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text,Button, View, TouchableOpacity, TouchableHighlight,ScrollView,Image, TextInput, Platform, SafeAreaView} from 'react-native';
import * as Font from 'expo-font';
import bkr from '../img/layer_reserva.png';
import RNPickerSelect from 'react-native-picker-select';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DateTimePicker from '@react-native-community/datetimepicker';


const Acantilados = props => {
  const NavigateToHome = props => {
    props.navigation.navigate('Root');
  }
  const [date,setDate] = useState(new Date());
const [mode,setMode] = useState ('date');
const [show,setShow]=useState (false);
const [text,setText]= useState ('Empty');

const onChange = (event,selectedDate)=>{
  const currentDate = selectedDate || date;
  setShow(Platform.OS === 'ios');
  setDate(currentDate);
  let tempDate = new Dare(currentDate);
  let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
  let fTime= 'Hours' + tempDate.getHours() + '| Minutes: ' + tempDate.getMinutes();
  setText(fDate + '\n' + fTime) 

  console.log(fDate + ' (' + fTime + ')')
}

const showMode = (currentMode)=>{
  setShow(true);
  setMode(currentMode);  
}

  return (
    
  
<View style={styles.bkir}>
<Image style={styles.bki} source={bkr}/>
<Text style={styles.title1} >Hotel Acantilados</Text>
<ScrollView>
          <ScrollView horizontal>
   
                <View>
                    <Image
                        style={styles.ciudad}
                        source={require('../img/central/ce11.jpg')} />
                </View>
                <View>
                    <Image
                        style={styles.ciudad}
                        source={require('../img/central/ce12.webp')} />
                </View>
                <View>
                    <Image
                        style={styles.ciudad}
                        source={require('../img/central/ce13.jpg')} />
                </View>
                <View>
                    <Image
                        style={styles.ciudad}
                        source={require('../img/central/ce14.jpg')} />
                </View>
                <View>
                    <Image
                        style={styles.ciudad}
                        source={require('../img/central/ce15.jpg')} />
                </View>
                </ScrollView>
         <Text></Text>
         <Text></Text>       
 <Text style={styles.label}>       Cantidad de personas:</Text>
 <TextInput
    style={styles.input}
    keyboardType='numeric'
    />
    <View style={styles.inputAndroid}>
   
   <RNPickerSelect
    
   
     placeholder={{
       label: 'Seleccióna tipo de Habitación...',
       value: null,
     }}
     items={[
       { label: 'Estándar', value: 'Estándar' },
       { label: 'Superior', value:  'Superior'},
     ]}
   />
 </View>
  <Text style={styles.label1}>Fecha:</Text>
  <Text style={styles.label}>       Desde</Text>
  <TouchableOpacity style={{...styles.button, backgroundColor:'#5F7ADB'}} onPress={()=>showMode('date')}>
   <Text style={styles.buttonText} >Fecha</Text>
   </TouchableOpacity>
   <Text style={styles.label}>       Hasta</Text>
  <TouchableOpacity style={{...styles.button, backgroundColor:'#5F7ADB'}} onPress={()=>showMode('date')}>
   <Text style={styles.buttonText} >Fecha</Text>
   </TouchableOpacity>
 
   {show && (
      <DateTimePicker
      testID='dataTimePicker'
      value={date}
      mode= {mode}
      is24Hour={true}
        display='default'
        onChange={onChange}
      />

    )}
   
    

        <TouchableOpacity style={{...styles.button2, backgroundColor:'#0d7321'}} onPress={() => NavigateToHome(props) }>
          <Text style={{...styles.buttonText,color:'#ffff'}}> Reservar</Text>
        </TouchableOpacity>
      
       
        </ScrollView>
    </View>
   
    
  );
}

export default Acantilados;

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
 marginVertical:5,
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
  