import React from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import AuthService from '../../../services/auth.service'


const NavLinks = (props) => {
    const authService = new AuthService()
    const params = useParams()

    const loggedUser = props.loggedUser


    const logout = () => {
        authService.logout()
          .then(response => props.storeUser(null))
          .catch(err => console.log(err))
    }
  
    return (
        <>
            <div>
                <div></div>

                <div>
                    <Link to={`/planet-map`}>Planet map</Link>
                    <Link to={`/profile/${loggedUser._id}`}>Profile</Link>
                    <Link onClick={logout} to={`/planet-map`}>Log out</Link>
                </div>
            </div>
        </>
    )
}
  
  
  export default NavLinks