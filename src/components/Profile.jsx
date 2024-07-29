import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Collapse from 'react-bootstrap/Collapse';
import { useState } from 'react';


function Profile() {
  const [open, setOpen] = useState(false);
  console.log(open);
  return (
    <>
    <div className='mx-md-3 p-4 shadow  rounded' onMouseEnter={()=>setOpen(true)}> 
      <div className='d-flex justify-content-between mt-3'>
      <h4 className='text-success'>Profile</h4>
      <button onClick={()=>setOpen(!open)} className='btn btn-outline-info'>{!open?<FontAwesomeIcon icon={faAngleDown}/> : <FontAwesomeIcon icon={faAngleUp}/>}</button>
      </div>

      <Collapse in={open}>
      <div>
    <div className='d-flex justify-content-center align-items-center flex-column'>
      <label htmlFor="profileImg">
        <input id='profileImg' type="file" style={{display:'none'}} />
        <img src="https://static.vecteezy.com/system/resources/thumbnails/018/742/015/small_2x/minimal-profile-account-symbol-user-interface-theme-3d-icon-rendering-illustration-isolated-in-transparent-background-png.png" alt="no image" style={{width:'170px', height:'170px', borderRadius:'50%'}} />
      </label>

      <form className='mt-4 w-100'>
        <div className='mb-3'>
          <input type="text" className='form-control' placeholder='Github' />
        </div>
        
        <div className='mb-3'>
          <input type="text" className='form-control' placeholder='Linkedin' />
        </div>

        <div className='mb-3'>
          <button className='btn btn-success w-100'>Update</button>
        </div>

      </form>
      </div>
    </div>
    </Collapse>
    </div>

    </>
  )
}

export default Profile

