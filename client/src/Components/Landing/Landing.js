import React, { useState } from 'react';
import { useParams, useHistory } from "react-dom"
import AuthService from '../../services/auth.service'

export default function Landing() {

    const authService = new AuthService()
    const params = useParams()
    const history = useHistory()

    const [formData, setFormData] = useState({ loginUsername: "", loginpwd: "", signupUsername: "", signupPwd: "", signupConfirmPwd: "" })

    const handleSubmitLogin = (e) => {
        e.preventDefault();

        let { loginUsername, loginpwd } = formData

        authService.login(loginUsername, loginpwd)
            .then(response => {
                params.storeUser(response.data)

                history.push("/")

            })
            .catch(err => console.log(err.response.data.message))
    }

    const handleSubmitSignup = (e) => {
        e.preventDefault();

        let { signupUsername, signupPwd, signupConfirmPwd } = formData;

        console.log(signupUsername, signupPwd, signupConfirmPwd)

        if (signupPwd === signupConfirmPwd) {
            this.authService.signup(signupUsername, signupPwd)
                .then(response => {
                    params.storeUser(response.data)

                })
                .catch(err => console.log(err.response.data.message))
        }
        else {
            //error
            console.log("Error de Sign up")
        }
    }

    const handleInputChange = (e) => {
        let { name, value } = e.currentTarget

        setFormData({ ...formData, [name]: value })
    }

    return (
        <>

            <h1>Splays</h1>

            {/* Login */}
            <div>

                <hr />

                <h2>Login</h2>


                <form onSubmit={handleSubmitLogin}>
                    <div>
                        <h3>Username</h3>
                        <input onChange={handleInputChange} value={formData.setLoginUsername} name="loginUsername" type="text" placeholder="Elige un nombre de usuario" />
                    </div>

                    <div>
                        <h3>Password</h3>
                        <input onChange={handleInputChange} value={formData.loginpwd} name="loginpwd" type="password" placeholder="Password" />
                    </div>
                    <input type="submit" />
                </form>



            </div>


            {/* Sign in */}
            <div>

                <hr />

                <h2>Registro</h2>


                <form onSubmit={handleSubmitSignup}>
                    <div>
                        <h3>Username</h3>
                        <input onChange={handleInputChange} value={formData.signupUsername} name="signupUsername" type="text" placeholder="Elige un nombre de usuario" />
                    </div>

                    <div>
                        <h3>Password</h3>
                        <input onChange={handleInputChange} value={formData.signupPwd} name="signupPwd" type="password" placeholder="Password" />
                    </div>

                    <div>
                        <h3>Password</h3>
                        <input onChange={handleInputChange} value={formData.signupConfirmPwd} name="signupConfirmPwd" type="password" placeholder="Password" />
                    </div>

                    <input type="submit" />
                </form>


            </div>
        </>
    )
}
