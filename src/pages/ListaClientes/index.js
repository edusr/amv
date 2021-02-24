import React from 'react';
import { Button, Text,  View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import DetalheCliente from '../../components/DetalheCliente';
import { Container } from './styles';

export function getListaClientes() {
    let clientes = [];
    for (let i=1;i<=30;i++) {
        clientes.push({
            codigoCliente: i,
            nomeCliente: 'Peixoto Atacadista ' + i,
            cpfCnpj: '123132646549/546' + i
        });
    }
    return clientes;
}

export default function ListaClientes({navigation}){
    return (
    <Container>
        <Text>Lista de Clientes</Text>
        <Button onPress={()=> navigation.openDrawer()} title="Abrir navegação"></Button>
        <FlatList
            keyboardShouldPersistTaps='handled'
            data={getListaClientes()}
            keyExtractor={item => String(item.codigoCliente)}
            renderItem = {({item}) => (<DetalheCliente data = {item}/>
                )}
        ></FlatList>
    </Container>)
}