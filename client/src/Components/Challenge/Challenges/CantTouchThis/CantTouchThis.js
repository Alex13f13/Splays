import React, { useEffect, useState } from "react";
import { useHistory, withRouter } from "react-router-dom";
import './CantTouchThis.css'

let timeInterval;
let timerNew = 20

export default function CantTouchThis(props) {
    
    let history = useHistory()
    timerNew = 12;


    useEffect(() => {
        handleNotPress()
    }) 

    const handleNotPress = () => {

        timeInterval = setInterval(function(){
            timerNew--  
            console.log(timerNew) 
            
            if(timerNew === 0) {
                clearInterval(timeInterval)
                history.replace(props.winRoute)
            }

          }, 1000);
    }


    const handlePress = () => {
        console.log("restart")
        clearInterval(timeInterval);
        timerNew = 20;
        
    }

    

    history.listen((location, action) => {
        console.log("on route change");
        clearInterval(timeInterval);
        timerNew = 20;
    })

    return(
        <>
            <button className="press-five-sec-btn" onMouseDown={handlePress} onTouchStart={handlePress} onMouseUp={handleNotPress} onTouchEnd={handleNotPress}/>
        </>
    )
}