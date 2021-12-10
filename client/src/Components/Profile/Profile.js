import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import ProfileService from '../../services/profile.service'
import Nav from '../Nav/Nav'
import { Link } from 'react-router-dom'
import './Profile.css'
import { useHistory } from 'react-router'


const profileService = new ProfileService()

export default function Profile(props) {

    const { id } = useParams()
    const [hasEdit, setHasEdit] = useState(false)
    const [formData, setFormData] = useState({ username: "", image: "", originPlanet: "" })

    let history = useHistory()

    useEffect(() => {

        profileService.getUser(id)
            .then(response => {
                const userData = response.data
                setFormData({
                    username: userData.username,
                    originPlanet: userData.originPlanet,
                    image: userData.image
                })

            })
            .catch(err => console.log(err))
    }, [])

    const edit = () => {
        setHasEdit(!hasEdit)
    }

    const handleSubmitEdit = (e) => {
        e.preventDefault();

        const { username, image, originPlanet } = formData

        console.log("Editado: ", id, username, image, originPlanet)

        edit()

        profileService.editProfile(id, username, image, originPlanet)
            .then(response => console.log(response))
            .catch(err => console.log(err.response.data.errorMessage))
    }

    const handleInputChange = (e) => {
        let { name, value } = e.currentTarget

        setFormData({ ...formData, [name]: value })
    }

    const handleUploadChange = (e) => {

        // this.setState({ loading: true })

        const uploadData = new FormData()
        uploadData.append('imageData', e.target.files[0])

        profileService
            .uploadImage(uploadData)
            .then(response => {

                setFormData({ ...formData, image: response.data.cloudinary_url })

                console.log("Data Image: ", formData.image)


                // this.setState({
                //     coaster: {
                //         ...this.state.coaster,
                //         imageUrl: response.data.cloudinary_url
                //     },
                //     loading: false
                // })
            })
            .catch(err => console.log(err))

    }

    const deleteProfile = () => {

        profileService.deleteProfile(id)
            .then(response => {
                console.log(response)
                props.storeUser(null)
                history.replace("/")
            })
            .catch(err => console.log(err.response.data.errorMessage))
    }


    return (
        formData ?
            <div className='profile-background'>
                <Nav storeUser={props.storeUser} loggedUser={props.loggedUser} pageTitle={"PROFILE"} />

                {hasEdit ?
                    <form onSubmit={handleSubmitEdit}>
                        <div className='profile-main-container'>

                            <div className='gradient-outline'>
                                <img className='profile-image' src={formData.image} alt={formData.image} />
                            </div>
                            <input onChange={handleUploadChange} name="image" type="file" />

                            <input onChange={handleInputChange} value={formData.username} name="username" type="text" placeholder={formData.username} />
                            <input onChange={handleInputChange} value={formData.originPlanet} name="originPlanet" type="text" placeholder={formData.originPlanet} />

                            <input className="signup-form-btn" type="submit" value="Guardar Cambios" />
                            <p onClick={deleteProfile} className='profile-exit-btn'>Delete</p>
                        </div>
                    </form>
                    :
                    <div className='profile-main-container'>

                        <div className='gradient-outline'>
                            <img className='profile-image' src={formData.image} alt={formData.image} />
                        </div>

                        <p className='profile-username'>{formData.username}</p>
                        <p className="profile-origin-planet">Planet {formData.originPlanet}</p>

                        <div className='profile-bottom-links-main-container'>
                            <div className='profile-line-divisor'></div>

                            <Link className='no-decoration' to={`/profile/${id}/emblems`}>
                                <div className='profile-bottom-links-container'>
                                    <p className='profile-bottom-links'>My emblems</p>
                                    <img className='profile-purple-arrow' src="https://res.cloudinary.com/dwxuz6cft/image/upload/v1639044961/splays_app/splays_icons/purple_arrow_xm6ccv.png" alt="purple arrow" />
                                </div>
                            </Link>

                            <div className='profile-line-divisor'></div>

                            <Link className='no-decoration' to={`/profile/${id}/ship`}>
                                <div className='profile-bottom-links-container'>
                                    <p className='profile-bottom-links'> My ship</p>
                                    <img className='profile-purple-arrow' src="https://res.cloudinary.com/dwxuz6cft/image/upload/v1639044961/splays_app/splays_icons/purple_arrow_xm6ccv.png" alt="purple arrow" />
                                </div>
                            </Link>

                            <div className='profile-line-divisor'></div>
                        </div>

                        <p onClick={edit} className='profile-exit-btn'>Edit profile</p>
                    </div>

                }

            </div>
            :
            <p>Aquí irá un spinner </p>
    )
}
