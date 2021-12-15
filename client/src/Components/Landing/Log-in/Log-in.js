import React, { useState } from "react"
import { useHistory } from "react-router";
import AuthService from "../../../services/auth.service";
import './Log-in.css'

const authService = new AuthService()


export default function LogIn(props) {

    let history = useHistory()

    const [errorManager, setErrorManager] = useState(undefined)

    const [errorUsername, setErrorUsername] = useState(undefined)
    const [errorPassword, setErrorPassword] = useState(undefined)

    const handleSubmitLogin = (e) => {
        e.preventDefault();

        let { loginUsername, loginpwd } = props.formData

        setErrorManager(undefined)

        if (loginUsername && loginpwd) { //Gestión de errores del formulario

            authService.login(loginUsername, loginpwd)
                .then(response => {
                    props.storeUser(response.data)
                    history.replace("/")

                })
                .catch(err => setErrorManager(err.response.data.errorMessage))
        }
        else if (!loginUsername) {
            setErrorUsername(/*Enlace imagen*/)
            console.log("error Username")
        }
        else if (!loginpwd) {
            setErrorPassword(/*Enlace imagen*/)
            console.log("error Password")
        }
    }


    const handleInputChange = (e) => {
        let { name, value } = e.currentTarget

        props.setFormData({ ...props.formData, [name]: value })
    }


    return (
        <>
            <div className="main-login-title-container">

                <div className="login-chosen-container">
                    <h2 onClick={props.togglePlanetDetails} className="login-notchosen-title">Sign up</h2>
                    <div className="login-notchosen-underline"></div>
                </div>

                <div className="login-chosen-container">
                    <h2 className="login-chosen-title">Log in</h2>
                    <div className="login-chosen-underline"></div>
                </div>

            </div>

            <div className="form-glass-container">
                <form onSubmit={handleSubmitLogin}>
                    <div className="form-field-container">
                        <p className="form-field-name">Username</p>
                        <input className="form-field" maxLength="16" onChange={handleInputChange} value={props.formData.loginUsername} name="loginUsername" type="text" />
                    </div>

                    <div className="form-field-container">
                        <p className="form-field-name">Password</p>
                        <input className="form-field" onChange={handleInputChange} value={props.formData.loginpwd} name="loginpwd" type="password" />
                    </div>

                    <p>{errorManager}</p>

                    <input className="login-form-btn" type="submit" value='Confirm' />
                </form>

                {/* <img className="" src={errorUsername} alt="error Username" />
                <img className="" src={errorPassword} alt="error Password" /> */}

            </div>
        </>
    )

}