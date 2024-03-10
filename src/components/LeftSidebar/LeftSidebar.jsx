import React,{ useState } from 'react'
import './LeftSidebar.css'
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {NavLink } from 'react-router-dom'
import Globe from '../../assets/Globe.svg'

const LeftSidebar = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <div className='left-sidebar'>
    
    <>
     <Button variant=" outline-primary" onClick={handleShow} className='clickButton'>
      Click Here
     </Button>

     <Offcanvas show={show} onHide={handleClose} backdrop="static" className="Offcanvas">
       <Offcanvas.Header closeButton>
        
       </Offcanvas.Header>
       <Offcanvas.Body>

       
         <nav className='side-nav'>
            <NavLink to ='/'className='side-nav-links' activeClassName='active' > 
              <p>Home</p>
            </NavLink>
            
      <div className='side-nav-div'>
        <div><p>PUBLIC</p></div>
        <div id="google_element" ></div>
        <NavLink to ='/Questions' className='side-nav-links'>
            <img src={Globe} alt = " Globe" width='10%'/>
            <p style={{paddingLeft: "10px"}}>Questions</p>
        </NavLink>
        <NavLink to = '/Tags' className='side-nav-links' style={{paddingLeft:"40px" }}>
            <p>Tags</p>
        </NavLink>
        <NavLink to = '/Users' className='side-nav-links' style={{paddingLeft:"40px" }}>
            <p>Users</p>
        </NavLink> 

      </div>
        </nav>
       </Offcanvas.Body>
     </Offcanvas>
   </>
    
   
    
        <nav className='side-navbar'>
       
            <NavLink to ='/'className='side-nav-links' activeClassName='active' > 
              <p>Home</p>
            </NavLink>
            
      <div className='side-nav-div'>
        <div><p>PUBLIC</p></div>
        <div id="google_element" ></div>
        <NavLink to ='/Questions' className='side-nav-links'>
            <img src={Globe} alt = " Globe" width='10%'/>
            <p style={{paddingLeft: "10px"}}>Questions</p>
        </NavLink>
        <NavLink to = '/Tags' className='side-nav-links' style={{paddingLeft:"40px" }}>
            <p>Tags</p>
        </NavLink>
        <NavLink to = '/Users' className='side-nav-links' style={{paddingLeft:"40px" }}>
            <p>Users</p>
        </NavLink>
        <NavLink to = '/CheckWeather' className='side-nav-links' style={{paddingLeft:"40px" }}>
            <p>Weathers</p>
        </NavLink>
        

      </div>
        </nav>  
      
    </div>
    
  )
}

export default LeftSidebar





   
  


