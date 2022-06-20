import React from 'react';
import { Button } from '../button/Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      {/*<video src='./videos/video-1.mp4' autoPlay loop muted />*/}
      <h1>ROJ DEMENAGEMENT</h1>
      <p>DÉMÉNAGER SANS STRESS</p>
      <div className='hero-btns'>
        <Button href='/appl'
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          DEVIS GRATUIT
        </Button>
        

      </div>
       <div className='hero-parag'>
         <h3></h3>
           <h4>
              
          </h4>

      </div>
    </div>
  );
}

export default HeroSection;