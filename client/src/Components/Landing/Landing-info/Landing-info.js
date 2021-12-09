import React from "react";
import './Landing-info.css'

export default function LandingInfo() {

    return(
        <>
            <div className="landing-info-background">
                <div className="landing-info-container-main-container">
                    <div className="landing-info-container"></div>
                    <div className="landing-info-container"></div>
                    <div className="landing-info-container"></div>
                    <div className="landing-info-container"></div>
                </div>

                <div className="landing-info-text-container">
                    <p className="landing-info-title">This is a title</p>
                    <div className="landing-info-paragraph-container">
                        <p className="landing-info-paragraph">This is a text about something really cool that at this moment I have no idea what the hell is gonna be.</p>
                    </div>
                </div>
            </div>
        </>
    )
}