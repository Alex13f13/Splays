import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import ProfileService from '../../../services/profile.service'
import Nav from '../../Nav/Nav'
import { Link } from 'react-router-dom'
import './Emblems.css'

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
                    <div className='emblems-link-container'>
                        <img className='emblems-purple-arrow' src="https://res.cloudinary.com/dwxuz6cft/image/upload/v1639044961/splays_app/splays_icons/purple_arrow_xm6ccv.png" alt="purple arrow" />
                        <p className='emblems-link'>Return to profile</p>
                    </div>
                </Link>

                <div className='emblems-main-container'>
                    <div className='emblems-container'>
                        <div className='each-emblem-div'>
                            {userPopulate.planet.map((elm, idx) => {
                                return (
                                    
                                        <img style={{animation: `huhu 1s ${idx*0.2}s forwards`}} className='emblems-list-elm' key={elm.name} src={elm.challenge.emblem} alt={elm.name} />
                                    
                                )
                            })
                            }
                        </div>
                    </div>
                </div>
            </div>
            :
            <p>Aquí irá un spinner </p>
    )
}
