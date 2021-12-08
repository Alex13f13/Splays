import React, {useEffect, useState} from 'react'
import PlanetService from '../../../services/planets.service'
import { Link } from 'react-router-dom'

const planetService = new PlanetService()

export default function PlanetDetails (props) {


    const [planet, setPlanet] = useState(undefined)



    useEffect (() => {

        planetService.getOnePlanet(props.planetChosen)
            .then(response => {
                setPlanet(response.data)

            })
            .catch(err => console.log(err))
    }, [props.id])

    

    return (
        <>
        {planet &&
        <div>
            <span onClick = {props.hideDetails}>close</span>
            <p>{planet.name}</p>
            <p>{planet.description}</p>
            <Link to={`/planet-map/${planet.challenge.name}/challenge`}>Go to this planet</Link>
            <img src={planet.image} alt={planet.image}/>
        </div>}
        </>
        
    )
}