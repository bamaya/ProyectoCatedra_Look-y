import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image} from 'react-native';
import * as Font from 'expo-font';

const hoteles = [
  {
    Nombre: 'Hotel Casa Verde',
    dep: 'Santa Ana',
    src: require('../img/occidente/verde.jpg'),
    id:'Verde'
  },
  {
    Nombre: 'La Casa de Mamapan',
    dep: 'Ahuachapán',
    src: require('../img/occidente/mamapan.jpg'),
    id:'Mamapan'
  },
  {
    Nombre: 'Mizata Point Resort',
    dep: 'Sonsonante',
    src: require('../img/occidente/mizata.jpg'),
    id:'Mizata'
  },
];

export default function Occidental(props) {
  const NavigateToVerde=props=>{
    props.navigation.navigate('Verde');
  }
  const NavigateToMamapan=props=>{
    props.navigation.navigate('Mamapan');
  }
  const NavigateToMizata=props=>{
    props.navigation.navigate('Mizata');
  }
  const screen = (id)=>{
    if(id==='Verde')
    {
      NavigateToVerde(props)
    }
    if(id==='Mamapan')
    {
      NavigateToMamapan(props)
    }
    if(id==='Mizata')
    {
      NavigateToMizata(props)
    }
  }
  return (
    <ScrollView style={styles.container}>
    <Text style={styles.title1}>Zona occidental</Text>
    {hoteles.map((u, i) => {
          return (
            <React.Fragment key={i}>
              <View>
              <TouchableOpacity style={styles.ima} onPress={() => screen(u.id) }>
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
