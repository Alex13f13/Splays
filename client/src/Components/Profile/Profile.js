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
    const [formData, setFormData] = useState({ username: "", image: "", originPlanet: "", loading: false })

    let history = useHistory()

    const getUser = () => {
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
    }

    useEffect(() => {

        getUser()

    }, [])

    const edit = () => {
        setHasEdit(!hasEdit)
        getUser()
    }

    const handleSubmitEdit = (e) => {
        e.preventDefault();

        const { username, image, originPlanet } = formData

        edit()

        profileService.editProfile(id, username, image, originPlanet)
            .then(response => console.log(response))
            .catch(err => console.log(err.response.data.errorMessage))

        getUser()
    }

    const handleInputChange = (e) => {
        let { name, value } = e.currentTarget

        setFormData({ ...formData, [name]: value })
    }

    const handleUploadChange = (e) => {

        setFormData({ ...formData, loading: true })

        const uploadData = new FormData()
        uploadData.append('imageData', e.target.files[0])

        profileService
            .uploadImage(uploadData)
            .then(response => { setFormData({ ...formData, image: response.data.cloudinary_url, loading: false }) })
            .catch(err => console.log(err))

    }

    const deleteProfile = () => {

        profileService.deleteProfile(id)
            .then(response => {
                props.storeUser(null)
                history.replace("/")
            })
            .catch(err => console.log(err.response.data.errorMessage))
    }


    return (
        formData ?
            <div className='profile-background-edit'>
                <Nav storeUser={props.storeUser} loggedUser={props.loggedUser} pageTitle={"PROFILE"} />

                {hasEdit ?
                    <form onSubmit={handleSubmitEdit}>
                        <div className='profile-main-container-edit'>

                            <div className='gradient-outline'>
                                <div className='profile-image-container-edit'>
                                    <img className='camera-icon' src='https://res.cloudinary.com/dwxuz6cft/image/upload/v1639139968/splays_app/splays_icons/splays_camera_icon_mz0b10.png' alt='camera icon' />
                                    <img className='profile-image-edit' src={formData.image} alt={formData.image} />
                                </div>
                            </div>
                            <div className='form-input-file-container'>
                                <input onChange={handleUploadChange} id="file" name="image" type="file" className='invisible' />
                                <label htmlFor="file" className='custom-file-btn'>Choose File</label>
                            </div>

                            <div>
                                <p className='profile-form-field-name'>Username</p>
                                <input className='profile-form-field' maxLength="16" onChange={handleInputChange} value={formData.username} name="username" type="text" placeholder={formData.username} />

                                <p className='profile-form-field-name'>Origin planet</p>
                                <input className='profile-form-field' maxLength="16" onChange={handleInputChange} value={formData.originPlanet} name="originPlanet" type="text" placeholder={formData.originPlanet} />
                            </div>

                            <div className='profile-edit-btns-container'>
                                {formData.loading ? <p className='save-changes-deactivated-btn'>Uploading image</p> : <input className="save-changes-btn" type="submit" value="Save changes" />}
                                <p onClick={edit} className='profile-cancel-btn'>Cancel</p>
                            </div>

                            <p onClick={deleteProfile} className='delete-profile-btn'>Delete account</p>
                        </div>
                    </form>
                    :
                    <div className='profile-main-container'>

                        <div className='gradient-outline'>
                            <div className='profile-image-container-edit'>
                                <img className='profile-image' src={formData.image} alt={formData.image} />
                            </div>
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
            <div className='spinner-container'>
                <svg id="splays-spinner" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 282.74 264.05">

                    <g id="main-circle">
                        <circle class="cls-1" cx="150.72" cy="132.02" r="48.06" />
                    </g>
                    <path id="first-circle" class="cls-1" d="M352.55,250a12.28,12.28,0,0,0-11.62-12.26,91.75,91.75,0,1,0,0,24.52A12.28,12.28,0,0,0,352.55,250ZM250,338.75a88.75,88.75,0,1,1,87.93-100.82,12.29,12.29,0,0,0,0,24.14A88.89,88.89,0,0,1,250,338.75Z" transform="translate(-99.28 -117.98)" />
                    <path id="second-circle" class="cls-1" d="M250,118c-65.93,0-120.73,48.58-130.48,111.83h0a20.19,20.19,0,1,0,0,40.38h0C129.27,333.44,184.07,382,250,382c72.8,0,132-59.22,132-132S322.8,118,250,118Zm0,261c-64.36,0-117.87-47.37-127.48-109.08a20.17,20.17,0,0,0,0-39.88C132.13,168.35,185.64,121,250,121a129,129,0,0,1,0,258Z" transform="translate(-99.28 -117.98)" />
                </svg>
            </div>
    )
}
