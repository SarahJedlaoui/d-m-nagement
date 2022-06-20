import React from 'react';
import './Button.css';
import {Link} from 'react-router-dom';

// array of styles // css classes
const STYLES =['btn--primary', 'btn--outline','btn--test'];
const SIZES = ['btn--medium','btn--large'];

export const Button =({
   children ,
   type,
   onClick ,
   buttonStyle,
   buttonSize 
   }) => {
   //const checkButtonStyle = STYLES.includes{buttonStyle} ? buttonStyle : STYLES[0] 
   //if the coding component have a button style if that is true it will be whatever the buttonstyle we created for it , nd if it's not true we gonna set the value to the first option of our styles array 
   const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0] ;

   const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0] ; 

   return(
      <Link to='/appl' className='btn-mobile'>
         <button className={`btn ${checkButtonStyle} ${checkButtonSize}`}  onClick ={onClick}
         type={type} 
         >
            {children}
         </button>
      </Link>
   );
} ; 

