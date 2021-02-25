import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { View } from 'react-native';

export default function IconHeaderLeft({navigation}) {
  
  return (
    <View style={{flex: 1, justifyContent: 'center', padding: 20}}>
      <Icon size={24} name="navicon" onPress={() => navigation.openDrawer()} />
    </View>
  );
}