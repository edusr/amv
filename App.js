import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/pages/Login';
import Home from './src/pages/Home';
import IconHeaderLeft from './src/pages/Home/IconHeaderLeft';

const Stack = createStackNavigator();

export default function App({navigation}) {

  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen 
          name="Home" 
          component={Home}
          options={{
            title: 'Home',
            headerLeft: props => {
              return <IconHeaderLeft navigation={navigation} />
            }
          }}
          />
      </Stack.Navigator>
    </NavigationContainer>
    
  )
}