import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TouchableOpacity, TouchableHighlight, ScrollView, Image} from 'react-native';
import * as Font from 'expo-font';


  
const hoteles = [
  {
    Nombre: 'Hotel 1',
    src: require('../img/oriental/hotel1.jpg'),
  },
  {
    Nombre: 'Hotel 2',
    src: require('../img/oriental/hotel2.jpg'),
  },
  {
    Nombre: 'Hotel 3',
    src: require('../img/oriental/hotel3.jpg'),
  },
];

export default function Oriental(props) {
  const NavigateToDecameron=props=>{
    props.navigation.navigate('Decameron');
  }
  return (
      <ScrollView style={styles.container}>
        <Text style={styles.title1}>Zona oriental</Text>
        {hoteles.map((u, i) => {
              return (
                <React.Fragment key={i}>
                  <View>
                  <Text style={styles.subt}>{u.Nombre}</Text>
                  <TouchableOpacity style={styles.ima} onPress={() => NavigateToDecameron(props) }>
                      <Image style={styles.ima} source={u.src} />
                      
          
        </TouchableOpacity>
                      
                  </View>
                </React.Fragment>
              );
        })}
        <StatusBar style="auto" />
        
      </ScrollView>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#26292B',
  },
  bki: {
    position: 'absolute',
    height: 845,
    width: 400,
  }, 
  title1: {
    marginTop: '5%',
    fontSize: 36,
    textAlign: 'center',
    fontFamily: 'Open-sans-condensed-bold',
    color: '#FFFFFF',
    fontStyle: 'normal',
  },
  subt: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  ima: {
    height: 250,
    width: '100%',
  }
});
