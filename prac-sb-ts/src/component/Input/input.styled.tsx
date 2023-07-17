import styled, {css} from 'styled-components'
import { InputStyles } from './input.type'

const StyledInput = styled.input.attrs<InputStyles>((props) => ({
    placeholder: props.placeholder,
    name: props.name || "Basic Input",
    disabled: props.use === "disable" ? true : false
}))`
    ${(props) => {
        const use = props.use || "basic"

        const UseStyles:any = {
            basic: `
                border: solid 1.3px black;
                &:focus {
                    outline: none;
                    border: solid 2px black
                }
            `,

            warn: `
                border: solid 1.3px #ecff3c
                &:focus {
                    outline: none;
                    border: solid 2px #ecff3c
                }
            `,

            success: `
                border: solid 1.3px #33ef04;
                &:focus {
                    outline: none;
                    border: solid 2px #33ef04
                }
            `,
            
        }
    }}
`