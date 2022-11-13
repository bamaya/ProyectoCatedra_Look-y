import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Modal, TouchableHighlight, Button, ScrollView } from 'react-native';
import * as Font from 'expo-font';

const promociones = [
  {
    title: 'Especial Navidad',
    prom: 'Desde $126',
    espc: '1 noche / persona',
    hotel: 'Salinitas',
    lug: 'Sonsonate, El Salvador',
    src: require('../img/promociones/prom1.jpg'),
    log: require('../img/promociones/decameron.png'),
  },
  {
    title: 'Vuelo Incluido',
    prom: 'Desde $407',
    espc: '2 noches / persona',
    hotel: 'Salinitas',
    lug: 'Sonsonate, El Salvador',
    src: require('../img/promociones/prom2.jpg'),
    log: require('../img/promociones/decameron.png'),
  },
];

const anuncios = [
  {
    src: require('../img/anuncios/anuncio1.jpeg'),
  },
  {
    src: require('../img/anuncios/anuncio2.jpg'),
  }
];

const Home = props => {
  const [modalVisible, setModalVisible] = useState(false);
  const [prom, setProm] = useState('');
  const [espc, setEspc] = useState('');
  const [hotel, setHotel] = useState('');
  const [lug, setLug] = useState('');
  const [log, setLogo] = useState('');
  return (
      <ScrollView style={styles.container}>
      <Modal
          transparent={true}
          animationType="slide"
          visible={modalVisible}
          onRequestClose={() => {
            alert('Modal has been closed.');
          }}>
          <View style={styles.vistaModal}>
            <View style={styles.Modal}>
            <Image style={styles.logo} source={log} />
            <Text style={styles.desc}>{prom}</Text>
              <Text style={styles.espc}>{espc}</Text>
              <Text style={styles.espc}>{hotel}</Text>
              <Text style={styles.espc}>{lug}</Text>
              <Text style={{marginBottom: '20%'}} />
              <Button
              color='#5F7ADB'
                title="cerrar"
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}
              />
            </View>
          </View>
        </Modal>
        <Text style={{marginBottom: '5%'}} />
      <Text style={styles.title1}>Promociones</Text>
      {promociones.map((u, i) => {
          return (
            <React.Fragment key={i}>
              <View>
              <Text style={styles.title2}>{u.title}</Text>
              <TouchableHighlight
                      onPress={() => {
                        setModalVisible(!modalVisible);
                        setProm(u.prom);
                        setEspc(u.espc);
                        setHotel(u.hotel);
                        setLug(u.lug);
                        setLogo(u.log);
                      }}>
                      <Image style={styles.ima} source={u.src} />
              </TouchableHighlight>
              </View>
            </React.Fragment>
          );})
      }
      <Text style={styles.title1}>Anuncios</Text>
      {anuncios.map((u, i) => {
          return (
            <React.Fragment key={i}>
            <Image style={styles.ima} source={u.src} />
            </React.Fragment>
          );})
      }
      </ScrollView>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#26292B',
  },
  title1: {
    fontSize: 36,
    textAlign: 'right',
    fontFamily: 'Open-sans-condensed-bold',
    color: '#FFFFFF',
    fontStyle: 'normal',
    marginBottom: '7%',
    alignSelf: 'center',
  },
  title2: {
    fontSize: 30,
    textAlign: 'center',
    color: '#FFFFFF',
    fontStyle: 'normal',
    backgroundColor: '#5F7ADB',
    borderRadius: 100,
    width: 300,
    alignSelf: 'center',
    marginBottom: '10%',
    padding: '2%',
  },
  desc: {
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'Open-sans-condensed-bold',
    color: '#FFFFFF',
    fontStyle: 'normal',
  },
  espc: {
    fontSize: 15,
    textAlign: 'center',
    color: '#FFFFFF',
    fontStyle: 'normal',
  },
  ima: {
    height: 200,
    width: 350,
    marginBottom: '10%',
    alignSelf: 'center',
  },
  logo: {
    height: 100,
    width: 200,
    alignSelf: 'center',
    marginBottom: '10%',
    resizeMode: 'contain',
  },
  vistaModal: {
    backgroundColor: '#000000aa',
    flex: 1,
  },
  Modal: {
    margin: '5%',
    padding: '7%',
    borderRadius: 10,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#000',
  },
});
