import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import PlanetService from '../../../services/planets.service'
import Nav from '../../Nav/Nav'
import { Link } from 'react-router-dom'
import './Challenge-win.css'
import UserService from '../../../services/profile.service'

const planetService = new PlanetService()
const userService = new UserService()

export default function ChallengeWin(props) {
    const { id: planetID } = useParams()

    const [planet, setPlanet] = useState(undefined)
    const [user, setUser] = useState(undefined)

    console.log(planetID)
    console.log(props.loggedUser._id)

    useEffect(() => {

        planetService.putPlanetEmblem(planetID, props.loggedUser._id)
            .then(response => { console.log(response.data) })
            .catch(err => console.log(err))

        planetService.getOnePlanet(planetID)
            .then(response => {

                setPlanet(response.data)

            })
            .catch(err => console.log(err))
        
        userService.getUser(props.loggedUser._id)
            .then(response => {setUser(response.data)})
            .catch(err => {console.log(err)})

    }, [])


    return (
        planet && user ?
            <div className="win-container">
            
                <Nav storeUser={props.storeUser} loggedUser={props.loggedUser} pageTitle={"KUDOS"} />
                
                <div className='div-for-animation'>
                    <img className='ship-for-animation' src={user.ship} alt='ship' />
                </div>
               

                <div className='win-main-container'>

                    <div className='win-background'>
                        <img className='img-space' src='https://res.cloudinary.com/dwxuz6cft/image/upload/v1639497068/splays_app/background_images/win_background_ewycbu.jpg' alt ='stars background'/>
                    </div>
                    
                    <div className='win-glass-container'>
                        <img className='win-planet-icon' src={planet.challenge.emblem} alt={planet.image} />
                        <div className='win-text-container'>
                            <p className='win-congrats-text'>You completed the challenge!</p>
                        </div>
                    </div>

                    <div className='win-planet-container'>
                        <img className='win-planet-light' src={planet.image} alt={planet.image} />
                        <img className='win-planet' src={planet.image} alt={planet.image} />
                    </div>

                    
                    <Link className='emblem-win-btn' to={`/`}>Get my emblem!</Link>
                    
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
