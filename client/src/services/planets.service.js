import axios from 'axios'

class PlanetService {
  constructor() {
    this.app = axios.create({
      baseURL: 'http://localhost:5000/api/planet',
      withCredentials: true
    })
  }

  getAllPlanets = () => this.app.get("/allplanets")
  getOnePlanet = (id) => this.app.get(`/${id}/details`)
  putPlanetEmblem = (planetId, userId) => this.app.put(`/${planetId}/${userId}`)
}

export default PlanetService