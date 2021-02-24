import styled from 'styled-components/native'

export const Container = styled.View`
    background-color: #aabbcc
    flex: 1
`;

export const Title = styled.Text`
    text-align: center
    font-weight: bold
    font-size: 25px
`;

export const Form = styled.View`
`;

export const Input = styled.TextInput.attrs({placeHolderTextColor:'#999'})`
flex: 1
color: #000
background-color: #FFF
padding: 12px 15px
border-radius: 4px
color: #333
margin: 5px
`;