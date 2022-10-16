import React from "react";
import { View, StyleSheet, Text,Image,Video } from "react-native";
const SplashScreen = ({ navigation }) => {
    //Cuando pasen 3 segundos se navega a la pantalla Menu
    setTimeout(() => {
        //Elimina splash screen del stack
        navigation.replace('Bienvenida');
    }, 3000);
    return (
        <View style={styles.container}>
        <Image
                        style={styles.bki2}
                        source={require('../img/Logo_look-y.png')} />
           <Image
                        style={styles.bki}
                        source={require('../img/load.gif')} />
                        
          </View>
    )
};
export default SplashScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    bki: {
        
        height:50,
        width: 50,
        marginTop:400
      }, 
      bki2: {
        position: 'absolute',
        height:860,
        width: 400,
      }, 
});