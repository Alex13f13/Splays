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
            setErrorUsername("https://res.cloudinary.com/dwxuz6cft/image/upload/v1639569263/splays_app/splays_icons/required_field_cqhz2h.svg")
            console.log("error Username")
            setErrorPassword(undefined)
        }
        else if (!loginpwd) {
            setErrorPassword("https://res.cloudinary.com/dwxuz6cft/image/upload/v1639569263/splays_app/splays_icons/required_field_cqhz2h.svg")
            console.log("error Password")
            setErrorUsername(undefined)
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

                    <p className="sign-up-err-login">{errorManager}</p>

                    <input className="login-form-btn" type="submit" value='Confirm' />
                </form>

                <img className={errorUsername  ? "required-input-username" : "hide"} src={errorUsername} alt="error Username" />
                <img className={errorPassword  ? "required-input-email" : "hide"} src={errorPassword} alt="error Email" />

            </div>
        </>
    )

}