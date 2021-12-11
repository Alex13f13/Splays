import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import './SimonSays.css'


export default function SaimonSays(props) {

    let history = useHistory()

    const [result, setResult] = useState(0)


    useEffect(() => {

        result === 5 && history.replace(props.winRoute)

    }, [result, history, props])

    const correctButton = () => { setResult(result + 1) }
    const wrongButton = () => { setResult(0) }

    return (
        <>
            <div>
                <button className="simon-says-btn" onClick={correctButton} />
                <button className="simon-says-btn" onClick={wrongButton} />
                <button className="simon-says-btn" onClick={wrongButton} />
                <button className="simon-says-btn" onClick={wrongButton} />
            </div>
        </>
    )
}