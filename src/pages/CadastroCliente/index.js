import React,{useState} from 'react';
import { Button, Text, TextInput} from 'react-native';
import getRealm from '../../services/realm';
import { Container, Input, Submit } from './styles';


export default function CadastroCliente({ navigation }) {

    const[nomeCliente,setNomeCliente] = useState('');
    const[cpfCnpj,setCpfCnpj] = useState('');

    async function salvarCliente (cliente){


        const data = {
            codigoCliente: 0,
            nomeCliente: cliente.nomeCliente,
            cpfCnpj: cliente.cpfCnpj
        }

        try{
            const realm = await getRealm();

            const currentIdNum = realm.objects('Cliente').max('codigoCliente');

            data.codigoCliente = currentIdNum + 1;

            realm.write(() => {
                realm.create('Cliente',data);
            })

        }catch(err){
            alert('deu ruim' + err)
        }
    }

    function handleSalvarCliente (){
        const cliente = {
            id: 1,
            nomeCliente: nomeCliente,
            cpfCnpj: cpfCnpj
        }

        try{
            salvarCliente(cliente);
        }catch(err){

        }

    }

    return(<Container>

        <Text style={{textAlign:'center' }}> Cadastro Cliente</Text>
        
        <Input placeholder="Nome" autoCapitalize="none" value={nomeCliente}
                autoCorrect={false} onChangeText={setNomeCliente}/>
        
        <Input placeholder="CPF/CNPJ" autoCapitalize="none" value={cpfCnpj}
                autoCorrect={false} onChangeText={setCpfCnpj}/>
        
        <Submit onPress={()=> handleSalvarCliente() } >
            <Text style={{textAlign:'center', color:"#fff"}}> Salvar </Text>
        </Submit>

        <Button onPress={()=> navigation.openDrawer()} title="Abrir navegação"></Button>
        
    </Container>)
}