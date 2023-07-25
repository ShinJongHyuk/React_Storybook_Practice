import styled from 'styled-components'

const MyInformation = styled.div.attrs<any>((props) => ({}))`
    display: flex;
    background-color: lightgray;
`
const Profile = styled.div.attrs<any>((props) => ({}))`
    flex: 2;
    height: 100%;
`

const MyName = styled.div.attrs<any>((props) => ({}))`
    padding-top: 40px;
    flex: 3;
    height: 100%;
`
const MyAnswer = styled.div.attrs<any>((props) => ({}))`
    padding-top: 40px;
    flex: 5;
    padding-left: 20px;
    height: 100%;
`

export { MyAnswer, MyInformation, MyName, Profile }