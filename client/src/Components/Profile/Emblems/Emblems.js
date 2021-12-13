import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import ProfileService from '../../../services/profile.service'
import Nav from '../../Nav/Nav'
import { Link } from 'react-router-dom'

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
    }, [id])


    return (
        userPopulate ?
            <div>
                <Nav storeUser={props.storeUser} loggedUser={props.loggedUser} pageTitle={"MY EMBLEMS"} />
                <Link className='no-decoration' to={`/profile/${id}`}>
                    <div className='profile-bottom-links-container'>
                        <img className='profile-purple-arrow' src="https://res.cloudinary.com/dwxuz6cft/image/upload/v1639044961/splays_app/splays_icons/purple_arrow_xm6ccv.png" alt="purple arrow" />
                        <p className='profile-bottom-links'>Return to profile</p>
                    </div>
                </Link>

                {
                    userPopulate.planet.map((elm) => {
                        return (
                            <img key={elm.name} src={elm.challenge.emblem} alt={elm.name} />
                        )
                    })
                }

                <p style={{ color: 'white' }}>DEBERIA SALIR ENCIMA DE ESTO</p>
            </div>
            :
            <p>Aquí irá un spinner </p>
    )
}
