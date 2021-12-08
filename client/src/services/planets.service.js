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
  getPlanetEmblem = (planetId, userId) => this.app.get(`/${planetId}/${userId}`)
}

export default PlanetService