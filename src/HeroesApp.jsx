import React, { useReducer } from 'react'
import { AppRouter } from './routers/AppRouter'
import { authContext } from './auth/AuthContext'
import { authReducer } from './auth/authReducer'
import { useEffect } from 'react'
const init = () => {
    return JSON.parse(localStorage.getItem('user')) || { logged: false }
}
export const HeroesApp = () => {
    const [user, dispatch] = useReducer(authReducer, {}, init)

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user))
    }, [user])

    return (
        <authContext.Provider value={{ user, dispatch }}>
            <AppRouter />
        </authContext.Provider>
    )
}
