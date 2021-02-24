import React from 'react';
import { Button, TextInput } from 'react-native';

import {Container,Form,Input,Title} from './styles'

export default function Longin({navigation}){
    return (
    <Container>
        <Form>
            <Input 
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Usuário"/>
            
            <Input 
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Senha"/>
            <Button onPress={()=>{navigation.navigate('Home')}} title="Login"/>
        </Form>
    </Container>)
}