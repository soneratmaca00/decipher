import * as React from 'react';

import ViewPager from './src/ViewPager';
import Dashboard from './src/Dashboard';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Signup from './src/Signup';
import Login from './src/Login';
import Deposit from './src/Deposit';
import Preview from './src/Preview'; 
import Settings from './src/Settings';
import DepositSuccess from './src/DepositSuccess';
import Earn1 from './src/Earn1'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import rootReducer from './src/reducer/rootReducer'


const Stack = createStackNavigator();
const store = createStore(rootReducer);

function App() {

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="ViewPager"  >
          <Stack.Screen name="ViewPager" component={ViewPager}
          options={{ headerShown: false }} />
          <Stack.Screen name="Login" component={Login}
          options={{ headerShown: false }} />
          <Stack.Screen name="Dashboard" component={Dashboard}
          options={{ headerShown: false }} />
          <Stack.Screen name="Signup" component={Signup} 
          options={{ headerShown: false }}  />
          <Stack.Screen name="Deposit" component={Deposit} 
          options={{ headerShown: false }}  />
          <Stack.Screen name="Preview" component={Preview} 
          options={{ headerShown: false }}  />
          <Stack.Screen name="Settings" component={Settings} 
          options={{ headerShown: false }}  />
          <Stack.Screen name="DepositSuccess" component={DepositSuccess} 
          options={{ headerShown: false }}  />
          <Stack.Screen name="Earn1" component={Earn1} 
          options={{ headerShown: false }}  />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;