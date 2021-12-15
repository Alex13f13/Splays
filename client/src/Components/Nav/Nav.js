import React, { useState } from 'react'
import NavLinks from './Links/Nav-links'
import './Nav.css'
import { Link } from 'react-router-dom'



const Nav = (props) => {

    const [isPressed, setIsPressed] = useState(false)

    const toggleIsPressed = () => {
        setIsPressed(!isPressed)
    }

    return (
        <>
            <div className="main-nav-container">
                <div className="nav-elm-container">
                    <div>
                        <Link className='no-decoration' to={`/`}><p className="nav-page-title">{props.pageTitle}</p></Link>
                    </div>

                    <div>
                        <img className="burger-menu-icon" onClick={toggleIsPressed} src={isPressed ? "https://res.cloudinary.com/dwxuz6cft/image/upload/v1639533723/splays_app/splays_icons/close-burger-menu_vb2s6i.png" : "https://res.cloudinary.com/dwxuz6cft/image/upload/v1639031234/splays_app/splays_icons/burger_menu_tcqs8p.png"} alt="" />
                    </div>
                </div>
                <div className="nav-line-container">
                    <div className="nav-line"></div>
                </div>
            </div>

            {isPressed && <NavLinks storeUser={props.storeUser} loggedUser={props.loggedUser} toggleIsPressed={toggleIsPressed}></NavLinks>}

        </>
    )
}


export default Nav
