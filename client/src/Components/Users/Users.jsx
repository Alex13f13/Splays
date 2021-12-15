import React, { useState, useEffect } from 'react'
import Nav from '../Nav/Nav'
import ProfileService from '../../services/profile.service'
import './Users.css'
import UserCard from "./User/User-card"
import { Link } from 'react-router-dom'


const profileService = new ProfileService()

export default function Users(props) {

    const [users, setUsers] = useState([])
    const [exit, setExit] = useState(false)

    const handleClick = () => {
        setExit(!exit)
        setTimeout(function(){props.travellers()}, 1500);
    }


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
            <div className={exit ? 'no-scroll users-general-container-exit' : 'no-scroll users-general-container'}>
                {/* <Nav storeUser={props.storeUser} loggedUser={props.loggedUser} pageTitle={"TRAVELERS"} /> */}

                <div className={exit ? "no-decoration opacity-out" :'no-decoration users-back-home'} onClick={handleClick}>
                    <div className='emblems-link-container'>
                        <img className='emblems-purple-arrow' src="https://res.cloudinary.com/dwxuz6cft/image/upload/v1639044961/splays_app/splays_icons/purple_arrow_xm6ccv.png" alt="purple arrow" />
                        <p className='emblems-link'>Return to home</p>
                    </div>
                </div>

                <div className={exit ? 'users-main-container opacity-out' : 'users-main-container'}>
                    <div className='users-list'>

                        {users.map((elm, idx) => {
                            return (
                                
                                <div key={elm._id} style={{ animation: `huhu 1s ${idx * 0.2}s forwards` }} className='users-scrollable-card'>
                                    <UserCard userID={elm._id} />
                                </div>
                            )
                        })
                        }

                    </div>
                </div>
            </div>
            :
            <div className='spinner-container'>
                <svg id="splays-spinner" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 282.74 264.05">
                    
                    <g id="main-circle">
                        <circle class="cls-1" cx="150.72" cy="132.02" r="48.06"/>
                    </g>
                        <path id="first-circle" class="cls-1" d="M352.55,250a12.28,12.28,0,0,0-11.62-12.26,91.75,91.75,0,1,0,0,24.52A12.28,12.28,0,0,0,352.55,250ZM250,338.75a88.75,88.75,0,1,1,87.93-100.82,12.29,12.29,0,0,0,0,24.14A88.89,88.89,0,0,1,250,338.75Z" transform="translate(-99.28 -117.98)"/>
                        <path id="second-circle" class="cls-1" d="M250,118c-65.93,0-120.73,48.58-130.48,111.83h0a20.19,20.19,0,1,0,0,40.38h0C129.27,333.44,184.07,382,250,382c72.8,0,132-59.22,132-132S322.8,118,250,118Zm0,261c-64.36,0-117.87-47.37-127.48-109.08a20.17,20.17,0,0,0,0-39.88C132.13,168.35,185.64,121,250,121a129,129,0,0,1,0,258Z" transform="translate(-99.28 -117.98)"/>
                </svg>
            </div>
    )
}