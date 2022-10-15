import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'
import { User } from '../types'

export const useSystem = defineStore('system', () => {
    const logged = ref<boolean>(false)
    const token = ref<string>('')
    const user = reactive<User>({
        email: '',
        name: ''
    })

    function login() {
        logged.value = true
    }
    function logout() {
        logged.value = false
    }
    function setToken(value: string) {
        token.value = value
    }
    function setUser({ email, name }: User) {
        user.email = email
        user.name = name
    }
    function resetUser() {
        user.email = ''
        user.name = ''
    }

    return {
        logged, login, logout,
        token, setToken,
        setUser, resetUser
    }
})