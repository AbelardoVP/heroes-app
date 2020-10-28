import React, { useContext } from 'react'
import { authContext } from '../../auth/AuthContext'
import { types } from '../../types/types'

export const LoginScreen = ({ history }) => {

    const { dispatch } = useContext(authContext)
    const handleLogin = () => {

        const lastPath = localStorage.getItem('lastPath') || '/'

        dispatch({
            type: types.login,
            payload: { name: 'abelardo' }
        })
        history.push(lastPath)
    }
    return (
        <div className="container mt-5">
            <h1>LoginScreen</h1>
            <hr />
            <button
                className="btn btn-primary"
                onClick={handleLogin}
            >
                Login
            </button>
        </div>
    )
}
