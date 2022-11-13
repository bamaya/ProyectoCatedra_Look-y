import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/home';
import Zona from '../screens/zonaStack';
import Ofertas from '../screens/ofertas';
import Mis_Reservas from '../screens/mis_reservas';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
      <Tab.Navigator initialRouteName='Home'
      screenOptions= {({route}) => ({
            tabBarIcon: ({ focused, color, size}) => {
                let iconName
                let rn = route.name;

                if(rn == "Home"){
                    iconName = focused ? 'home-variant' : 'home-variant-outline';
                }
                else if(rn == "Buscar Hotel"){
                    iconName = focused ? 'map-search' : 'map-search-outline';
                }
                else if(rn == "Ofertas"){
                    iconName = focused ? 'account-cash' : 'account-cash-outline';
                }
                else if(rn == "Mis Reservas"){
                    iconName = focused ? 'book-account' : 'book-account-outline';
                }

                return <MaterialCommunityIcons name={iconName} size={size} color={color}/>
            },
            tabBarActiveTintColor: "#A2B2EE",
            tabBarActiveBackgroundColor: "#5F7ADB",
        })}>
        <Tab.Screen name="Home" component={Home} options={{headerShown: false}}/>
        <Tab.Screen name="Buscar Hotel" component={Zona} options={{title: 'Zonas',}}/>
        <Tab.Screen name="Ofertas" component={Ofertas} options={{headerShown: false}}/>
        <Tab.Screen name="Mis Reservas" component={Mis_Reservas} options={{headerShown: false}}/>
      </Tab.Navigator>
  );
}

