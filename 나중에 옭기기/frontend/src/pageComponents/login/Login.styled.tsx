import exp from 'constants'
import styled, {css} from 'styled-components'

const InputBox = styled.div.attrs<any>((props) => ({}))`
    ${(props) => {
        return css`
            width: 486px;
            height: 48px;
            margin: 10px;
        `
    }}
`

export {InputBox}