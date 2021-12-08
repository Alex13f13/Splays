import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import AuthService from '../../services/auth.service'
import Nav from '../Nav/nav'

export default function Profile(props) {

    const { id } = useParams()


    const [user, setUser] = useState(undefined)
    const authService = new AuthService()



    useEffect (() => {

        authService.getUser(id)
            .then(response => {

                setUser(response.data)

            })
            .catch(err => console.log(err))
    }, [])

    

    return (
        user ?
        <div>
            <Nav storeUser = {props.storeUser} loggedUser={props.loggedUser} pageTitle = {"PROFILE"}/>
            <img src={user.image} alt={user.image}/>
            <h2>{user.username}</h2>
            <p>Planet {user.originPlanet}</p>
        </div>
        :
        <p>Aquí irá un spinner </p>
    )
}
