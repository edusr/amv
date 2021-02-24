import React from 'react';
import { Button, Text,  View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import DetalheCliente from '../../components/DetalheCliente';
import { Container } from './styles';

export default function ListaClientes({navigation}){
    return (
    <Container>
        <Text>Lista de Clientes</Text>
        <Button onPress={()=> navigation.openDrawer()} title="Abrir navegação"></Button>
        <FlatList
            keyboardShouldPersistTaps='handled'
            data={[
                {
                    codigoCliente: 1,
                    nomeCliente: 'Peixoto Atacadista',
                    cpfCnpj: '123132646549/5466'
                },
                {
                    codigoCliente: 1,
                    nomeCliente: 'Peixoto Atacadista',
                    cpfCnpj: '123132646549/5466'
                },
                {
                    codigoCliente: 1,
                    nomeCliente: 'Peixoto Atacadista',
                    cpfCnpj: '123132646549/5466'
                },
                {
                    codigoCliente: 1,
                    nomeCliente: 'Peixoto Atacadista',
                    cpfCnpj: '123132646549/5466'
                },
                {
                    codigoCliente: 1,
                    nomeCliente: 'Peixoto Atacadista',
                    cpfCnpj: '123132646549/5466'
                },
                {
                    codigoCliente: 1,
                    nomeCliente: 'Peixoto Atacadista',
                    cpfCnpj: '123132646549/5466'
                },
                {
                    codigoCliente: 1,
                    nomeCliente: 'Peixoto Atacadista',
                    cpfCnpj: '123132646549/5466'
                },
                {
                    codigoCliente: 1,
                    nomeCliente: 'Peixoto Atacadista',
                    cpfCnpj: '123132646549/5466'
                },
                {
                    codigoCliente: 1,
                    nomeCliente: 'Peixoto Atacadista',
                    cpfCnpj: '123132646549/5466'
                },
                {
                    codigoCliente: 1,
                    nomeCliente: 'Peixoto Atacadista',
                    cpfCnpj: '123132646549/5466'
                },
                {
                    codigoCliente: 1,
                    nomeCliente: 'Peixoto Atacadista',
                    cpfCnpj: '123132646549/5466'
                },
                {
                    codigoCliente: 1,
                    nomeCliente: 'Peixoto Atacadista',
                    cpfCnpj: '123132646549/5466'
                },
                {
                    codigoCliente: 1,
                    nomeCliente: 'Peixoto Atacadista',
                    cpfCnpj: '123132646549/5466'
                },

                {
                    codigoCliente: 1,
                    nomeCliente: 'Peixoto Atacadista',
                    cpfCnpj: '123132646549/5466'
                },
            ]}
            keyExtractor={item => String(item.codigoCliente)}
            renderItem = {({item}) => (<DetalheCliente data = {item}/>
                )}
        ></FlatList>
    </Container>)
}