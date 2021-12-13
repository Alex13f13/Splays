import React, { useState, useEffect } from 'react'
import Nav from '../Nav/Nav'
import ProfileService from '../../services/profile.service'
import './Users.css'
import UserCard from "./User/User-card"
import { Link } from 'react-router-dom'


const profileService = new ProfileService()

export default function Users(props) {

    const [users, setUsers] = useState([])

    useEffect(() => {

        profileService.getAllUsers()

            .then(response => {
                const usersInfo = response.data
                setUsers(usersInfo)
            })

            .catch(err => console.log(err))

    }, [])


    return (
        users ?
            <div className='no-scroll'>
                <Nav storeUser={props.storeUser} loggedUser={props.loggedUser} pageTitle={"TRAVELERS"} />

                <Link className='no-decoration' to={`/`}>
                    <div className='emblems-link-container'>
                        <img className='emblems-purple-arrow' src="https://res.cloudinary.com/dwxuz6cft/image/upload/v1639044961/splays_app/splays_icons/purple_arrow_xm6ccv.png" alt="purple arrow" />
                        <p className='emblems-link'>Return to profile</p>
                    </div>
                </Link>

                <div className='users-main-container'>
                    <div className='users-list'>

                        {users.map(elm => {
                            return (

                                <div key={elm._id} className='users-scrollable-card'>
                                    <UserCard userID={elm._id} />
                                </div>
                            )
                        })
                        }

                    </div>
                </div>
            </div >
            :
            <p>Aquí irá un spinner </p>
    )
}