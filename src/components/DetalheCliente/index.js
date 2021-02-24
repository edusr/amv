
import React from 'react'
import { Text } from 'react-native'

import {Container} from './styles'

export default function DetalheCliente ( { data } ){

    return(
    <Container>
        <Text>{data.nomeCliente}</Text>
    </Container>)
}