import React, { useState } from 'react'
import { useParams } from 'react-router'
import AuthService from '../../services/auth.service'

export default function Profile() {

    const { id } = useParams()

    console.log(id)

    const [user, setUser] = useState(undefined)
    const authService = new AuthService()



    const takeUserProfile = () => {

        authService.getUser(id)
            .then(response => {

                setUser(response.data)

            })
            .catch(err => console.log(err))
    }

    takeUserProfile()

    return (
        <div>
            <h1>Profile</h1>
            <h2>{user.username}</h2>
        </div>
    )
}
