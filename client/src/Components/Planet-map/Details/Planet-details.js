import React, { useEffect, useState } from 'react'
import PlanetService from '../../../services/planets.service'
import { Link } from 'react-router-dom'
import './Planet-details.css'

const planetService = new PlanetService()

export default function PlanetDetails(props) {


    const [planet, setPlanet] = useState(undefined)
    const [animateOut, setAnimateOut] = useState(false)


    useEffect(() => {

        planetService.getOnePlanet(props.planetChosen)
            .then(response => {
                setPlanet(response.data)

            })
            .catch(err => console.log(err))
    }, [props.planetChosen])

    const animateOutFunc = () => {
        setAnimateOut(!animateOut)
        setTimeout(function(){props.hideDetails()}, 700);
        
        
    }

    return (
        <>
            {planet &&
                <div className={animateOut ?'planet-details-main-container planet-details-animate-out' : 'planet-details-main-container' }>

                    <div className='planet-details-elm-container '>
                        <div className='planet-details-close-bar' onClick={animateOutFunc}></div>
                        <p className='planet-details-title'>{planet.name}</p>

                        <div className='planet-description-container'>
                            <p className='planet-details-description'>{planet.description}</p>
                        </div>

                    </div>

                    <Link className='planet-detail-go-planet-btn' to={`/planet-map/${planet._id}/${planet.challenge.name}/challenge`}>Go to this planet</Link>

                    <div className='planet-details-img-container'>
                        <img className={`planet-details-img ${planet.name}-details`} src={planet.image} alt={planet.image} />
                    </div>
                </div>}
        </>

    )
}
