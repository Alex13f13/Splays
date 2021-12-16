import React from 'react'
import './Planet.css'

export default function Planet(props) {
    return (
        <div className={props.className}>
            <p>{props.planetName}</p>
            <div className='planet-planet-map-container'>
                <img className={`light-${props.planetName}`} src={props.planetImage} alt={props.planetImage}/>
                <img src={props.planetImage} alt={props.planetImage}/>          
            </div>          
        </div>
    )
}
