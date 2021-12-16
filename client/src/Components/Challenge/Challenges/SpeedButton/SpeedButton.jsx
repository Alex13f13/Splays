import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import './SpeedButton.css'


export default function SpeedButton(props) {

    let history = useHistory()

    const [points, setPoints] = useState(0)
    const [time, setTime] = useState(60)

    let takeRandom = Math.round(Math.random() * 3);


    const correctButton = () => {
        setPoints(points + 1)

        takeRandom = Math.round(Math.random() * 3)

        document.getElementById("correctSpeedButton").style.marginTop = getRandom() + "px";

        document.querySelector(".wrongSpeedButton").style.marginTop = getRandom() + "px";

    }

    const getRandom = () => {
        let randomNum = Math.round(Math.random() * 700);
        return randomNum;
    }

    const wrongButton = () => {
        setPoints(0)

        takeRandom = 0

        document.getElementById("correctSpeedButton").style.marginTop = "0px";

        document.querySelector(".wrongSpeedButton").style.marginTop = "0px";

    }

    const restarTime = () => {
        setTime(time - 1)
        if (time === 0) {
            setTime(60)
            setPoints(0)
        }
    }

    setTimeout(() => { restarTime() }, 2000);

    useEffect(() => {
        return () => {
        }
    }, [time])



    useEffect(() => {

        points >= 8 && history.replace(props.winRoute)

    }, [points, history, props])


    let buttonCorrect = <div id="correctSpeedButton">
        <button className="speed-button-btn" onClick={correctButton} />
    </div>

    let buttonWrong = <div className="wrongSpeedButton">
        <button className="speed-button-wrong-btn" onClick={wrongButton} />
    </div>


    let randomButtons = [buttonWrong, buttonWrong, buttonWrong, buttonWrong]

    randomButtons.splice(takeRandom, 1, buttonCorrect)

    return (
        <>
            {randomButtons}
        </>
    )
}