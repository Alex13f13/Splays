import React from "react"
import { useHistory } from "react-router-dom"
import AuthService from "../../../services/auth.service";
import './Sign-up.css'

const authService = new AuthService()


export default function SignUp(props) {

    let history = useHistory()
    

    const handleSubmitSignup = (e) => {
        e.preventDefault();

        let { signupUsername, signupPwd, signupConfirmPwd, signupEmail } = props.formData;

        if (signupPwd === signupConfirmPwd) {
            authService.signup(signupUsername, signupPwd, signupEmail)
                .then(response => {
                    console.log(response)
                    props.storeUser(response.data)

                    authService.login(signupUsername, signupPwd)
                        .then(response => {
                            props.storeUser(response.data)
                            history.replace("/")

                        })
                        .catch(err => console.log(err))

                })
                .catch(err => console.log(err.response.data.errorMessage))
        }
        else {
            //error
            console.log("Error de Sign up")
        }
    }


    const handleInputChange = (e) => {
        let { name, value } = e.currentTarget

        props.setFormData({ ...props.formData, [name]: value })
    }
    

    return(
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
                        <input className="form-field" onChange={handleInputChange} value={props.formData.signupUsername} name="signupUsername" type="text" placeholder="Only lowercase" />
                    </div>

                    <div className="form-field-container">
                        <p className="form-field-name">Email</p>
                        <input className="form-field" onChange={handleInputChange} value={props.formData.signupEmail} name="signupEmail" type="email" placeholder="xxxx@xxx.xxx" />
                    </div>

                    <div className="form-field-container">
                        <p className="form-field-name">Password</p>
                        <input className="form-field" onChange={handleInputChange} value={props.formData.signupPwd} name="signupPwd" type="password" placeholder="Min. 8 characters" />
                    </div>

                    <div className="form-field-container">
                        <p className="form-field-name">Confirm Password</p>
                        <div className="confirm-password-container">
                            <input className="form-field" onChange={handleInputChange} value={props.formData.signupConfirmPwd} name="signupConfirmPwd" type="password" placeholder="Confirm Password" />
                            <img className="password-check-icon" src="https://res.cloudinary.com/dwxuz6cft/image/upload/v1639005660/splays_app/splays_icons/password_check_vpy7rh.png" alt="password check" />
                        </div>
                    </div>

                    <input className="signup-form-btn" type="submit" value="Confirm"/>
                </form>
            </div>

        </>
    )
}