import React, { useEffect, useState } from 'react'
import PlanetService from '../../../services/planets.service'
import { Link } from 'react-router-dom'
import './Planet-details.css'

const planetService = new PlanetService()

export default function PlanetDetails(props) {


    const [planet, setPlanet] = useState(undefined)


    useEffect(() => {

        planetService.getOnePlanet(props.planetChosen)
            .then(response => {
                setPlanet(response.data)

            })
            .catch(err => console.log(err))
    }, [props.planetChosen])



    return (
        <>
            {planet &&
                <div className='planet-details-main-container'>

                    <div className='planet-details-elm-container '>
                        <div className='planet-details-close-bar' onClick={props.hideDetails}></div>
                        <p className='planet-details-title'>{planet.name}</p>

                        <div className='planet-description-container'>
                            <p className='planet-details-description'>{planet.description}</p>
                        </div>

                    </div>

                    <Link className='planet-detail-go-planet-btn' to={`/planet-map/${planet._id}/${planet.challenge.name}/challenge`}>Go to this planet</Link>

                    <div className='planet-details-img-container'>
                        <img className='planet-details-img' src={planet.image} alt={planet.image} />
                    </div>
                </div>}
        </>

    )
}