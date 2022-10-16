import React from "react";
import { View, StyleSheet, Text } from "react-native";
const SplashScreen = ({ navigation }) => {
    //Cuando pasen 3 segundos se navega a la pantalla Menu
    setTimeout(() => {
        //Elimina splash screen del stack
        navigation.replace('Login');
    }, 3000);
    return (
        <View style={styles.container}>
            <Text >Splash Screen</Text>
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
    }
});