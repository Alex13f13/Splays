import React from 'react'

export default function Planet(props) {
    return (
        <div className={props.className}>
            <h4>{props.planetName}</h4>
            <img src={props.planetImage} alt={props.planetImage}/>          
        </div>
    )
}
