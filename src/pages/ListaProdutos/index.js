import React from 'react';
import { Button, Text, TextInput, View } from 'react-native';

export default function ListaProdutos({navigation}){
    return (
    <View>
        <Text>Lista de Produtos</Text>
        <Button onPress={()=> navigation.openDrawer()} title="Abrir navegação"></Button>
    </View>)
}