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
      
      <div className='spinner-container'>
            <svg id="splays-spinner" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 282.74 264.05">
                    
              <g id="main-circle">
                <circle class="cls-1" cx="150.72" cy="132.02" r="48.06"/>
              </g>
            <path id="first-circle" class="cls-1" d="M352.55,250a12.28,12.28,0,0,0-11.62-12.26,91.75,91.75,0,1,0,0,24.52A12.28,12.28,0,0,0,352.55,250ZM250,338.75a88.75,88.75,0,1,1,87.93-100.82,12.29,12.29,0,0,0,0,24.14A88.89,88.89,0,0,1,250,338.75Z" transform="translate(-99.28 -117.98)"/>
            <path id="second-circle" class="cls-1" d="M250,118c-65.93,0-120.73,48.58-130.48,111.83h0a20.19,20.19,0,1,0,0,40.38h0C129.27,333.44,184.07,382,250,382c72.8,0,132-59.22,132-132S322.8,118,250,118Zm0,261c-64.36,0-117.87-47.37-127.48-109.08a20.17,20.17,0,0,0,0-39.88C132.13,168.35,185.64,121,250,121a129,129,0,0,1,0,258Z" transform="translate(-99.28 -117.98)"/>
        </svg>
      </div>
  )
}


function convertToClass(name) {
  const lowerCase = name.toLowerCase()
  return lowerCase.replace(/ /g, "-");
}