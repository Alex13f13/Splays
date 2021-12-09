import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import ProfileService from '../../services/profile.service'
import Nav from '../Nav/Nav'
import { Link } from 'react-router-dom'
import './Profile.css'

const profileService = new ProfileService()

export default function Profile(props) {

    const { id } = useParams()

    const [user, setUser] = useState(undefined)


    useEffect(() => {

        profileService.getUser(id)
            .then(response => {

                setUser(response.data)

            })
            .catch(err => console.log(err))
    }, [])


    return (
        user ?
            <div className='profile-background'>
                <Nav storeUser={props.storeUser} loggedUser={props.loggedUser} pageTitle={"PROFILE"} />


                <div className='profile-main-container'>

                    <div className='gradient-outline'>
                        <img className='profile-image' src={user.image} alt={user.image} />
                    </div>

                    <p className='profile-username'>{user.username}</p>
                    <p className="profile-origin-planet">Planet {user.originPlanet}</p>

                    <div className='profile-bottom-links-main-container'>
                        <div className='profile-line-divisor'></div>

                            <Link  className='no-decoration' to={`/profile/${id}/emblems`}>
                                <div className='profile-bottom-links-container'>
                                    <p className='profile-bottom-links'>My emblems</p>
                                    <img className='profile-purple-arrow' src="https://res.cloudinary.com/dwxuz6cft/image/upload/v1639044961/splays_app/splays_icons/purple_arrow_xm6ccv.png" alt="purple arrow" />
                                </div>
                            </Link>

                        <div className='profile-line-divisor'></div>

                            <Link className='no-decoration' to={`/profile/${id}/ship`}>
                                <div className='profile-bottom-links-container'>
                                    <p className='profile-bottom-links'> My ship</p>
                                    <img className='profile-purple-arrow' src="https://res.cloudinary.com/dwxuz6cft/image/upload/v1639044961/splays_app/splays_icons/purple_arrow_xm6ccv.png" alt="purple arrow" />
                                </div>
                            </Link>

                        <div className='profile-line-divisor'></div>
                    </div>


                    <p className='profile-exit-btn'>Edit profile</p>
                </div>
            </div>
            :
            <p>Aquí irá un spinner </p>
    )
}
