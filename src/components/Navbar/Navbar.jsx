import React, { useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import { jwtDecode } from "jwt-decode";
import logo from '../../assets/logo-stackoverflow.png'
import Avtar from '../../components/Avtar/Avtar'
import './Navbar.css'
import { setCurrentUser } from "../../actions/currentUser";

const Navbar = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  
    var User = useSelector ((state) => (state.currentUserReducer) )
    const handleLogout = () => {
      dispatch({type: 'LOGOUT'});
      navigate('/')
      dispatch(setCurrentUser(null))
    }   

    useEffect(() => {
      dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))));
    }, [dispatch]);
    const token = User?.token;
    if (token) {
      const decodedToken = jwtDecode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) {
        // handle token expiration
      }
    }
    
    return(

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
  <Link to ='/' className='nav-item nav-btn nav-logo'> 
          <img src={ logo } alt='logo' width=""/>
          </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Products</a>
        </li>
      
        <li className="nav-item">
          <a className="nav-link" href="#" tabindex="-1" aria-disabled="true">For Terms</a>
        </li>
        <li className="nav-item">
        <a href="CheckWeather" className='nav-link' tabindex="-1" aria-disabled="true">
            Weathers
        </a>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
       
        </form>
        { User === null ? 
    
    <Link to='/Auth' className='nav-log'> Log in</Link>:
    <>
   <Avtar className="avtar" backgroundColor="#009dff" px="10px" py="7px" borderRadius="50%" color="white"><Link to={`/Users/${User?.result?._id}`} style={{color:"white", textDecoration:"none"}}>{User.result.name.charAt(0).toUpperCase()}</Link></Avtar>
   <button class="btn btn-outline-primary"  onClick={handleLogout}>Log Out</button>
   
    </>   
       }
    </div>
  </div>
</nav>

     
    )
}

export default Navbar