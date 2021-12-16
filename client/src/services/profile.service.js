import axios from 'axios'

class ProfileService {
    constructor() {
        this.app = axios.create({
            baseURL: `${process.env.REACT_APP_BASE_URL}/profile`,
            withCredentials: true
        })
    }

    getUser = (id) => this.app.get(`/${id}/user`)
    getAllUsers = () => this.app.get(`/allusers`)
    editProfile = (id, username, image, originPlanet) => this.app.put(`/${id}/edit-profile`, { username, image, originPlanet })
    uploadImage = (imageData) => this.app.post("/image", imageData)
    editShip = (id, ship) => this.app.put(`/${id}/edit-ship`, { ship })
    getEmblems = (id) => this.app.get(`/${id}/emblems`)
    deleteProfile = (id) => this.app.delete(`/${id}/delete`)
}

export default ProfileService