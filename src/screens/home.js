import react from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';
import * as Font from 'expo-font';


const Home = props => {
  return (
      <View style={styles.container}>
      <Text style={styles.title1}>HOME</Text>
      </View>
  );
}

export default Home;

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
});
