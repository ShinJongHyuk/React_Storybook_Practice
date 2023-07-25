import styled, { css } from 'styled-components'

const CardBody = styled.div.attrs<any>((props) => ({}))`
    ${(props) => {
        const width = props.width || "100px"
        const height = props.height || "150px"
        return css`
            width: ${width};
            height: ${height};
            border: 1px solid black;
            border-radius: 5px;
            position: relative;
            padding-top: 30px;
            margin: 20px;
        `
    }}
`
const CardContent = styled.div.attrs<any>((props) => ({}))`
    ${(props) => {
        const color = props.color || "white"
        return css`
            width: 100%;
            height: 80%;
            position: absolute;
            top: 0px;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: ${color};
        `
    }}
    
`

const CardImg = styled.img.attrs<any>((props) => ({}))`
    ${(props) => {
        return css`
            max-width: 100%;
            max-height: 100%;
        `
    }}
    
`

const CardTitle = styled.div.attrs<any>((props) => ({}))`
    width: 100%;
    height: 20%;
    border: 1px solid black;
    border-radius: 5px;
    position: absolute;
    bottom: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: lightgray;
`

const CardSale = styled.div.attrs<any>((props) => ({}))`
    display: flex;
    justify-content: center;
    position: absolute;
    right: -10px;
    top: 0px;
    transform: rotate(30deg);
    border: 2px solid black;
    width: 50px;
    height: 25px;
    background-color: red;
`
export {CardBody, CardTitle, CardImg, CardSale, CardContent }