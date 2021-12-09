import React, { useState } from 'react'
import NavLinks from './Links/Nav-links'
import './Nav.css'


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
                    <p className="nav-page-title">{props.pageTitle}</p>
                </div>

                <div>
                    <img className="burger-menu-icon" onClick={toggleIsPressed} src={"https://res.cloudinary.com/dwxuz6cft/image/upload/v1639031234/splays_app/splays_icons/burger_menu_tcqs8p.png"} alt=""/>
                </div>
            </div>
            <div className="nav-line-container">
                <div className="nav-line"></div>
            </div>
        </div>

            {isPressed && <NavLinks storeUser = {props.storeUser} loggedUser={props.loggedUser} toggleIsPressed={toggleIsPressed}></NavLinks> }

        </>
    )
}
  
  
  export default Nav