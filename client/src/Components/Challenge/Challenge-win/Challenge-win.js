import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import PlanetService from '../../../services/planets.service'
import Nav from '../../Nav/Nav'
import { Link } from 'react-router-dom'

const planetService = new PlanetService()

export default function ChallengeWin(props) {
    const { id: planetID } = useParams()

    const [planet, setPlanet] = useState(undefined)

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


    }, [])


    return (
        planet ?
            <div>
                <Nav storeUser={props.storeUser} loggedUser={props.loggedUser} pageTitle={"KUDOS"} />
                <img src={planet.image} alt={planet.image} />
                <h2>{planet.name}</h2>
                <p>Planet {planet.description}</p>
                <img src={planet.challenge.emblem} alt={planet.image} />

                <div>
                    <Link to={`/`}>Home</Link>
                </div>
            </div>
            :
            <p>Aquí irá un spinner </p>
    )
}
