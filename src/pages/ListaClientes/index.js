import React, { useEffect, useState } from 'react';
import { Button, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import DetalheCliente from '../../components/DetalheCliente';
import getRealm from '../../services/realm';
import { Container } from './styles';

export default function ListaClientes({ navigation }) {

  const [listaClientes, setListaClientes] = useState([]);

  useEffect(() => {
    async function getKind() {
      const realm = await getRealm();

      const listaX = realm.objects('Cliente');
      setListaClientes(listaX);
    }

    getKind();
  }, []);

  return (
    <Container>
      <Text>Lista de Clientes</Text>
      <Button onPress={() => navigation.openDrawer()} title="Abrir navegação"></Button>
      <FlatList
        keyboardShouldPersistTaps='handled'
        data={listaClientes}
        keyExtractor={item => String(item.codigoCliente)}
        renderItem={({ item }) => (<DetalheCliente data={item} />
        )}
      ></FlatList>
    </Container>)
}