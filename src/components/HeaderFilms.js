import Link from 'next/link';
import React, { useState } from 'react';

const Headerfilms = () => {

    const [isScrolled, setIsScrolled] = useState(false);

  if (typeof window !== "undefined") {
   window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0? false : true);
    return () => (window.onscroll = null);
  }
  }
    return (
        
            
        <div className={isScrolled ? "header_films__scroll" : "header_films"}> 
     
      <nav className="header__nav ">

        <ul className=" header_films__ul">
          <li className="nav__item">
           
              <a className="header_films__title">Films</a>
            
          </li>
          <li className="nav__item">
            <input className='header_films__genres' type="" name="" value="" placeholder='Genres'/>
          </li>
         
           
          </ul>
      
      </nav>
      
    </div>
    );
}

export default Headerfilms;
