import axios from 'axios'

class AuthService {
  constructor() {
    this.app = axios.create({
      baseURL: `${process.env.REACT_APP_BASE_URL}/auth`,
      withCredentials: true
    })
  }

  signup = (username, password, email) => this.app.post("/signup", { username, password, email })
  login = (username, password) => this.app.post("/login", { username, password })
  logout = () => this.app.get("/logout")
  isloggedin = () => this.app.get("/isloggedin")
}

export default AuthService