import React, { useState, useEffect } from 'react'
import Nav from '../Nav/Nav'
import ProfileService from '../../services/profile.service'
import './Users.css'
import User from "../Users/User/User"
import UserDetails from "../Users/User-Details/User-details"

const profileService = new ProfileService()

export default function Users(props) {

    const [users, setUsers] = useState([])
    const [userPressed, setUserPressed] = useState(false)
    const [userPressedId, setUserPressedId] = useState(undefined)

    const [animateOut, setAnimateOut] = useState(true)

    useEffect(() => {

        profileService.getAllUsers()

            .then(response => {
                const usersInfo = response.data
                setUsers(usersInfo)
            })

            .catch(err => console.log(err))

    }, [])


    const toggleUserDetails = (id) => {
        setUserPressedId(id)
        setUserPressed(!userPressed)
        setAnimateOut(!animateOut)
    }

    return (
        <div className='no-scroll'>
            <Nav storeUser={props.storeUser} loggedUser={props.loggedUser} pageTitle={"TRAVELERS"} />

            <div>

                {users.map(elm => {
                    return (

                        <div onClick={() => toggleUserDetails(elm._id)} key={elm.name} className={`user`}>
                            <User userName={elm.username} userImage={elm.image} />
                        </div>
                    )
                })
                }

            </div>

            {userPressed && <UserDetails planetChosen={userPressedId} hideDetails={toggleUserDetails} />}

        </div >
    )
}