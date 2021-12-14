import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import './ChangeSameColor.css'


export default function PressFiveTimes(props) {
    let history = useHistory()

    const [purpleCounter, setPurpleCounter] = useState(0)
    const [blueCounter, setBlueCounter] = useState(2)
    const [greenCounter, setGreenCounter] = useState(3)
    const [coralCounter, setCoralCounter] = useState(5)


    const handlePressPurple = () => {
        
        switch (purpleCounter) {

            case 0:
                setPurpleCounter(purpleCounter +1)
                console.log(purpleCounter)
            break;

            case 1:
                setPurpleCounter(purpleCounter +1)
                console.log(purpleCounter)
            break;

            case 2:
                setPurpleCounter(purpleCounter +1)
                console.log(purpleCounter)
            break;

            case 3:
                setPurpleCounter(purpleCounter +1)
                console.log(purpleCounter)
            break;

            case 4:
                setPurpleCounter(purpleCounter +1)
                console.log(purpleCounter)
            break;

            case 5:
                setPurpleCounter(0)
                console.log(purpleCounter)
            break;

            default:
                return null
        }
    }

    const handlePressBlue = () => {
        
        switch (blueCounter) {

            case 0:
                setBlueCounter(blueCounter +1)
                console.log('blue', blueCounter)
            break;

            case 1:
                setBlueCounter(blueCounter +1)
                console.log('blue', blueCounter)
            break;

            case 2:
                setBlueCounter(blueCounter +1)
                console.log('blue', blueCounter)
            break;

            case 3:
                setBlueCounter(blueCounter +1)
                console.log('blue', blueCounter)
            break;

            case 4:
                setBlueCounter(blueCounter +1)
                console.log('blue', blueCounter)
            break;

            case 5:
                setBlueCounter(0)
                console.log('blue', blueCounter)
            break;

            default:
                return null
        }
    }

    const handlePressGreen = () => {
        
        switch (greenCounter) {

            case 0:
                setGreenCounter(greenCounter +1)
                console.log('green', greenCounter)
            break;

            case 1:
                setGreenCounter(greenCounter +1)
                console.log('green', greenCounter)
            break;

            case 2:
                setGreenCounter(greenCounter +1)
                console.log('green', greenCounter)
            break;

            case 3:
                setGreenCounter(greenCounter +1)
                console.log('green', greenCounter)
            break;

            case 4:
                setGreenCounter(greenCounter +1)
                console.log('green', greenCounter)
            break;

            case 5:
                setGreenCounter(0)
                console.log('green', greenCounter)
            break;

            default:
                return null
        }
    }

    const handlePressCoral = () => {
        
        switch (coralCounter) {

            case 0:
                setCoralCounter(coralCounter +1)
                console.log('coral', coralCounter)
            break;

            case 1:
                setCoralCounter(coralCounter +1)
                console.log('coral', coralCounter)
            break;

            case 2:
                setCoralCounter(coralCounter +1)
                console.log('coral', coralCounter)
            break;

            case 3:
                setCoralCounter(coralCounter +1)
                console.log('coral', coralCounter)
            break;

            case 4:
                setCoralCounter(coralCounter +1)
                console.log('coral', coralCounter)
            break;

            case 5:
                setCoralCounter(0)
                console.log('coral', coralCounter)
            break;

            default:
                return null
        }
    }


    useEffect(() => {

        if((purpleCounter === 4) && (blueCounter === 4) && (greenCounter === 4) && (coralCounter === 4)) {
            history.replace(props.winRoute)
        }

    }, [purpleCounter, blueCounter, greenCounter, coralCounter, history, props])



    return (
        <>
            <button className={`change-same-color-${purpleCounter}`} onClick={handlePressPurple} />
            <button className={`change-same-color-${blueCounter}`} onClick={handlePressBlue} />
            <button className={`change-same-color-${greenCounter}`} onClick={handlePressGreen} />
            <button className={`change-same-color-${coralCounter}`} onClick={handlePressCoral} />
        </>
    )
}