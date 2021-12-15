import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import './IntruderColor.css'


export default function IntruderColor(props) {

    let history = useHistory()

    const [result, setResult] = useState(0)

    useEffect(() => {

        result >= 6 && history.replace(props.winRoute)

    }, [result, history, props])

    const correctButton = () => {
        setResult(result + 1)
        console.log(result)
    }
    const wrongButton = () => { setResult(0) }

    let takeRandom = Math.round(Math.random() * 5);

    //#region rounds

    let round1 = <div>
        <button className="intrude-color-correct-btn" onClick={correctButton} />
        <button className="intrude-color-btn" onClick={wrongButton} />
        <button className="intrude-color-btn" onClick={wrongButton} />
        <button className="intrude-color-btn" onClick={wrongButton} />
    </div>

    let round2 = <div>
        <button className="intrude-color-btn" onClick={wrongButton} />
        <button className="intrude-color-correct-btn" onClick={correctButton} />
        <button className="intrude-color-btn" onClick={wrongButton} />
        <button className="intrude-color-btn" onClick={wrongButton} />
    </div>

    let round3 = <div>
        <button className="intrude-color-btn" onClick={wrongButton} />
        <button className="intrude-color-btn" onClick={wrongButton} />
        <button className="intrude-color-correct-btn" onClick={correctButton} />
        <button className="intrude-color-btn" onClick={wrongButton} />
    </div>

    let round4 = <div>
        <button className="intrude-color-btn" onClick={wrongButton} />
        <button className="intrude-color-btn" onClick={wrongButton} />
        <button className="intrude-color-btn" onClick={wrongButton} />
        <button className="intrude-color-correct-btn" onClick={correctButton} />
    </div>

    let round5 = <div>
        <button className="intrude-color-btn" onClick={wrongButton} />
        <button className="intrude-color-btn" onClick={wrongButton} />
        <button className="intrude-color-btn" onClick={wrongButton} />
        <button className="intrude-color-correct-btn" onClick={correctButton} />
        <button className="intrude-color-btn" onClick={wrongButton} />
        <button className="intrude-color-btn" onClick={wrongButton} />
        <button className="intrude-color-btn" onClick={wrongButton} />
        <button className="intrude-color-btn" onClick={wrongButton} />
    </div>

    let round6 = <div>
        <button className="intrude-color-btn" onClick={wrongButton} />
        <button className="intrude-color-btn" onClick={wrongButton} />
        <button className="intrude-color-btn" onClick={wrongButton} />
        <button className="intrude-color-btn" onClick={wrongButton} />
        <button className="intrude-color-btn" onClick={wrongButton} />
        <button className="intrude-color-btn" onClick={wrongButton} />
        <button className="intrude-color-correct-btn" onClick={correctButton} />
        <button className="intrude-color-btn" onClick={wrongButton} />
    </div>


    //#endregion

    const round = [round1, round2, round3, round4, round5, round6]

    return (
        <>
            {round[takeRandom]}
        </>
    )
}