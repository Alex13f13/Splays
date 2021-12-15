import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import './Align.css'


export default function Align(props) {
    let history = useHistory()

    const [fistButtonCounter, setFistButtonCounter] = useState(0)
    const [secondButtonCounter, setSecondButtonCounter] = useState(2)
    const [thirdButtonCounter, setThirdButtonCounter] = useState(1)
    const [fourthButtonCounter, setFourthButtonCounter] = useState(2)


    const positions = [0, 82.5, 165]


    const handlePressFist = () => {
        setFistButtonCounter(fistButtonCounter + 1)
        setSecondButtonCounter(secondButtonCounter + 1)
    }

    const handlePressSecond = () => {
        setFistButtonCounter(fistButtonCounter + 1)
        setSecondButtonCounter(secondButtonCounter + 1)
        setFourthButtonCounter(fourthButtonCounter + 1)
    }

    const handlePressThird = () => {
        setThirdButtonCounter(thirdButtonCounter + 1)
        setSecondButtonCounter(secondButtonCounter + 1)
    }

    const handlePressForth = () => {
        setFourthButtonCounter(fourthButtonCounter + 1)
        setFistButtonCounter(fistButtonCounter + 1)
    }

    useEffect(() => {

        if ((fistButtonCounter === secondButtonCounter) && (secondButtonCounter === thirdButtonCounter) && (thirdButtonCounter === fourthButtonCounter) && (fourthButtonCounter === fistButtonCounter)) {
            history.replace(props.winRoute)
        }

        if (fistButtonCounter > 2) {
            setFistButtonCounter(0)
        }
        else if (secondButtonCounter > 2) {
            setSecondButtonCounter(0)
        }
        else if (thirdButtonCounter > 2) {
            setThirdButtonCounter(0)
        }
        else if (fourthButtonCounter > 2) {
            setFourthButtonCounter(0)
        }

    }, [fistButtonCounter, secondButtonCounter, thirdButtonCounter, fourthButtonCounter, history, props])

    return (
        <div className="aling-game-main-container">
            <div className="align-game-container-buttons">
                <div style={{ marginLeft: positions[fistButtonCounter] + "px" }}>
                    <button className="align-game-button" onClick={handlePressFist} />
                </div>

                <div style={{ marginLeft: positions[secondButtonCounter] + "px" }}>
                    <button className="align-game-button" onClick={handlePressSecond} />
                </div>

                <div style={{ marginLeft: positions[thirdButtonCounter] + "px" }}>
                    <button className="align-game-button" onClick={handlePressThird} />
                </div>

                <div style={{ marginLeft: positions[fourthButtonCounter] + "px" }}>
                    <button className="align-game-button" onClick={handlePressForth} />
                </div>
            </div>
        </div>
    )
}