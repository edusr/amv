import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/pages/Login';
import Home from './src/pages/Home';
import { View, Image } from 'react-native';

const Stack = createStackNavigator();

export default function App() {

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
              <View>
                <Image
                  style={{width:50,height:50}}
                  source={require('./src/assets/images/logo.png')}
                />
                <View />
              </View>
            },
          }}
          />
      </Stack.Navigator>
    </NavigationContainer>
    
  )
}
