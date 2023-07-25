'use client'
import Input from '@/components/Input'
import Button from '@/components/Button'
import { InputBox } from "../login/Login.styled"
import { InputRadioBox } from './Signup.styled'

const Signup = () => {
    return (
        <div>
            <InputBox>
                <Input type="email" placeholder="이메일"/>
            </InputBox>

            <InputBox>
                <Input type="password" placeholder="비밀번호"/>
            </InputBox>

            <InputBox>
                <Input type="password" placeholder="비밀번호 확인"/>
            </InputBox>

            <InputBox>
                <Input type="text" placeholder="이름"/>
            </InputBox>

            <InputBox>
                <Input type="date" placeholder="생년월일"/>
            </InputBox>

            <InputRadioBox>
                <div style={{display:"flex", alignItems:"center"}}><Input type="radio" name="gender" id="man"/><p>남성</p></div>
                <div style={{display:"flex", alignItems:"center"}}><Input type="radio" name="gender"/><p>여성</p></div>
            </InputRadioBox>

            <InputBox>
                <Button label="가입하기" type="submit"/>
            </InputBox>
        </div>
    )
}

export default Signup