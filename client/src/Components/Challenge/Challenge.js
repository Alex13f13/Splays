import React from "react";
import {useParams} from 'react-router'
import { Link } from "react-router-dom";

export default function Challenge() {

    
    const params = useParams()
    console.log(params)

    switch (params.challengename) {
        case 'pressFiveTimes':
        console.log('pressFiveTimes');
        return(
            <div>
                <Link to={'/planet-map'}>Exit</Link>
                <h1>PressFiveTimes</h1>
            </div>
        )
        

        case 'pressFiveSec':
        console.log('pressFiveSec');
        return(
            <div>
                <Link to={'/planet-map'}>Exit</Link>
                <h1>PressFiveSec</h1>
            </div>
        ) 
        
        default:
        console.log('default')

    }
}
