import React, { useState, useEffect } from 'react';
import { Button } from '../button/Button';
import './Navbar.css';

function SignedIntLinks(props) {

 
  const [button, setButton] = useState(true);
 

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
 // CAUSE the sign up button continue on showing in the middlle once i refresh the page 
  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <div className="right">

      {button && <Button buttonStyle='btn--test' href='#' color="secondary">
         {props.profile.initials}
        </Button>}
      
    </div>
  );
}

export default SignedIntLinks;