import styled, {css} from 'styled-components'

const MyPageMain = styled.div.attrs<any>((props) => ({}))`
    display: flex;
    /* height: 100vh; */
`

const SideBar = styled.div.attrs<any>((props) => ({}))`
    display: flex;
    flex: 1.5;
    height: 100%;
    flex-direction: column;
    padding: 20px 0px 0px 0px;
`
const SideBarItem = styled.div.attrs<any>((props) => ({}))`
    ${(props) => {
        let color = "black"
        if (props.pagestate === props.name) {
            color = "blue"
        }
    return css`
        margin: 15px;
        font-weight: 1000;
        font-size: xx-large;
        cursor: pointer;
        color: ${color};
        &:hover {
            color: blue;
    }
    `
    }}
    
`

const MainBar = styled.div.attrs<any>((props) => ({}))`
    display: flex;
    flex-direction: column;
    flex: 8;
    border-left: 1px solid black;
`

const MyAnswerList = styled.div.attrs<any>((props) => ({}))`
    /* height: 100vh;
    width: 84vw; */
    padding: 100px;
    position: relative;
`

const MyAnswer = styled.div.attrs<any>((props) => ({}))`
    border: 1px solid black;
    background-color: lightskyblue;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    align-content: center;
    display: flex;
`

const MyAnswerTitle = styled.h1.attrs<any>((props) => ({}))`
    position: absolute;
    left: 50px;
    top: 30px;

`
export { MyPageMain, SideBar, SideBarItem, MainBar, MyAnswerList, MyAnswer, MyAnswerTitle}