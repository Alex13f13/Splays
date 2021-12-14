import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import ProfileService from '../../../services/profile.service'
import Nav from '../../Nav/Nav'
import { Link, useHistory } from 'react-router-dom'
import "./Ship.css"

const profileService = new ProfileService()

export default function Ship(props) {
  const { id } = useParams()

  const [user, setUser] = useState(undefined)
  const [ship, setShip] = useState(undefined)
  const [selectedIndex, setSelectedIndex] = useState(undefined)

  let history = useHistory()


  useEffect(() => {

    profileService.getUser(id)
      .then(response => {

        setUser(response.data)

      })
      .catch(err => console.log(err))
  }, [id])

  const newShip = () => {

    if (ship) {
      profileService.editShip(id, ship)
        .then(response => console.log(response))
        .catch(err => console.log(err))
    }

    history.replace(`/profile/${id}`)

  }

  const shipChange = (shipImg, index) => {
    setShip(shipImg)
    setSelectedIndex(index)
  }


  return (
    user ?
      <div className='no-scroll'>
        <Nav storeUser={props.storeUser} loggedUser={props.loggedUser} pageTitle={"MY SHIP"} />

        <Link className='no-decoration' to={`/profile/${id}`}>
          <div className='ships-link-container'>
            <img className='ships-purple-arrow' src="https://res.cloudinary.com/dwxuz6cft/image/upload/v1639044961/splays_app/splays_icons/purple_arrow_xm6ccv.png" alt="purple arrow" />
            <p className='ships-link'>Return to profile</p>
          </div>
        </Link>


        <div className='ships-main-container'>
          <div className='ships-list'>

              <div className='separation-div'></div>

              {user.ships.map((elm, idx) => {
                return (
                  <>
                  <div className={ selectedIndex === idx ? 'ships-card-clicked' :'ships-card'} style={{ animation: `ships-card-creation 1s ${idx * 0.2}s forwards` }} onClick={() => shipChange(elm.image, idx)} key={elm.name}>
                    <div>
                      <div className='ships-image-container'>
                        <img className={`ships-${convertToClass(elm.name)}`} src={elm.image} alt={elm.name} />
                      </div>

                      <div className={`ships-name-${convertToClass(elm.name)}-container`}>
                        <p className='ships-name'>{elm.name}</p>
                      </div>

                      <div className={`${convertToClass(elm.name)}-stats-container`}>
                        <img  src={elm.stats} alt='ship stats'/>
                      </div>

                    </div>
                  </div>
                  </>
                )
              })}

              <div className='separation-div'></div>

          </div>

              <p onClick={newShip} className='ships-choose-btn'>Choose this ship</p>
        </div>


      </div>
      :
      <p>Aquí irá un spinner </p>
  )
}


function convertToClass(name) {
  const lowerCase = name.toLowerCase()
  return lowerCase.replace(/ /g, "-");
}