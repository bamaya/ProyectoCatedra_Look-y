import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TouchableOpacity, TouchableHighlight, ScrollView, Image} from 'react-native';
import * as Font from 'expo-font';


  
const hoteles = [
  {
    Nombre: 'Tropico Inn',
    dep: 'San Miguel',
    src: require('../img/oriental/tropico.jpg'),
  },
  {
    Nombre: 'Hotel Sevilla',
    dep: 'Usulután',
    src: require('../img/oriental/sevilla.jpg'),
  },
  {
    Nombre: 'Comfort Inn Real La Union Hotel',
    dep: 'La Unión',
    src: require('../img/oriental/real.jpg'),
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
                  <TouchableOpacity style={styles.ima} onPress={() => NavigateToDecameron(props) }>                  
                      <Image style={styles.ima} source={u.src} />
                  </TouchableOpacity>
                  <Text style={styles.subt}>{u.Nombre}</Text>
                  <Text style={styles.subt2}>{u.dep}</Text>                      
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
