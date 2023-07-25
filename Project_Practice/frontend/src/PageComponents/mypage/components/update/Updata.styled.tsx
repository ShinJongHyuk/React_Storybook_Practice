import styled, {css} from 'styled-components'


const MyInformationItem = styled.div.attrs<any>((props) => ({}))`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100px;
`
const ProfileLayout = styled.div.attrs<any>((props) => ({}))`
    width: 100%;
    border-top: 1px solid black;
    display: flex;
    justify-content: center;
`
const MyInformationUpdate = styled.div.attrs<any>((props) => ({}))`
    flex: 8;
    
`
const MypageButtonLayout = styled.div.attrs<any>((props) => ({}))`
    display: flex;
    justify-content: space-between;
`

const MyPageContent = styled.div.attrs<any>((props) => ({}))`
    display: flex;
    margin: 20px 300px;
    flex-direction: column;
`

export {MyInformationItem, ProfileLayout, MyInformationUpdate, MypageButtonLayout, MyPageContent}