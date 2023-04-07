import {useState} from 'react'


export const LoggedIn = () => {

const [isLoggedIn, setIsLoggedIn] = useState(false)


 const login = () => {
    setIsLoggedIn(true)
 }
 const logout = () => {
    setIsLoggedIn(false)
 }



    return (
        <>
        <button onClick={login}>login</button>
        <button onClick={logout}>logout</button>
        <h4>person is: {isLoggedIn ? 'logged in' : 'logged out'}</h4>
        </>
    )
}
