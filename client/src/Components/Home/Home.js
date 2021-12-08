import React from 'react'
import { Link } from "react-router-dom";
import Nav from '../Nav/Nav'

export default function Home(props) {
    return (
        <div>

            <Nav storeUser={props.storeUser} loggedUser={props.loggedUser} pageTitle={"HOME"} />
            <Link to="/planet-map">Viajar!</Link>

        </div>
    )
}
