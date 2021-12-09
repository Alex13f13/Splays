import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import ProfileService from '../../../services/profile.service'
import Nav from '../../Nav/Nav'

const profileService = new ProfileService()

export default function Emblems(props) {
    const { id } = useParams()

    const [userPopulate, setUserPopulate] = useState(undefined)


    useEffect(() => {

        profileService.getEmblems(id)
            .then(response => {

                setUserPopulate(response.data)
                console.log(response.data)

            })
            .catch(err => console.log(err))
    }, [])


    return (
        userPopulate ?
            <div>
                <Nav storeUser={props.storeUser} loggedUser={props.loggedUser} pageTitle={"MY EMBLEMS"} />
                {userPopulate.planet.map(elm => {
                    return (

                        <img key={elm.name} src={elm.challenge.emblem} alt={elm.name} />
                    )
                })
                }

            </div>
            :
            <p>Aquí irá un spinner </p>
    )
}
