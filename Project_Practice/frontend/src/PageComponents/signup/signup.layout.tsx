'use client'
import styled from 'styled-components'

const SignUpLayout = styled.form<any>`
    display: flex;
    border: 1px solid black;
    width: 300px;
    margin: 100px auto;
    flex-direction: column;
    align-items: center;
`
const FormListLayout = styled.div<any>`
    margin-bottom: 10px;
    border-radius: 6px;
    width: 250px;
    border: 1px solid #c6c6c6;
`

const FormItemLayout = styled.div<any>`
    display: flex;
    align-items: center;
    max-width: 100%;
    min-height: 35px;
`
export {SignUpLayout, FormListLayout, FormItemLayout}