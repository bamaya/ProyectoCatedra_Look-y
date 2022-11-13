import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TouchableOpacity, TouchableHighlight, ScrollView, Image} from 'react-native';
import * as Font from 'expo-font';
import { startMapper } from 'react-native-reanimated/lib/reanimated2/core';


  
const hoteles = [
 
  
  {
    Nombre: 'Tropico Inn',
    dep: 'San Miguel',
    src: require('../img/oriental/tropico.jpg'),
    id: 'tropico'
 
  },
  {
    Nombre: 'Hotel Sevilla',
    dep: 'Usulután',
    src: require('../img/oriental/sevilla.jpg'),
    id: 'sevilla'
  },
  {
    Nombre: 'Comfort Inn Real La Union Hotel',
    dep: 'La Unión',
    src: require('../img/oriental/real.jpg'),
    id: 'real'
  },
  
];

export default function Oriental(props) {
  const NavigateToTropico=props=>{
    props.navigation.navigate('Tropico');
  }
  const NavigateToSevilla=props=>{
    props.navigation.navigate('Sevilla');
  }
  const NavigateToReal=props=>{
    props.navigation.navigate('Real');
  }
  const screen = (id)=>{
    if(id==='tropico')
    {
      NavigateToTropico(props)
    }
    if(id==='sevilla')
    {
      NavigateToSevilla(props)
    }
    if(id==='real')
    {
      NavigateToReal(props)
    }
  }
  return (

      <ScrollView style={styles.container}>
        <Text style={styles.title1}>Zona oriental</Text>
        {hoteles.map((u, i) => {
              return (
                <React.Fragment key={i} >
                <TouchableOpacity style={styles.ima} onPress={() => screen(u.id) }>    
                          <Image  style={styles.ima} source={u.src}   />
                          </TouchableOpacity>
                          <Text style={styles.subt}>{u.Nombre}</Text>
                  <Text style={styles.subt2}>{u.dep}</Text>        
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
    marginBottom: '5%',
  },
  subt: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  subt2: {
    fontSize: 17,
    color: 'white',
    marginBottom: '10%',
  },
  ima: {
    height: 250,
    width: '100%',
    marginBottom: '2%',
  }
});
