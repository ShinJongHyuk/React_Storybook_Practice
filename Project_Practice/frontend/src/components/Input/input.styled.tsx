import styled, {css} from 'styled-components'


const StyledInput = styled.input.attrs<any>((props) => ({
    value : props.value || undefined,
    placeholder: props.placeholder || null
}))`
${(props) => {
    const use = props.use || "basic"
    const bgcolor = props.bgcolor || "black"
    const color = props.color || "black"
    const UseStyles: any = {
        basic: `
        cursor: pointer;
        border: solid 1px black;
        width: 100%;
        margin-left: 5px;
        margin-right: 5px;
        padding: 5px;
        font-size: xx-small;
        background-color: ${bgcolor};
        color: ${color};
        `,
        naver: `
        cursor: pointer;
        border: solid 1px black;
        width: 100%;
        margin-left: 5px;
        margin-right: 5px;
        padding: 5px;
        font-size: xx-small;
        background-color: white;
        color: ${color};
        border-color: #dadada;
        `,

        myPage: `
            cursor: pointer;
            background-color: darkgray;
            height: 55%
        `,

        myPagebirth: `
            cursor: pointer;
            background-color: darkgray;
            height: 100%
        `,
    } 
    return css `
        ${UseStyles[use]};
    `
}}
`
export {StyledInput}