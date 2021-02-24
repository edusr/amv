import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CadastroCliente from '../../pages/CadastroCliente';
import ListaProdutos from '../../pages/ListaProdutos';
import ListaClientes from '../../pages/ListaClientes';


const Drawer = createDrawerNavigator();

export default function MyDrawer() {
  return (
    
      <Drawer.Navigator >
        <Drawer.Screen name="CadastroCliente" component={CadastroCliente} />
        <Drawer.Screen name="Produtos" component={ListaProdutos} />
        <Drawer.Screen name="ListaClientes" component={ListaClientes} />
      </Drawer.Navigator>
    
  );
}