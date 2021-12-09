import React, { useState } from 'react';
import SignUp from './Sign-up/Sign-up';
import LogIn from './Log-in/Log-in';
import "./Landing.css"
import LandingInfo from './Landing-info/Landing-info';


export default function Landing(props) {

    const [formData, setFormData] = useState({ loginUsername: "", loginpwd: "", signupUsername: "", signupPwd: "", signupConfirmPwd: "", signupEmail: "" })

    const [signupPressed, setSignupPressed] = useState(false)
    const [loginPressed, setLoginPressed] = useState(false)
    const [mainBtns, setMainBtns] = useState(true)
    const [infoSection, setInfoSection] = useState(true)


    const togglePlanetDetails = (id) => {
        setSignupPressed(!signupPressed)
        setLoginPressed(!loginPressed)
    }


    const showSignup = () => {
        setSignupPressed(true)
        setMainBtns(false)
        setInfoSection(false)
    }


    const showLogin = () => {
        setLoginPressed(true)
        setMainBtns(false)
        setInfoSection(false)
    }

    return(
        <>
            <div className="landing-background">
                {mainBtns &&
                <>
                    <div className="landing-logo-container">
                        <img src={""} alt={""} />
                    </div>
                    <div className="landing-login-btn">
                        <p onClick={showLogin}>Log in</p>
                    </div>
                    <p onClick={showSignup} className="landing-underbtn">Don't have an account? <span className="landing-underbtn-span">Sign up now!</span></p>
                    <img className="scroll-down-icon" src="https://res.cloudinary.com/dwxuz6cft/image/upload/v1638999526/splays_app/splays_icons/scroll_down_dlgro1.png" alt="scroll down icon" />
                </>
                }


                {signupPressed && <SignUp togglePlanetDetails={togglePlanetDetails} storeUser={props.storeUser} setFormData={setFormData} formData={formData}></SignUp>}
                {loginPressed && <LogIn  togglePlanetDetails={togglePlanetDetails} storeUser={props.storeUser} setFormData={setFormData} formData={formData}></LogIn>}
            </div>
            {infoSection && <LandingInfo />}
        </>
    )


}
