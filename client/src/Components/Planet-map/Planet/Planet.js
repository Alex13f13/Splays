import React from 'react'

export default function Planet(props) {
    return (
        <div className={props.className}>
            <p>{props.planetName}</p>
            <div>
                <img src={props.planetImage} alt={props.planetImage}/>          
                <img className='light' src={props.planetImage} alt={props.planetImage}/>
            </div>          
        </div>
    )
}
