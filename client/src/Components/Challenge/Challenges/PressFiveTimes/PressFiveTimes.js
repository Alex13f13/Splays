import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import './PressFiveTimes.css'


export default function PressFiveTimes(props) {

    let history = useHistory()

    const [counter, setCounter] = useState(0)

    const handlePress = () => {
        setCounter(counter + 1)
    }

    useEffect(() => {

        counter === 5 && history.replace(props.winRoute)

    }, [counter, history, props])

    return (
        <>
            <button className="press-five-times-btn" onClick={handlePress} />
        </>
    )
}