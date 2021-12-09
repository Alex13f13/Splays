import { Route, Switch } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import AuthService from './services/auth.service'

import Landing from "./Components/Landing/Landing"
import Home from "./Components/Home/Home"
import Profile from "./Components/Profile/Profile"
import Emblems from "./Components/Profile/Emblems/Emblems"
import Ship from "./Components/Profile/Ship/Ship"
import PlanetMap from "./Components/Planet-map/Planet-map"
import Challenge from "./Components//Challenge/Challenge"
import ChallengeWin from "./Components//Challenge/Challenge-win/Challenge-win"

function App() {

  const [loggedUser, setloggedUser] = useState(undefined)

  const authService = new AuthService()

  useEffect(() => {

    authService.isloggedin()
      .then(response => storeUser(response.data))
      .catch(err => storeUser(null))

  }, [])


  const storeUser = (user) => {
    setloggedUser(user)
  }

  return (
    <div>
      <Switch>
        {loggedUser ?
          <>
            <Route exact path="/" render={() => <Home storeUser={storeUser} loggedUser={loggedUser} />} />
            <Route exact path="/profile/:id" render={() => <Profile storeUser={storeUser} loggedUser={loggedUser} />} />
            <Route exact path="/profile/:id/emblems" render={() => <Emblems storeUser={storeUser} loggedUser={loggedUser} />} />
            <Route exact path="/profile/:id/ship" render={() => <Ship storeUser={storeUser} loggedUser={loggedUser} />} />
            <Route exact path="/planet-map" render={() => <PlanetMap storeUser={storeUser} loggedUser={loggedUser} />} />
            <Route exact path="/planet-map/:id/:challengename/challenge" render={() => <Challenge />} />
            <Route exact path="/planet-map/:id/challenge/win" render={() => <ChallengeWin storeUser={storeUser} loggedUser={loggedUser} />} />

          </>
          :
          <Route path="/" exact render={() => <Landing storeUser={storeUser} />} />
        }
      </Switch>

    </div>
  );
}

export default App;
