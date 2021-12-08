import React, { useState, useEffect } from 'react'
import Nav from '../Nav/nav'
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
                console.log(response)
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
            return (<Planet key={elm.name} onClick={() => togglePlanetDetails(elm._id)} planetName = {elm.name} planetImage = {elm.image}></Planet>)
            })
            }

            <PlanetDetails planetChosen = {planetPressedId}>{planetPressedId}</PlanetDetails>
            


        </div>
    )
}
