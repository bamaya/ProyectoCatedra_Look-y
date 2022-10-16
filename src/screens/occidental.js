import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableHighlight, ScrollView, Image} from 'react-native';
import * as Font from 'expo-font';

const hoteles = [
  {
    Nombre: 'Hotel 1',
    src: require('../img/occidente/hotel1.jpg'),
  },
  {
    Nombre: 'Hotel 2',
    src: require('../img/occidente/hotel2.jpg'),
  },
  {
    Nombre: 'Hotel 3',
    src: require('../img/occidente/hotel3.jpg'),
  },
];

export default function Occidental() {
  return (
    <ScrollView style={styles.container}>
    <Text style={styles.title1}>Zona occidental</Text>
    {hoteles.map((u, i) => {
          return (
            <React.Fragment key={i}>
              <View>
              <Text style={styles.subt}>{u.Nombre}</Text>
                  <Image style={styles.ima} source={u.src} />
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
