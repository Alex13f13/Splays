import React, { useState, useEffect } from 'react'
import Nav from '../Nav/Nav'
import Planet from './Planet/Planet'
import PlanetDetails from './Details/Planet-details'
import PlanetService from '../../services/planets.service'
import './Planet-map.css'

const planetService = new PlanetService()

export default function PlanetMap(props) {

    const [planets, setPlanets] = useState([])
    const [planetPressed, setPlanetPressed] = useState(false)
    const [planetPressedId, setPlanetPressedId] = useState(undefined)

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
    }


    return (
        <div>
            <Nav storeUser={props.storeUser} loggedUser={props.loggedUser} pageTitle={"PLANET MAP"} />

            <div className='planets-organizer'>
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
