import useSignupStore from "@/store/useSignupStore";

export const useSignupHook = () => {
    const user = useSignupStore((state:any) => state.user)
    const setUser = useSignupStore((state:any) => state.setUser)
    const handleUser = (e:any) => {
        const name = e.target.name
        const value = e.target.value
        console.log(name,value)
        setUser(e)
    }

    return [user, handleUser]
}
