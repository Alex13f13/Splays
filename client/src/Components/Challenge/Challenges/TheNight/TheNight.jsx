import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import './TheNight.css'


export default function TheNight(props) {

    let history = useHistory()

    const [result, setResult] = useState("")
    const [hasOn, sethasOn] = useState(false)

    let backColor = hasOn ? "backGroundWhite" : "backGroundBlack"
    let secretPassword = hasOn ? "8437" : ""


    useEffect(() => {

        result === "8437" && history.replace(props.winRoute)

    }, [result, history, props])

    const switchButton = () => { sethasOn(!hasOn) }

    const handleInputChange = (e) => { setResult(e.currentTarget.value) }

    return (
        <>
            <div className={backColor}>
                <button className="theNight-btn" onClick={switchButton} />

                <div className="secretPassword">
                    <p>{secretPassword}</p>
                </div>

                <div className="form-field-container">
                    <p className="form-field-name">Secret password</p>
                    <input className="form-field" onChange={handleInputChange} value={result} type="text" placeholder="****" />
                </div>
            </div>
        </>
    )
}