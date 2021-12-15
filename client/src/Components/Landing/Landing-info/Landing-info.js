import React from "react";
import './Landing-info.css'

export default function LandingInfo() {

    return(
        <>
            <div className="landing-info-background">
                <div className="landing-info-container-main-container">
                    <div className="landing-info-container landing-info-image-01"></div>
                    <div className="landing-info-container landing-info-image-02"></div>
                    <div className="landing-info-container landing-info-image-03"></div>
                    <div className="landing-info-container landing-info-image-04"></div>
                </div>

                <div className="landing-info-text-container">
                    <p className="landing-info-title">Think outside the planet</p>
                    <div className="landing-info-paragraph-container">
                        <p className="landing-info-paragraph">There are no instructions for the challenges, trust your instincts to guide you throught the space. </p>
                    </div>
                </div>
            </div>
        </>
    )
}