import React, { useState, useEffect } from 'react'
import ProfileService from '../../../services/profile.service'
import "./User-card.css"

const profileService = new ProfileService()

export default function User(props) {

    const [userPopulate, setUserPopulate] = useState(undefined)

    useEffect(() => {

        profileService.getEmblems(props.userID)
            .then(response => {

                setUserPopulate(response.data)

            })
            .catch(err => console.log(err))
    }, [props.userID])

    return (
        userPopulate ?
            <>
                <div className='user-card-profile-img-container'>
                    <div className='user-image-crop'>
                        <img className='user-card-profile-img' src={userPopulate.image} alt={userPopulate.image} />
                    </div>
                </div>
                <div className='user-card-text-container'>
                    <div className='user-card-username-container'>
                        <p className='user-card-username'>{userPopulate.username}</p>
                    </div>
                    <p className='user-card-origin-planet'>{userPopulate.originPlanet}</p>
                </div>
                <div className='user-emblems-container'>
                    <img className='emblems-purple-arrow arrow-margin-right' src="https://res.cloudinary.com/dwxuz6cft/image/upload/v1639044961/splays_app/splays_icons/purple_arrow_xm6ccv.png" alt="arrow" />
                    {userPopulate.planet.map((elm, idx) => {
                        return (

                            <img style={{ animation: `huhu 1s ${idx * 0.2}s forwards` }} className='user-emblems-list-elm' key={elm.name} src={elm.challenge.emblem} alt={elm.name} />

                        )
                    })
                    }
                </div>

            </>
            :
            <p>Aquí irá un spinner </p>
    )
}