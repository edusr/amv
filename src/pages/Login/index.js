import React, { useState } from 'react';
import { Button, TextInput } from 'react-native';

import {Container,Form,Input} from './styles'

export default function Login({navigation}){
    
    const[userName,setUserName] = useState('');
    const[password,setPassword] = useState('');


    return (
    <Container>
        <Form>


            <Input 
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Usuário"
                value={userName}
                onChange={setUserName}/>
            
            <Input 
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Senha"
                secureTextEntry={true}
                value={password}
                onChange={setPassword}/>
            <Button onPress={()=>{navigation.navigate('Home')}} title="Login"/>
        </Form>
    </Container>)
}