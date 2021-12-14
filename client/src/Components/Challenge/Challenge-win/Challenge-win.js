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
            <>
                <Nav storeUser={props.storeUser} loggedUser={props.loggedUser} pageTitle={"KUDOS"} />
                
                <div className='animation: arc 3s infinite;'>
                    <img className='ship-for-animation' src={user.ship} alt='ship' />
                </div>

                <div className='win-main-container'>

                    <div className='win-background'>
                        <img className='img-space' src='https://res.cloudinary.com/dwxuz6cft/image/upload/v1639497068/splays_app/background_images/win_background_ewycbu.jpg' alt ='stars background'/>
                    </div>
                    
                    <div className='win-glass-container'>
                        <img className='win-planet-icon' src={planet.image} alt={planet.image} />
                        <div className='win-text-container'>
                            <p className='win-congrats-text'>You completed the challenge!</p>
                        </div>
                    </div>

                    <div className='win-planet-container'>
                        <img className='win-planet-light' src={planet.challenge.emblem} alt={planet.image} />
                        <img className='win-planet' src={planet.challenge.emblem} alt={planet.image} />
                    </div>

                    
                    <Link className='emblem-win-btn' to={`/`}>Get my emblem!</Link>
                    
                </div>
            </>
            :
            <p>Aquí irá un spinner </p>
    )
}
