import {create} from 'zustand'
import {persist, createJSONStorage} from 'zustand/middleware'
const useSignupStore = create((set) => ({
    user : {
        Id : null,
        password: null,
        password2 : null,
        gender: null,
        email: null,
        name: null,
        phoneNumber: null,
        birth: null,
    },

    setUser : (data:any) => set((state:any) => ({
        user : {
            ...state.user,
            [data.target.name] : data.target.value
        }
    })),

    setUpdateUser : (data:any) => set((state:any) => ({
        user : data
    }))
}))

export default useSignupStore


// import { create } from 'zustand';
// import { persist, createJSONStorage } from 'zustand/middleware';

// const useSignupStore = create(
//   persist(
//     (set) => ({
//       user: {
//         Id: null,
//         password: null,
//         password2: null,
//         gender: null,
//         email: null,
//         name: null,
//         phoneNumber: null,
//         birth: null,
//       },
//       setUser: (data:any) =>
//         set((state:any) => ({
//           user: {
//             ...state.user,
//             [data.target.name]: data.target.value,
//           },
//         })),
//     }),
//     {
//       name: 'user-storage',
//       storage: createJSONStorage(() => sessionStorage),
//     }
//   )
// );

// export default useSignupStore;