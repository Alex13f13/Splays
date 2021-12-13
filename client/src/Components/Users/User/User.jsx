import React from 'react'
import './User.css'

export default function User(props) {
    return (
        <div>
            <p>{props.userName}</p>
            <div>
                <img src={props.userImage} alt={props.userImage} />
            </div>
        </div>
    )
}