import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import ProfileService from '../../../services/profile.service'
import Nav from '../../Nav/Nav'
import { Link } from 'react-router-dom'
import "./Ship.css"

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
  }, [id])

  const newShip = (ship) => {
    profileService.editShip(id, ship)
      .then(response => console.log(response))
      .catch(err => console.log(err))
  }


  return (
    user ?
      <div>
        <Nav storeUser={props.storeUser} loggedUser={props.loggedUser} pageTitle={"MY SHIP"} />
        <Link className='no-decoration' to={`/profile/${id}`}>
          <div className='ships-link-container'>
            <img className='ships-purple-arrow' src="https://res.cloudinary.com/dwxuz6cft/image/upload/v1639044961/splays_app/splays_icons/purple_arrow_xm6ccv.png" alt="purple arrow" />
            <p className='ships-link'>Return to profile</p>
          </div>
        </Link>
        <h2>{user.ship}</h2>
        <img src={user.ship} alt={user.name} />
        <div>
          {user.ships.map(elm => {
            return (

              <div onClick={() => newShip(elm.image)} key={elm.name} className={`ship-${elm.name}`}>
                <h2>{elm.name}</h2>
                <img src={elm.image} alt={elm.name} />
              </div>
            )
          })
          }
        </div>
      </div>
      :
      <p>Aquí irá un spinner </p>
  )
}
