import React from 'react'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'
import AuthService from '../../../services/auth.service'
import './Nav-links.css'

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
            <div className="background-glass">
                <div className="burger-menu-main-elm-container">
                    <div className="close-nav-icon-container">
                        <img  onClick={props.toggleIsPressed} className="close-nav-icon" src="https://res.cloudinary.com/dwxuz6cft/image/upload/v1639036610/splays_app/splays_icons/close_to3qig.png" alt="close icon" />
                    </div>

                    <div className="burger-menu-open-txt-container">
                        <Link className="burger-menu-open-text" to={`/planet-map`}>Planet map</Link>
                        <div className="nav-open-line"></div>
                        <Link className="burger-menu-open-text" to={`/profile/${loggedUser._id}`}>Profile</Link>
                        <div className="nav-open-line"></div>
                        <Link className="burger-menu-open-text" to={`/`}>Home</Link>
                        <div className="nav-open-line"></div>
                        <span className="burger-menu-open-logout" onClick={logout}>Log out</span>
                    </div>
                </div>
            </div>
        </>
    )
}


export default NavLinks
