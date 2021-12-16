import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import AuthService from "../../../services/auth.service";
import './Sign-up.css'

const authService = new AuthService()


export default function SignUp(props) {

    let history = useHistory()

    const [errorManager, setErrorManager] = useState(undefined)

    const [errorUsername, setErrorUsername] = useState(undefined)
    const [errorEmail, setErrorEmail] = useState(undefined)
    const [errorPassword, setErrorPassword] = useState(undefined)
    const [errorConfirmPassword, setErrorConfirmPassword] = useState(undefined)


    const handleSubmitSignup = (e) => {
        e.preventDefault();

        let { signupUsername, signupPwd, signupConfirmPwd, signupEmail } = props.formData;

        setErrorManager(undefined)


        if (signupUsername && signupPwd && signupConfirmPwd && signupEmail) { //Gestión de errores del formulario

            if (props.hasCorrectPassword) { //Gestión de error confirmar contraseña

                authService.signup(signupUsername, signupPwd, signupEmail)
                    .then(response => {
                        props.storeUser(response.data)

                        authService.login(signupUsername, signupPwd)
                            .then(response => {
                                props.storeUser(response.data)
                                history.replace("/")

                            })
                            .catch(err => setErrorManager(err))

                    })
                    .catch(err => { //Gestión de errores de petición al servidor
                        console.log(err.response.data.errorMessage)
                        setErrorManager(err.response.data.errorMessage)
                    })

            }
            else {
                //error
                setErrorManager("The password does not match")
            }

        }
        else if (!signupUsername) {
            setErrorUsername('https://res.cloudinary.com/dwxuz6cft/image/upload/v1639569263/splays_app/splays_icons/required_field_cqhz2h.svg')
            setErrorEmail(undefined)
            setErrorPassword(undefined)
            setErrorConfirmPassword(undefined)
        }
        else if (!signupEmail) {
            setErrorEmail('https://res.cloudinary.com/dwxuz6cft/image/upload/v1639569263/splays_app/splays_icons/required_field_cqhz2h.svg')
            setErrorPassword(undefined)
            setErrorConfirmPassword(undefined)
            setErrorUsername(undefined)
        }
        else if (!signupPwd) {
            setErrorPassword('https://res.cloudinary.com/dwxuz6cft/image/upload/v1639569263/splays_app/splays_icons/required_field_cqhz2h.svg')
            setErrorEmail(undefined)
            setErrorConfirmPassword(undefined)
            setErrorUsername(undefined)
        }
        else if (!signupConfirmPwd) {
            setErrorConfirmPassword('https://res.cloudinary.com/dwxuz6cft/image/upload/v1639569263/splays_app/splays_icons/required_field_cqhz2h.svg')
            setErrorEmail(undefined)
            setErrorPassword(undefined)
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
                    <h2 className="login-chosen-title">Sign up</h2>
                    <div className="login-chosen-underline"></div>
                </div>

                <div className="login-chosen-container">
                    <h2 onClick={props.togglePlanetDetails} className="login-notchosen-title">Log in</h2>
                    <div className="login-notchosen-underline"></div>
                </div>

            </div>

            <div className="form-glass-container">
                <form onSubmit={handleSubmitSignup}>
                    <div className="form-field-container">
                        <p className="form-field-name">Username</p>
                        <input className="form-field" maxLength="16" onChange={handleInputChange} value={props.formData.signupUsername} name="signupUsername" type="text" placeholder="Awesome name" />
                    </div>

                    <div className="form-field-container">
                        <p className="form-field-name">Email</p>
                        <input className="form-field" onChange={handleInputChange} value={props.formData.signupEmail} name="signupEmail" type="email" placeholder="xxxx@xxx.xxx" />
                    </div>

                    <div className="form-field-container">
                        <p className="form-field-name">Password</p>
                        <input className="form-field" onChange={handleInputChange} value={props.formData.signupPwd} name="signupPwd" type="password" placeholder="Min. 6 characters" />
                    </div>

                    <div className="form-field-container">
                        <p className="form-field-name">Confirm Password</p>
                        <div className="confirm-password-container">
                            <input className="form-field" onChange={handleInputChange} value={props.formData.signupConfirmPwd} name="signupConfirmPwd" type="password" placeholder="Confirm Password" />
                            {props.hasCorrectPassword && <img className="password-check-icon" src="https://res.cloudinary.com/dwxuz6cft/image/upload/v1639005660/splays_app/splays_icons/password_check_vpy7rh.png" alt="password check" />}
                        </div>
                    </div>

                    <p className="sign-up-err">{errorManager}</p>

                    <input className="signup-form-btn" type="submit" value="Confirm" />
                </form>

                <img className={errorUsername ? "required-input-username" : "hide"} src={errorUsername} alt="error Username" />
                <img className={errorEmail ? "required-input-email" : "hide"} src={errorEmail} alt="error Email" />
                <img className={errorPassword ? "required-input-password" : "hide"} src={errorPassword} alt="error Password" />
                <img className={errorConfirmPassword ? "required-input-confirm-password" : "hide"} src={errorConfirmPassword} alt="error ConfirmPassword" />

            </div>

        </>
    )
}