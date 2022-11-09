import react from 'react';
import { View} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Bienvenida from './Components/bienvenida';
import Registro from './Components/registro';
import Login from './Components/login';
import Home from './src/screens/home';
import Navigation from './src/navigation/navigation';
import Decameron from './src/screens/decameron';
import Tropico from './src/screens/tropico';
import Sevilla from './src/screens/sevilla';
import Real from './src/screens/real';
import Intercontinental from './src/screens/intercontinental';
import Argueta from './src/screens/argueta';
import Acantilados from './src/screens/acantilados';
import Verde from './src/screens/verde';
import Mamapan from './src/screens/mamapan';
import Mizata from './src/screens/mizata';
import SplashScreen from './src/screens/SplashScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = "Splash">
        <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Bienvenida" component={Bienvenida} options={{headerShown: false}} />
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
        <Stack.Screen name="Registro" component={Registro} options={{headerShown: false}} />
        <Stack.Screen name="Root" component={Navigation} options={{headerShown: false}}  />
        <Stack.Screen name="Decameron" component={Decameron} options={{headerShown: false}}  />
        <Stack.Screen name="Tropico" component={Tropico} options={{headerShown: false}}  />
        <Stack.Screen name="Sevilla" component={Sevilla} options={{headerShown: false}}  />
        <Stack.Screen name="Real" component={Real} options={{headerShown: false}}  />
        <Stack.Screen name="Argueta" component={Argueta} options={{headerShown: false}}  />
        <Stack.Screen name="Intercontinental" component={Intercontinental} options={{headerShown: false}}  />
        <Stack.Screen name="Acantilados" component={Acantilados} options={{headerShown: false}}  />
        <Stack.Screen name="Verde" component={Verde} options={{headerShown: false}}  />
        <Stack.Screen name="Mamapan" component={Mamapan} options={{headerShown: false}}  />
        <Stack.Screen name="Mizata" component={Mizata} options={{headerShown: false}}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

