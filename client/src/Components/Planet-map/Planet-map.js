import React, { useState, useEffect } from 'react'
import Nav from '../Nav/Nav'
import Planet from './Planet/planet'
import PlanetDetails from './Details/planet-details'
import PlanetService from '../../services/planets.service'


export default function PlanetMap(props) {

    const [planets, setPlanets] = useState([])
    const [planetPressed, setPlanetPressed] = useState(false)
    const [planetPressedId, setPlanetPressedId] = useState(undefined)
    const planetService = new PlanetService()

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
            <Nav storeUser = {props.storeUser} loggedUser={props.loggedUser} pageTitle = {"PLANET MAP"}/>

            {planets.map(elm => {
            return (
                
                <div onClick={() => togglePlanetDetails(elm._id)} key={elm.name}>
                    <Planet className={`planet-${elm.name}`} planetName = {elm.name} planetImage = {elm.image}></Planet>
                </div>
                )
            })
            }

            {planetPressed && <PlanetDetails planetChosen = {planetPressedId} hideDetails = {togglePlanetDetails}/>}
            


        </div>
    )
}
