import { Link } from "react-router-dom";
import Nav from '../Nav/Nav'
import ProfileService from '../../services/profile.service'
import React, { useState, useEffect } from 'react'


const profileService = new ProfileService()

export default function Home(props) {

    const [user, setUser] = useState(undefined)

    useEffect(() => {

        getUser()

    }, [])

    const getUser = () => {
        profileService.getUser(props.loggedUser._id)
            .then(response => {
                setUser(response.data)
            })
            .catch(err => console.log(err))
    }

    return (
        user ?
            <div>
                <Nav storeUser={props.storeUser} loggedUser={props.loggedUser} pageTitle={"HOME"} />

                <img src={user.ship} alt="ship img" />
                <Link to="/planet-map">Viajar!</Link>

                <Link to="/allUsers">Otros Viajeros</Link>

            </div>
            :
            <p>Aquí irá un spinner </p>
    )
}
