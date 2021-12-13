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

    const [animateOut, setAnimateOut] = useState(true)

    useEffect(() => {

        planetService.getAllPlanets()

            .then(response => {
                const planetsInfo = response.data
                setPlanets(planetsInfo)
            })

            .catch(err => console.log(err))

    }, [])

    const elementsToShow = document.querySelectorAll(".animation-on-scroll")

    const handleScroll = (e) => {
        elementsToShow.forEach(element => {

            if (element.offsetLeft > window.innerWidth) {
                console.log("no estoy en el viewport", element)
            } else {
                element.classList.add("charlyesunpesado")
                console.log("estoy en el viewport", element)
            }
        })
    }

    // const loop = () => {
    //     elementsToShow.forEach(element => console.log(element.off))
    // }

    const togglePlanetDetails = (id) => {
        setPlanetPressedId(id)
        setPlanetPressed(!planetPressed)
        setAnimateOut(!animateOut)
    }

    return (
        <div className='no-scroll'>
            <Nav storeUser={props.storeUser} loggedUser={props.loggedUser} pageTitle={"PLANET MAP"} />

            <div className='scrollable-div' onScroll={handleScroll}>
                <img className='map-background' src='https://res.cloudinary.com/dwxuz6cft/image/upload/v1639352242/splays_app/background_images/planet_map_bg_main_grid_vwanxu.jpg' alt='background img' />

                {planets.map(elm => {
                    return (

                        <div onClick={() => togglePlanetDetails(elm._id)} key={elm.name} className={`planet-${elm.name} animation-on-scroll`}>
                            <Planet planetName={elm.name} planetImage={elm.image}></Planet>
                        </div>
                    )
                })
                }

                {planets.map(elm => {
                    return (

                        <div onClick={() => togglePlanetDetails(elm._id)} key={elm.name} className={`planet-${elm.name}`}>
                            <Planet planetName={elm.name} planetImage={elm.image}></Planet>
                        </div>
                    )
                })
                }

                <svg id="constelation-01" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1055.27 1437.21">
                    <polyline id="line-constelation-01" className="cls-1" points="7.5 1429.71 397.77 654.27 918.73 392.98 1047.77 7.5" />
                </svg>

                <svg id="constelation-02" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1426.29 485.97">
                    <polyline id="line-constelation-02" className="cls-1" points="7.5 242.77 1175.24 7.5 1418.79 478.47" />
                </svg>

                <svg id="constelation-03" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1423.06 1423.06">
                    <polyline id="main-line-constelation-03" className="cls-1" points="7.5 1415.57 251.05 473.63 251.05 244.6" />
                    <line id="secondary-line-constelation-03" className="cls-1" x1="251.05" y1="473.63" x2="1415.56" y2="7.5" />
                </svg>

            </div>



            {planetPressed && <PlanetDetails planetChosen={planetPressedId} hideDetails={togglePlanetDetails} />}



        </div>
    )
}
