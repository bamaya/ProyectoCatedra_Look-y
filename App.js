import react from 'react';
import { View} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Bienvenida from './Components/bienvenida';
import Registro from './Components/registro';
import Login from './Components/login';
import Home from './src/screens/home';
import Navigation from './src/navigation/navigation';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Bienvenida" component={Bienvenida} options={{headerShown: false}} />
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
        <Stack.Screen name="Registro" component={Registro} options={{headerShown: false}} />
        <Stack.Screen name="Root" component={Navigation} options={{headerShown: false}}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

