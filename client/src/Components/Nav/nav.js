import React, { useState } from 'react'
import NavLinks from './Links/Nav-links'
import Earth from '../../images/profile/earth_planet.png'


const Nav = (props) => {
    
    const [isPressed, setIsPressed] = useState(false)

    const toggleIsPressed = () => {
        setIsPressed(!isPressed)
    }

    return (
        <>
            <div>
                <h2>{props.pageTitle}</h2>
            </div>

            <div>
                <img onClick={toggleIsPressed} src={Earth} alt=""/>
            </div>

            {isPressed && <NavLinks storeUser = {props.storeUser} loggedUser={props.loggedUser}></NavLinks> }

        </>
    )
}
  
  
  export default Nav