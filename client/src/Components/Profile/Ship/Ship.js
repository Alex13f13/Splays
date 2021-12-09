import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import ProfileService from '../../../services/profile.service'
import Nav from '../../Nav/Nav'

const profileService = new ProfileService()

export default function Ship(props) {
  const { id } = useParams()

  const [user, setUser] = useState(undefined)


  useEffect(() => {

    profileService.getUser(id)
      .then(response => {

        setUser(response.data)

      })
      .catch(err => console.log(err))
  }, [])


  return (
    user ?
      <div>
        <Nav storeUser={props.storeUser} loggedUser={props.loggedUser} pageTitle={"SHIP"} />
        <h2>{user.ship}</h2>
      </div>
      :
      <p>Aquí irá un spinner </p>
  )
}
