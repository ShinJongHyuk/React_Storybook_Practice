import React, { useEffect, useState } from "react";

export const useSignupHook = () => {
    const [username, setUsername] = useState('')
    const [password1, setPassword1] = useState('')
    const [password2, setPassword2] = useState('')

    const handleEmail = (e:any) => {
        setUsername(e.target.value)
    }

    const handlePassword1 = (e:any) => {
        setPassword1(e.target.value)
    }

    const handlePassword2 = (e:any) => {
        setPassword2(e.target.value)
    }
    return {username, password1, password2, handleEmail, handlePassword1, handlePassword2}
}
