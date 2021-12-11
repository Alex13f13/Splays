import React, { useState, useEffect } from 'react'
import Nav from '../Nav/Nav'
import Planet from './Planet/Planet'
import PlanetDetails from './Details/Planet-details'
import PlanetService from '../../services/planets.service'
import './Planet-map.css'
import { Link } from 'react-router-dom'

const planetService = new PlanetService()

export default function PlanetMap(props) {

    const [planets, setPlanets] = useState([])
    const [planetPressed, setPlanetPressed] = useState(false)
    const [planetPressedId, setPlanetPressedId] = useState(undefined)

    const [animateOut, setAnimateOut] = useState(true)

    useEffect(() => {

        planetService.getAllPlanets()

            .then(response => {
                const planetsInfo = response.data
                setPlanets(planetsInfo)
            })

            .catch(err => console.log(err))

    }, [])


    const togglePlanetDetails = (id) => {
        setPlanetPressedId(id)
        setPlanetPressed(!planetPressed)
        setAnimateOut(!animateOut)
    }

    return (
        <div className='no-scroll'>
            <Nav storeUser={props.storeUser} loggedUser={props.loggedUser} pageTitle={"PLANET MAP"} />

            <div className='scrollable-div'>

                <img className='map-background' src='https://res.cloudinary.com/dwxuz6cft/image/upload/v1638996923/splays_app/background_images/splays_landing_background_wide_u3xsxj.jpg' />

                
                    {planets.map(elm => {
                        return (

                            <div onClick={() => togglePlanetDetails(elm._id)} key={elm.name} className={`planet-${elm.name}`}>
                                <Planet planetName={elm.name} planetImage={elm.image}></Planet>
                            </div>
                        )
                    })
                    }
                
            </div>

            {planetPressed && <PlanetDetails planetChosen={planetPressedId} hideDetails={togglePlanetDetails} />}



        </div>
    )
}
