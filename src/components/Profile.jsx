import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react'
import Collapse from 'react-bootstrap/Collapse';
import { useState } from 'react';
import { serverUrl } from '../services/serverUrl';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { editProfileApi } from '../services/allApi';

function Profile() {
  const [open, setOpen] = useState(false);


  const [userDetails, setUserDetails] = useState({
    username: "",
    email: "",
    password: "",
    github: "",
    linkedin: "",
    profile: ""
  })
  const [existingImage, setExistingImage] = useState("")
  const [preview, setPreview] = useState("")
  const [editStatus, setEditStatus] = useState(false)

  const handleProfileFile = (e) => {
    e.preventDefault()
    setUserDetails({ ...userDetails, profile: e.target.files[0] })
  }

  useEffect(() => {
    if (userDetails.profile) {
      setPreview(URL.createObjectURL(userDetails.profile))
    }
    else {
      setPreview("")
    }
  }, [userDetails.profile])


  useEffect(() => {
    if (sessionStorage.getItem("existingUser")) {
      const user = JSON.parse(sessionStorage.getItem("existingUser"))
      setUserDetails({ ...userDetails, username: user.username, email: user.email, password: user.password, github: user.github, linkedin: user.linkedin, profile: "" })
      setExistingImage(user.profile)
    }
    setEditStatus(false)
  }, [editStatus])

  const handleProfileUpdate = async () => {
    const { username, email, password, github, linkedin, profile } = userDetails
    if (!username || !email || !password || !github || !linkedin) {
      toast.info('Please fill the input fields')
    }
    else {
      const reqBody = new FormData()
      reqBody.append("username", username)
      reqBody.append("email", email)
      reqBody.append("password", password)
      reqBody.append("github", github)
      reqBody.append("linkedin", linkedin)
      preview ? reqBody.append("profile", profile) : reqBody.append("profile", existingImage)

      const token = sessionStorage.getItem("token")
      if (preview) {
        // if there is a new image upload
        const reqHeader = {
          "Content-Type": "multipart/form-data",
          "Authorization": `Bearer ${token}`
        }
        const result = await editProfileApi(reqBody, reqHeader)
        console.log(result);
        if (result.status == 200) {
          toast.success('Profile updated Successfully')
          sessionStorage.setItem("existingUser", JSON.stringify(result.data))
          setEditStatus(true)
        }
        else {
          // console.log(result.response.data);
          toast.error('Something went wrong')
        }
      }
      else {
        // no new image upload
        const reqHeader = {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        }

        const result = await editProfileApi(reqBody, reqHeader)
        console.log(result);
        if (result.status == 200) {
          toast.success('Profile updated Successfully')
          sessionStorage.setItem("existingUser", JSON.stringify(result.data))
          setEditStatus(true)
        }
        else {
          toast.error('Something went wrong')
        }
      }
    }
  }
  console.log(open);

  return (
    <>
      <div className='mx-md-3 p-4 shadow  rounded' onMouseEnter={() => setOpen(true)}>
        <div className='d-flex justify-content-between mt-3'>
          <h4 className='text-success'>Profile</h4>
          <button onClick={() => setOpen(!open)} className='btn btn-outline-info'>{!open ? <FontAwesomeIcon icon={faAngleDown} /> : <FontAwesomeIcon icon={faAngleUp} />}</button>
        </div>

        <Collapse in={open}>
          <div>
            <div className='d-flex justify-content-center align-items-center flex-column'>
              <label htmlFor="profileImg">
                <input id='profileImg' type="file" style={{ display: 'none' }} onChange={(e) => handleProfileFile(e)} />
                {existingImage == "" ?
                  <img src={preview ? preview : "https://static.vecteezy.com/system/resources/thumbnails/018/742/015/small_2x/minimal-profile-account-symbol-user-interface-theme-3d-icon-rendering-illustration-isolated-in-transparent-background-png.png"} alt="no image" style={{ width: '170px', height: '170px', borderRadius: '50%' }} />
                  :
                  <img src={preview ? preview : `${serverUrl}/uploads/${existingImage}`} alt='no image' style={{ width: '170px', height: '170px', borderRadius: '50%' }} />
                }

              </label>

              <form className='mt-4 w-100'>
                <div className='mb-3'>
                  <input type="text" className='form-control' placeholder='Github' value={userDetails.github} onChange={(e) => setUserDetails({ ...userDetails, github: e.target.value })} />
                </div>

                <div className='mb-3'>
                  <input type="text" className='form-control' placeholder='Linkedin' value={userDetails.linkedin} onChange={(e) => setUserDetails({ ...userDetails, linkedin: e.target.value })} />
                </div>

                <div className='mb-3'>
                  <button className='btn btn-success w-100' type='button' onClick={handleProfileUpdate}>Update</button>
                </div>

              </form>
            </div>
          </div>
        </Collapse>
      </div>
      <ToastContainer theme="colored" position="top-center" autoClose={2000} />
    </>
  )
}

export default Profile

