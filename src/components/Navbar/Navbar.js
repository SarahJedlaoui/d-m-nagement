import React, { useState } from 'react';
//import { Button } from '../button/Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import './SignedInLinks' ; 
import SignedIntLinks from './SignedInLinks';
import './SignedOutLinks';
import SignedOutLinks from './SignedOutLinks';
import{connect} from 'react-redux';
import { Button } from '../button/Button';




function Navbar(props) {
  const {auth , profile}= props;
  //console.log(auth);
  
  const [click, setClick] = useState(false);
  //const [button, setButton] = useState(true);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  /*const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  }; */
 // CAUSE the sign up button continue on showing in the middlle once i refresh the page 
 /* useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);
*/
  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu} > 
            ROJ
            <i class="fas fa-university"></i>
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
               Acceuil
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/administratif'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Nos services 
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/etudiant'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                A propos
              </Link>
            </li>
            <li>
              <Link
                to='/appl'
                className='nav-links-btnnn'
                onClick={closeMobileMenu}
              >
                DEVIS GRATUIT
              </Link>
            </li>
           
            
           
          </ul>
         
        </div>
      </nav>
    </>
  );
}





export default Navbar;



// <i className={click ? 'fas fa-times' : 'fas fa-bars'}  if i click it changes from times to bars 