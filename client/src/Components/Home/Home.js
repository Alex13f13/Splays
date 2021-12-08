import React from 'react'
import Nav from '../Nav/nav'

export default function Home(props) {
    return (
        <div>
            <Nav storeUser = {props.storeUser} loggedUser={props.loggedUser} pageTitle = {"HOME"}/>
            
        </div>
    )
}
