'use client'

import loginStore from "@/store/loginStore"
import axios from "axios"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function Login () {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const token = loginStore((state:any) => state.token)
    const setToken = loginStore((state:any) => state.setToken)
    const loginState = loginStore((state:any) => state.login)
    const router = useRouter()

    const handleUsername = (e:any) => {
        setUsername(e.target.value)
    }
    const handlePassword = (e:any) => {
        setPassword(e.target.value)
    }

    const Login = (e:any) => {
        e.preventDefault()
        axios({
            method: 'post',
            url: 'http://127.0.0.1:8000/accounts/login/',
            data : {
                username, password
            }
        })
        .then(res => {
            setToken(res.data.key)
            loginState()
            console.log('login 완료')
            router.push('/movie')

        })
        .catch(err => console.log(err))
    }

    return (
        <div>
            <form action="" onSubmit={Login}>
                <input type="text" name="username" placeholder="username" onChange={handleUsername}/>
                <input type="password" name="username" placeholder="username" onChange={handlePassword}/>
                <input type="submit" value="로그인" />
            </form>
        </div>
    )
}