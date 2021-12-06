import axios from 'axios'

class CoasterService {
  constructor() {
    this.app = axios.create({
      baseURL: 'http://localhost:5000/api/planet'
    })
  }

  // getAllCoasters = () => this.app.get("/allCoasters")
  // getOneCoaster = (id) => this.app.get(`/coaster/${id}`)
  // createCoaster = (coasterData) => this.app.post("/newCoaster", coasterData)
}

export default CoasterService