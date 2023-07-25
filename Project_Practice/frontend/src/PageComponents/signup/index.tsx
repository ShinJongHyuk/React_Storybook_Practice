'use client'
import { SignUpLayout, FormListLayout,FormItemLayout } from "./signup.layout"
import Input from '@/components/Input'
import Button from '@/components/Button'
import { useSignupHook } from "@/hooks/useSignupHook"
import { useRouter } from "next/navigation"
const SignUp = () => {
    const router = useRouter()
    const [user, handleUser] = useSignupHook()

    const onsubmit = (e:any) => {
        e.preventDefault()
        console.log(user)
    }
    
    return (
        <div>
            <SignUpLayout onSubmit={onsubmit}>

                <h2 className="form-title" style={{marginBottom: "10px"}}>SignUp</h2>

                <FormListLayout>
                    <FormItemLayout><Input type="text" name="Id" use="naver" placeholder="아이디" onChange={handleUser}/></FormItemLayout>
                    <FormItemLayout><Input type="password" name="password" use="naver" placeholder="비밀번호" onChange={handleUser}/></FormItemLayout>
                    <FormItemLayout><Input type="password" name="password2" use="naver" placeholder="비밀번호 확인" onChange={handleUser}/></FormItemLayout>
                    <FormItemLayout><Input type="email" name="email" use="naver" placeholder="이메일"onChange={handleUser}/></FormItemLayout>
                </FormListLayout>

                <FormListLayout>
                    <FormItemLayout><Input name="gender" use="naver" placeholder="성별" onChange={handleUser}/></FormItemLayout>
                    <FormItemLayout><Input name="name" type="text" use="naver" placeholder="이름" onChange={handleUser}/></FormItemLayout>
                    <FormItemLayout><Input name="phoneNumber" type="text" use="naver" placeholder="휴대폰 번호" onChange={handleUser}/></FormItemLayout>
                    <FormItemLayout><Input name="birth" type="date" use="naver" placeholder="생년월일" onChange={handleUser}/></FormItemLayout>
                </FormListLayout>

                <FormItemLayout><Button use="naver" label="회원가입" type="submit"/></FormItemLayout>

            </SignUpLayout>
        </div>
    )
}

export default SignUp