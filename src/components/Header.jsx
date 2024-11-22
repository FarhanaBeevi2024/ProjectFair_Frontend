import { faStackOverflow } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React  from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';


// import { authTokenContext } from '../context/DataShare';

//  { useContext }


function Header({dash}) {

  const navigate = useNavigate()

  const handleLogout = ()=>{
    navigate('/')
    sessionStorage.removeItem('token')
  }
  

  // const { isAuthorized, setIsAuthorized } = useContext(authTokenContext)
  // const navigate = useNavigate()
  // //logout
  // const handleLogout = () => {

  //   //removing token and exix=sting user whe click on logout button
  //   sessionStorage.removeItem("token")
  //   sessionStorage.removeItem("existingUser")
  //   setIsAuthorized(false)
  //   //navigate to home page
  //   navigate('/')
  // }


  return (

    <Navbar className="bg-success">
    <Container>
      <Link to={'/'} style={{textDecoration :'none'}}>
      <Navbar.Brand  className='text-light fs-4'>

       <FontAwesomeIcon icon={faStackOverflow} className='fa-2x me-3'/>
      Project Fair
      </Navbar.Brand>
      </Link>
      {dash && <button className='btn btn-warning'  type='button' onClick={handleLogout}  ><FontAwesomeIcon icon={faPowerOff} className='me-2'/>Log Out</button>}
      
    </Container>
  </Navbar>

  )
}

export default Header

