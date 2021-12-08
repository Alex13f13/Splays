import React from 'react'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'
import AuthService from '../../../services/auth.service'

const authService = new AuthService()

const NavLinks = (props) => {
    let history = useHistory()

    const loggedUser = props.loggedUser


    const logout = () => {
        authService.logout()
            .then(response => {
                props.storeUser(null)
                history.replace("/")
            })
            .catch(err => console.log(err))
    }

    return (
        <>
            <div>
                <div></div>

                <div>
                    <Link to={`/planet-map`}>Planet map</Link>
                    <Link to={`/profile/${loggedUser._id}`}>Profile</Link>
                    <span onClick={logout}>Log out</span>
                </div>
            </div>
        </>
    )
}


export default NavLinks