import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import './Asteroids.css'


export default function Asteroids(props) {

    let history = useHistory()

    const [points, setPoints] = useState(0)

    const getRandom = () => {
        let randomNum = Math.round(Math.random() * 700);
        return randomNum;
    }

    const deleteAsteroid = () => {
        setPoints(points + 1)

        console.log(points)
        console.log(randomButtons)

        points === 3 ? randomButtons = [asteroidButton(getRandom()), asteroidButton(getRandom()), asteroidButton(getRandom()), asteroidButton(getRandom())] : document.getElementById("asteroid").remove()

    }

    useEffect(() => {

        points >= 8 && history.replace(props.winRoute)

    }, [points, history, props])

    let asteroidButton = (getRandom) => {
        return <div style={{ marginTop: getRandom + "px" }} id="asteroid" className="asteroidButton" >
            <button className="asteroids-btn" onClick={deleteAsteroid} />
        </div >
    }

    let randomButtons = [asteroidButton(getRandom()), asteroidButton(getRandom()), asteroidButton(getRandom()), asteroidButton(getRandom())]
    //let resetRandomButtons = [asteroidButton(getRandom()), asteroidButton(getRandom()), asteroidButton(getRandom()), asteroidButton(getRandom())]

    return (
        <>
            {randomButtons}
        </>
    )
}