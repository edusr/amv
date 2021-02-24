import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/pages/Login';
import Home from './src/pages/Home';


const Stack = createStackNavigator();

export default function App() {
  
  return (

    <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login}  />
        <Stack.Screen name="Home" component={Home} options={{ title: 'Home' }}/>
      </Stack.Navigator>
    </NavigationContainer>
    
  )
}
