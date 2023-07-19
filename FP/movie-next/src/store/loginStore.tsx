import {create} from 'zustand'

const loginStore = create((set) => ({
    token: null,
    setToken : (data:any) => set(() => ({token:data})),
    isLogin : false,
    login: () => set(() => ({islogin:true})),
    logout: () => set(() => ({islogin:false}))

}))

export default loginStore