import styled, {css} from 'styled-components'

const StyledButton = styled.button.attrs<any>((props) => ({
}))`
    ${(props) => {
        return css`
            width: 100%;
            height: 100%;
            background-color: #FFF129;
            color: black;
        `
    }}
`

export {StyledButton}