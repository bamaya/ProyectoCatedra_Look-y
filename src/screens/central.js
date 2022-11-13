import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image} from 'react-native';
import * as Font from 'expo-font';

const hoteles = [
  {
    Nombre: 'Hotel Real InterContinental',
    dep: 'San Salvador',
    src: require('../img/central/intercontinental.jpg'),
    id: 'Intercontinental'
  },
  {
    Nombre: 'Hotel Argueta',
    dep: 'La Paz',
    src: require('../img/central/argueta.jpg'),
    id:'Argueta'
  },
  {
    Nombre: 'Acantilados',
    dep: 'La Libertad',
    src: require('../img/central/acantilados.jpg'),
    id:'Acantilados'
  },
];

export default function Central(props) {
  const NavigateToIntercontinental=props=>{
    props.navigation.navigate('Intercontinental');
  }
  const NavigateToArgueta=props=>{
    props.navigation.navigate('Argueta');
  }
  const NavigateToAcantilados=props=>{
    props.navigation.navigate('Acantilados');
  }
  const screen = (id)=>{
    if(id==='Intercontinental')
    {
      NavigateToIntercontinental(props)
    }
    if(id==='Argueta')
    {
      NavigateToArgueta(props)
    }
    if(id==='Acantilados')
    {
      NavigateToAcantilados(props)
    }
  }
  return (
    <ScrollView style={styles.container}>
    <Text style={styles.title1}>Zona central</Text>
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
