import styled from 'styled-components/native'

export const Container = styled.View`
    background-color: #aabbcc
    flex: 1
`;

export const Input = styled.TextInput.attrs({placeHolderTextColor:'#999'})`
color: #000
background-color: #FFF
padding: 12px 15px
border-radius: 4px
color: #333
margin: 5px
`;

export const Form = styled.View`
`;

export const Submit = styled.Pressable `
background-color: #41B341
margin: 5px
padding: 12px 15px
border-radius: 4px 
`;

export const List = styled.FlatList.attrs({
   contentContainerStyle: { paddingHorizontal: 20},
   showsVerticalsScrollIndicator: false 
})`
    margin-top: 20px
`