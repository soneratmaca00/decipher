import * as React from 'react';
import { View, Text, Button } from 'react-native';
import Logo from './proje/decipherlogo';

import ViewPager from './proje/ViewPager';
import Dashboard from './proje/Dashboard';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Signup from './proje/Signup';
import Login from './proje/Login';
import Deposit from './proje/Deposit';


const Stack = createStackNavigator();


function App() {
  
  
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ViewPager"  >
        <Stack.Screen name="ViewPager" component={ViewPager}
        options={{ headerShown: false }}          
        />
        <Stack.Screen name="Login" component={Login}
        options={{ headerShown: false }} />
        <Stack.Screen name="Dashboard" component={Dashboard}
        options={{ headerShown: false }} />
        <Stack.Screen name="Signup" component={Signup} 
        options={{ headerShown: false }}  />
        <Stack.Screen name="Deposit" component={Deposit} 
        options={{ headerShown: false }}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;