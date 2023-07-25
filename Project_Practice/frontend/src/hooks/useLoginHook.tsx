import useLoginStore from "@/store/useLoginStore"
import { useState } from "react"

export const useLoginHook = () => {
    const email = useLoginStore((state:any) => state.email)
    const setEmail = useLoginStore((state:any) => state.setEmail)
    const [password, setPassword] = useState('')

    const handleEmail = (e:any) => {
        setEmail(e.target.value)
    }

    const handlePassword = (e:any) => {
        setPassword(e.target.value)
    }

    return [email, password, handleEmail, handlePassword]
}
