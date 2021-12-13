import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import './SimonSays.css'


export default function SaimonSays(props) {

    let history = useHistory()

    const [result, setResult] = useState(0)

    useEffect(() => {

        result === 9 && history.replace(props.winRoute)

    }, [result, history, props])

    const correctButton = () => {
        setResult(result + 1)
        console.log(result)
    }
    const wrongButton = () => { setResult(0) }

    //#region rounds

    //1
    let round1 = <div>
        <button className="simon-says-btn" onClick={correctButton} />
        <button className="simon-says-wrong-btn" onClick={wrongButton} />
        <button className="simon-says-wrong-btn" onClick={wrongButton} />
        <button className="simon-says-wrong-btn" onClick={wrongButton} />
    </div>

    //2
    let round2 = <div>
        <button className="simon-says-btn" onClick={correctButton} />
        <button className="simon-says-wrong-btn" onClick={wrongButton} />
        <button className="simon-says-wrong-btn" onClick={wrongButton} />
        <button className="simon-says-wrong-btn" onClick={wrongButton} />
    </div>

    let round3 = <div>
        <button className="simon-says-wrong-btn" onClick={wrongButton} />
        <button className="simon-says-btn" onClick={correctButton} />
        <button className="simon-says-wrong-btn" onClick={wrongButton} />
        <button className="simon-says-wrong-btn" onClick={wrongButton} />
    </div>

    //3
    let round4 = <div>
        <button className="simon-says-btn" onClick={correctButton} />
        <button className="simon-says-wrong-btn" onClick={wrongButton} />
        <button className="simon-says-wrong-btn" onClick={wrongButton} />
        <button className="simon-says-wrong-btn" onClick={wrongButton} />
    </div>

    let round5 = <div>
        <button className="simon-says-wrong-btn" onClick={wrongButton} />
        <button className="simon-says-btn" onClick={correctButton} />
        <button className="simon-says-wrong-btn" onClick={wrongButton} />
        <button className="simon-says-wrong-btn" onClick={wrongButton} />
    </div>

    let round6 = <div>
        <button className="simon-says-wrong-btn" onClick={wrongButton} />
        <button className="simon-says-wrong-btn" onClick={wrongButton} />
        <button className="simon-says-wrong-btn" onClick={wrongButton} />
        <button className="simon-says-btn" onClick={correctButton} />
    </div>

    //4
    let round7 = <div>
        <button className="simon-says-btn" onClick={correctButton} />
        <button className="simon-says-wrong-btn" onClick={wrongButton} />
        <button className="simon-says-wrong-btn" onClick={wrongButton} />
        <button className="simon-says-wrong-btn" onClick={wrongButton} />
    </div>

    let round8 = <div>
        <button className="simon-says-wrong-btn" onClick={wrongButton} />
        <button className="simon-says-btn" onClick={correctButton} />
        <button className="simon-says-wrong-btn" onClick={wrongButton} />
        <button className="simon-says-wrong-btn" onClick={wrongButton} />
    </div>

    let round9 = <div>
        <button className="simon-says-wrong-btn" onClick={wrongButton} />
        <button className="simon-says-wrong-btn" onClick={wrongButton} />
        <button className="simon-says-wrong-btn" onClick={wrongButton} />
        <button className="simon-says-btn" onClick={correctButton} />
    </div>

    let round10 = <div>
        <button className="simon-says-wrong-btn" onClick={wrongButton} />
        <button className="simon-says-wrong-btn" onClick={wrongButton} />
        <button className="simon-says-btn" onClick={correctButton} />
        <button className="simon-says-wrong-btn" onClick={wrongButton} />
    </div>
    //#endregion

    const round = [round1, round2, round3, round4, round5, round6, round7, round8, round9, round10]

    return (
        <>
            {round[result]}
        </>
    )
}