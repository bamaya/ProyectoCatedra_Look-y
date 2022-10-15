import react from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text,  TouchableOpacity,View} from 'react-native';
import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Zona = props =>{
  const NavigateToDecameron=props=>{
    props.navigation.navigate('Decameron');
  }
  return(
      <View style={styles.container}>
        <Text style={styles.title1}>ZONAS A ESCOGER</Text>
        <TouchableOpacity style={styles.btn2} onPress={() => NavigateToDecameron(props) }>
          <Text style={styles.title1} >Decameron</Text>
        </TouchableOpacity>

        <StatusBar style="auto" />
      </View>
  );
}
export default Zona;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#26292B',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bki: {
    position: 'absolute',
    height: 845,
    width: 400,
  }, 
  title1: {
    fontSize: 36,
    textAlign: 'center',
    fontFamily: 'Open-sans-condensed-bold',
    color: '#FFFFFF',
    fontStyle: 'normal',
  },
  btn2: {
    position: 'absolute',
    width: 170,
    height: 51,
    left: 111.5,
    top: 786,
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
    backgroundColor: '#5F7ADB',
    marginTop:-200,
    alignItems:'center',
  },
});
