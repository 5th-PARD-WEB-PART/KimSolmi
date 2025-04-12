import { create } from 'zustand'


type UserState = {
    name: string 
    age: number
    setName: (name: string) => void
    setAge: (age: number) => void
}

export const useUserStore = create<UserState> ((set) => ({
    name: '솔미', //디폴트 값 
    age : 21,
    setName: (name) => set({name}),
    setAge: (age) => set({age}),
}))