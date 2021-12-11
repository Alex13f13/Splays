import React, {useEffect, useState} from "react";
import { Link, useHistory } from "react-router-dom";
import './PressFiveSec.css'

let timeInterval;
let timerNew = 0

export default function PressFiveSec(props) {
    
    let history = useHistory()

    const handlePress = () => {

            timeInterval = setInterval(function(){
                timerNew++  
                console.log(timerNew) 
                
                if(timerNew === 5) {
                    clearInterval(timeInterval)
                    history.replace(props.winRoute)
                }

              }, 1000);
        
    
    }

    const handleNotPress = () => {
        console.log("end")
        clearInterval(timeInterval);
        timerNew = 0;
    }


    
    
    return(
        <>
            <button className="press-five-sec-btn" onMouseDown={handlePress} onTouchStart={handlePress} onMouseUp={handleNotPress} onTouchEnd={handleNotPress}/>
        </>
    )
}
