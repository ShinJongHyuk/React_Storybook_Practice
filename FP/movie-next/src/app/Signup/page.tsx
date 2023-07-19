'use client'
import { useSignupHook } from "@/hooks/useSignupHook"
import loginStore from "@/store/loginStore"
import axios from "axios"
import { useEffect, useState } from "react"
export default function SignUp() {
    const {username, password1, password2, handleEmail, handlePassword1, handlePassword2} = useSignupHook()
    const loginState = loginStore((state: any) => state.login)
    const setToken = loginStore((state: any) => state.setToken)
    const token = loginStore((state: any) => state.token)
    useEffect(() => {
        console.log(token)
    },[token])

    const onsubmit = (e:any) => {
        e.preventDefault()
        axios({
            method: 'post',
            url : 'http://127.0.0.1:8000/accounts/signup/',
            data: {
                username, password1, password2
            }
        })
        .then(res => {
            console.log(res)
            setToken(res.data.key)
        })
        .catch(err => console.log(err))
        loginState()
    }

    return (
        <div>
            <form action="" onSubmit={onsubmit}>
                <input type="text" name="email" placeholder="email" onChange={handleEmail}/>
                <input type="password" name="password1" placeholder="password" onChange={handlePassword1}/>
                <input type="password" name="password2" placeholder="password2" onChange={handlePassword2}/>
                <input type="submit" value="signup"/>
            </form>
        </div>
    )
}