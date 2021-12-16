import { Link } from "react-router-dom";
import Nav from '../Nav/Nav'
import ProfileService from '../../services/profile.service'
import React, { useState, useEffect } from 'react'
import './Home.css'
import Users from '../Users/Users.jsx'


const profileService = new ProfileService()

export default function Home(props) {

    const [user, setUser] = useState(undefined)
    const [travellers, setTravellers] = useState(false)

    useEffect(() => {

        getUser()

    }, [])


    const handleClick = () => {
        setTravellers(!travellers)
    }



    const getUser = () => {
        profileService.getUser(props.loggedUser._id)
            .then(response => {
                setUser(response.data)
            })
            .catch(err => console.log(err))
    }

    return (
        user ?
            <div>

                <Nav storeUser={props.storeUser} loggedUser={props.loggedUser} pageTitle={travellers ? "TRAVELLERS" : "HOME"} />

                {travellers && <Users travellers={handleClick} />}

                <div className='home-main-container'>

                    <div className='win-background'>
                        <img className='home-img-space' src='https://res.cloudinary.com/dwxuz6cft/image/upload/v1639497068/splays_app/background_images/win_background_ewycbu.jpg' alt='stars background' />
                    </div>

                    <div className="home-images-continer">
                        <img className="home-ship" src={user.ship} alt="ship img" />

                        <div className="home-planet-container">
                            <img className="home-planet-light" src='https://res.cloudinary.com/dwxuz6cft/image/upload/v1638951622/splays_app/splays_planets/chromion_planet_uv6fjg.png' alt="ship img" />
                            <img className="home-planet" src='https://res.cloudinary.com/dwxuz6cft/image/upload/v1638951622/splays_app/splays_planets/chromion_planet_uv6fjg.png' alt="ship img" />
                        </div>
                    </div>
                    <Link className="home-trip-btn" to="/planet-map">New space trip</Link>

                    {/* <Link className="home-travellers-btn" to="/allUsers">Other travellers</Link> */}
                    <p className="home-travellers-btn" onClick={handleClick} >Other travellers</p>
                </div>


            </div>
            :
            <div className='spinner-container'>
                <svg id="splays-spinner" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 282.74 264.05">

                    <g id="main-circle">
                        <circle className="cls-1" cx="150.72" cy="132.02" r="48.06" />
                    </g>
                    <path id="first-circle" className="cls-1" d="M352.55,250a12.28,12.28,0,0,0-11.62-12.26,91.75,91.75,0,1,0,0,24.52A12.28,12.28,0,0,0,352.55,250ZM250,338.75a88.75,88.75,0,1,1,87.93-100.82,12.29,12.29,0,0,0,0,24.14A88.89,88.89,0,0,1,250,338.75Z" transform="translate(-99.28 -117.98)" />
                    <path id="second-circle" className="cls-1" d="M250,118c-65.93,0-120.73,48.58-130.48,111.83h0a20.19,20.19,0,1,0,0,40.38h0C129.27,333.44,184.07,382,250,382c72.8,0,132-59.22,132-132S322.8,118,250,118Zm0,261c-64.36,0-117.87-47.37-127.48-109.08a20.17,20.17,0,0,0,0-39.88C132.13,168.35,185.64,121,250,121a129,129,0,0,1,0,258Z" transform="translate(-99.28 -117.98)" />
                </svg>
            </div>
    )
}
