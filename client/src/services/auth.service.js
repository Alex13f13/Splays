import axios from 'axios'

class AuthService {
  constructor() {
    this.app = axios.create({
      baseURL: 'http://localhost:5000/api/auth',
      withCredentials: true
    })
  }

  signup = (username, password, email) => this.app.post("/signup", { username, password, email })
  login = (username, password) => this.app.post("/login", { username, password })
  logout = () => this.app.get("/logout")
  isloggedin = () => this.app.get("/isloggedin")
  getUser = (id) => this.app.get(`/${id}/user`)
  editProfile = (id, username, image, originPlanet) => this.app.put(`/${id}/edit-profile`, { username, image, originPlanet })
  editShip = (id, ship) => this.app.put(`/${id}/edit-ship`, { ship })
  deleteProfile = (id) => this.app.delete(`/${id}/delete`)
}

export default AuthService