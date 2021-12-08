import axios from 'axios'

class ProfileService {
    constructor() {
        this.app = axios.create({
            baseURL: 'http://localhost:5000/api/profile',
            withCredentials: true
        })
    }

    getUser = (id) => this.app.get(`/${id}/user`)
    editProfile = (id, username, image, originPlanet) => this.app.put(`/${id}/edit-profile`, { username, image, originPlanet })
    editShip = (id, ship) => this.app.put(`/${id}/edit-ship`, { ship })
    deleteProfile = (id) => this.app.delete(`/${id}/delete`)
}

export default ProfileService