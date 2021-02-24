import styled from 'styled-components/native'

export const Container = styled.View`
    background-color: #EEECEB
    flex: 1
    justify-content: center
    
`;

export const Title = styled.Text`
    text-align: center
    font-weight: bold
    font-size: 25px
`;

export const Form = styled.View`

`;

export const Input = styled.TextInput.attrs({placeHolderTextColor:'#999'})`
background-color: #FFF
padding: 12px 15px
border-radius: 4px
color: #333
margin: 5px
`;