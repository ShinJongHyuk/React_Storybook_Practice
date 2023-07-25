'use client'
import { LoginLayout } from "./login.layout";
import Button from "@/components/Button";
import Input from "@/components/Input"
import { useLoginHook } from "@/hooks/useLoginHook";
import useLoginStore from "@/store/useLoginStore";
import { useRouter } from "next/navigation";

const Login = () => {
    const [email,password, handleEmail, handlePassword] = useLoginHook()
    
    const login = useLoginStore((state:any) => state.login)
    const router = useRouter()
    const handleSubmit = (e:any) => {
        e.preventDefault()
        console.log(email)
        console.log(password)
        login()
        router.push("/")
    }
    return (
        <div>
            <LoginLayout onSubmit={handleSubmit}>
                <h2 className="form-title">NAVER</h2>
                <div style={{width:"250px"}}><Input type="text" label="Email" placeholder="Email" onChange={handleEmail} use="naver"/></div>
                <div style={{width:"250px"}}><Input type="password" label="Email" placeholder="password" onChange={handlePassword} use="naver"/></div>
                <div style={{width:"250px"}}><Button label="Sign in" type="submit" use="naver"/></div>
            </LoginLayout>
        </div>
    )
}

export default Login