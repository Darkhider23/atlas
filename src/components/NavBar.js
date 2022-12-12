import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { Button } from './Button'
import './Navbar.css';

function NavBar() {
  const navigate = useNavigate();

  const navigateLogin = () =>{
        navigate('/home')
    }

  const [click,setClick] = useState(false);

  const [button,setButton] = useState(true);
  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  const showButton = () =>{
    if(window.innerWidth <=960){
      setButton(false)
    }else{
      setButton(true)
    }
  };

  window.addEventListener('resize', showButton);

  return (
   <>
   <nav className='navbar'>
    <div className='navbar-container'>
        <Link to="/" className="navbar-logo">
        CarWash <i className="fab fa-typo3"/>
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? 'fas fa-times': 'fas fa-bars'}></i>
        </div>
        <ul className={click ? 'nav-menu active': 'nav-menu'}>
          <li className='nav-item'>
            <Link to ='/home' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link to ='/list-carwash' className='nav-links' onClick={closeMobileMenu}>
              List CarWash
            </Link>
          </li>
          <li className='nav-item'>
            <Link to ='/about' className='nav-links' onClick={closeMobileMenu}>
              About Us
            </Link>
          </li>
          </ul>
          {button && <Button onClick={navigateLogin} buttonStyle='btn--outline'>Login</Button>}
    </div>
   </nav>
   </>
  );
}

export default NavBar