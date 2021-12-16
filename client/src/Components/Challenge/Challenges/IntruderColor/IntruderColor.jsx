import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import './IntruderColor.css'


export default function IntruderColor(props) {

    let history = useHistory()
    let takeRandom = Math.round(Math.random() * 25);
    let correctPositionRandom = Math.round(Math.random() * 15);

    const [result, setResult] = useState(0)

    useEffect(() => {

        result >= 16 && history.replace(props.winRoute)

    }, [result, history, props])



    const correctButton = () => {
        setResult(result + 1)
        correctPositionRandom = Math.round(Math.random() * 15);
    }


    const wrongButton = () => {
        if (result > 0) { setResult(result - 1) }
    }



    //#region rounds

    let intruderBtn = <button className={`intruder-${takeRandom}`} onClick={wrongButton} />
    let correctBtn = <button className={`correct-${takeRandom}`} onClick={correctButton} />


    let roundArr = [
        intruderBtn,
        intruderBtn,
        intruderBtn,
        intruderBtn,
        intruderBtn,
        intruderBtn,
        intruderBtn,
        intruderBtn,
        intruderBtn,
        intruderBtn,
        intruderBtn,
        intruderBtn,
        intruderBtn,
        intruderBtn,
        intruderBtn,
        intruderBtn,
        intruderBtn,
        intruderBtn,
        intruderBtn,
        intruderBtn,
        intruderBtn,
        intruderBtn,
        intruderBtn,
        intruderBtn,
    ]

    roundArr.splice(correctPositionRandom, 1, correctBtn)

    return (
        <>
            <div className="intruder-container">
                <p className="intruder-points">{result} / 16</p>
                <div className="intruder-container">
                    {roundArr}
                </div>
            </div>
        </>
    )
}