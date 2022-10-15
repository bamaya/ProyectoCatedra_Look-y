import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text,Button, View, TouchableOpacity, TouchableHighlight,ScrollView,Image, TextInput, Platform} from 'react-native';
import * as Font from 'expo-font';
import bkr from '../img/layer_reserva.png';
import RNPickerSelect from 'react-native-picker-select';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DateTimePicker from '@react-native-community/datetimepicker';






const Decameron = props => {
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
  let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1)+ '/' + tempDate.getFullYear();
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
          <Text style={styles.title1} >Hotel Decameron Salinitas</Text>
            <ScrollView horizontal>
   
                <View>
                    <Image
                        style={styles.ciudad}
                        source={require('../img/Hotel1.jpg')} />
                </View>
                <View>
                    <Image
                        style={styles.ciudad}
                        source={require('../img/Hotel2.jpg')} />
                </View>
                <View>
                    <Image
                        style={styles.ciudad}
                        source={require('../img/Hotel3.jpg')} />
                </View>
                <View>
                    <Image
                        style={styles.ciudad}
                        source={require('../img/Hotel4.jpg')} />
                </View>
            </ScrollView>
           
            <View style={styles.inputAndroid}>
   
      <RNPickerSelect
       
       // onValueChange={(value) => guardarTipo(value)}
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

    
       <View>
     
    <Text style={styles.label}>       Cantidad de personas:</Text>
    <TextInput
    style={styles.input}
   
    keyboardType='numeric'
    
    />
   
    <Text style={styles.label1}>       Fecha de hospedaje:</Text>
    <Text style={styles.label}>       {text}</Text>
 <Button title = 'Fecha' onPress={()=>showMode('date')}/>
 <Text style={styles.label}>          Hora de hospedaje:</Text>
 <Button title = 'Hora' onPress={()=>showMode('time')}/>
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
    
    <TouchableOpacity style={styles.btn2} onPress={() => NavigateToHome(props) }>
          <Text style={styles.title2} >Reservar</Text>
        </TouchableOpacity>

       
    </View>
   
    </View>

  );
}

export default Decameron;

const styles = StyleSheet.create({
  banner:{
    height:250,
    flex:1
  },
  container: {
    flex: 1,
    backgroundColor: '#26292B',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bki: {
    position: 'absolute',
    height: 860,
    width: 400,
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
  title2: {
    fontSize: 30,
    textAlign: 'left',
    fontFamily: 'Open-sans-condensed-bold',
    color: '#FFFFFF',
    fontStyle: 'normal',

  marginHorizontal:18
   

  },
formulario: {
    backgroundColor: '#FFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    flex: 1
      },

btn2: {
        position: 'absolute',
        width: 150,
        height: 51,
        left: 123,
        top: 310,
        alignItems:'center',
        borderTopLeftRadius: 100,
        borderTopRightRadius: 100,
        borderBottomLeftRadius: 100,
        borderBottomRightRadius: 100,
        backgroundColor: '#5F7ADB',
        alignContent:'center',
      
      
        
      },
titulo:{
  fontWeight:'bold',
  fontSize:24,
  marginVertical:10,
},
titulo2:{
  fontWeight:'bold',
  fontSize:18,
  color:'blue',
  marginVertical:10
},
ciudad:{
  width:250,
  height:300,
  marginRight:10,
  marginTop:20
 },
  mejores:{
    width:'100%',
    height:200,
    marginVertical:5
  },
  label: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 20,
    color:'white',
    marginHorizontal:-10,
    
    },
    label1: {
      fontWeight: 'bold',
      fontSize: 18,
      marginTop: -150,
      color:'white',
      marginHorizontal:-10,
      
      },
input: {
  marginHorizontal:15,
    marginTop: 10,
    height: 50,
    width:350,
    borderColor: '#e1e1e1',
    borderWidth: 1,
    borderStyle: 'solid',
    backgroundColor:'white',
    marginVertical:170,
    alignContent:'center'
    },

   
  listaItem:{
    flexBasis:'49%'
  },
  listado:{
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent:'space-between'
  },
  vistaModal:{
    backgroundColor:'#000000aa',
    flex:1
  },
  Modal:{
    backgroundColor:'#fff',
    margin: 50,
    padding: 40,
    borderRaius: 10,
    flex: 1
  },
  inputAndroid: {
    marginTop:10,
    fontSize: 16,
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'black',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30,
    backgroundColor: '#2e2e2e',
    foreColor:'#ffff'
   

  },btnSubmit: {
    padding: 20,
    backgroundColor:'#7389fa',
    marginVertical: 10,
    marginHorizontal:100,
  alignItems:'center'  ,
  foreColor:'white'
  
  },
  textoSubmit: {
    color: '#ffff',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize:16,
    },
  subtitulo:{
    fontWeight: 'bold',
    fontSize: 20,
    justifyContent: 'center',
   color:'#ffff'
  },
  button:{
    width: 75,
      height: 75,
      borderRadius: 0,
      backgroundColor: '#000',
      color: '#fff'
   
  }
  
  });
 