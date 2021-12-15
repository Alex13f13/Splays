import React from "react";
import { useParams } from 'react-router'
import { Link } from "react-router-dom";
import PressFiveSec from "./Challenges/PressFiveSec/PressFiveSec";
import PressFiveTimes from './Challenges/PressFiveTimes/PressFiveTimes'
import TheNight from './Challenges/TheNight/TheNight'
import SaimonSays from './Challenges/SimonSays/SimonSays'
import SpeedButton from "./Challenges/SpeedButton/SpeedButton"
import Asteroids from "./Challenges/Asteroids/Asteroids.jsx"
import IntruderColor from "./Challenges/IntruderColor/IntruderColor"
import ChangeSameColor from './Challenges/ChangeSameColor/ChangeSameColor'
import Align from "./Challenges/Align/Align";
import CantTouchThis from './Challenges/CantTouchThis/CantTouchThis'
import './Challenge.css'

export default function Challenge() {

    const params = useParams()
    console.log(params)

    switch (params.challengename) {
        case 'pressFiveTimes':
            console.log('pressFiveTimes');
            return (
                <div className="challenge-background">
                    <div className="exit-btn-container">
                        <Link className="challenge-exit-btn" to={'/planet-map'}>Exit</Link>
                    </div>

                    <div className="btn-center-screen-container">
                        <PressFiveTimes winRoute={`/planet-map/${params.id}/challenge/win`}></PressFiveTimes>
                    </div>
                </div>
            )


        case 'pressFiveSec':
            console.log('pressFiveSec');
            return (
                <div className="challenge-background">
                    <div className="exit-btn-container">
                        <Link className="challenge-exit-btn" to={'/planet-map'}>Exit</Link>
                    </div>

                    <div className="btn-center-screen-container">
                        <PressFiveSec winRoute={`/planet-map/${params.id}/challenge/win`}></PressFiveSec>
                    </div>
                </div>
            )

        case 'theNight':
            console.log('theNight');
            return (
                <div>
                    <div className="exit-btn-container">
                        <Link className="challenge-exit-btn" to={'/planet-map'}>Exit</Link>
                    </div>
                    <h1>The Night</h1>

                    <div className="btn-center-screen-container">
                        <TheNight winRoute={`/planet-map/${params.id}/challenge/win`}></TheNight>
                    </div>
                </div>
            )

        case 'saimonSays':
            console.log('saimonSays');
            return (
                <div>
                    <div className="exit-btn-container">
                        <Link className="challenge-exit-btn" to={'/planet-map'}>Exit</Link>
                    </div>

                    <div className="btn-center-screen-container">
                        <SaimonSays winRoute={`/planet-map/${params.id}/challenge/win`}></SaimonSays>
                    </div>
                </div>
            )

        case 'speedButton':
            console.log('speedButton');
            return (
                <div className="challenge-background">
                    <div className="exit-btn-container">
                        <Link className="challenge-exit-btn" to={'/planet-map'}>Exit</Link>
                    </div>

                    <div className="btn-center-screen-container">
                        <SpeedButton winRoute={`/planet-map/${params.id}/challenge/win`}></SpeedButton>
                    </div>
                </div>
            )

        case 'asteroids':
            console.log('asteroids');
            return (
                <div>
                    <div className="exit-btn-container">
                        <Link className="challenge-exit-btn" to={'/planet-map'}>Exit</Link>
                    </div>

                    <div className="btn-center-screen-container">
                        <Asteroids winRoute={`/planet-map/${params.id}/challenge/win`}></Asteroids>
                    </div>
                </div>
            )

        case 'intruderColor':
            console.log('intruderColor');
            return (
                <div>
                    <div className="exit-btn-container">
                        <Link className="challenge-exit-btn" to={'/planet-map'}>Exit</Link>
                    </div>

                    <div className="btn-center-screen-container">
                        <IntruderColor winRoute={`/planet-map/${params.id}/challenge/win`}></IntruderColor>
                    </div>
                </div>
            )

        case 'changeSameColor':
            console.log('changeSameColor');
            return (
                <div className="challenge-background">
                    <div className="exit-btn-container">
                        <Link className="challenge-exit-btn" to={'/planet-map'}>Exit</Link>
                    </div>

                    <div className="btn-center-screen-container">
                        <ChangeSameColor winRoute={`/planet-map/${params.id}/challenge/win`}></ChangeSameColor>
                    </div>
                </div>
            )

        case 'align':
            console.log('align');
            return (
                <div className="challenge-background">
                    <div className="exit-btn-container">
                        <Link className="challenge-exit-btn" to={'/planet-map'}>Exit</Link>
                    </div>

                    <div className="btn-center-screen-container">
                        <Align winRoute={`/planet-map/${params.id}/challenge/win`}></Align>
                    </div >
                </div >
            )

        case 'cantTouchThis':
            console.log('pressFiveSec');
            return (
                <div className="challenge-background">
                    <div className="exit-btn-container">
                        <Link className="challenge-exit-btn" to={'/planet-map'}>Exit</Link>
                    </div>

                    <div className="btn-center-screen-container">
                        <CantTouchThis winRoute={`/planet-map/${params.id}/challenge/win`}></CantTouchThis>
                    </div >
                </div >
            )

        default:
            console.log('saimonSays');
            return (
                <div>
                    <div className="exit-btn-container">
                        <Link className="challenge-exit-btn" to={'/planet-map'}>Exit</Link>
                    </div>

                    <div className="btn-center-screen-container">
                        <SaimonSays winRoute={`/planet-map/${params.id}/challenge/win`}></SaimonSays>
                    </div>
                </div>
            )

    }
}
