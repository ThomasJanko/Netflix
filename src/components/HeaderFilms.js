import Link from 'next/link';
import React, { useState } from 'react';

const Headerfilms = () => {

    const [isScrolled, setIsScrolled] = useState(false);
    const [inputText, setInputText] = useState("");


    let inputHandler = (e) => {
      //convert input text to lower case
      var lowerCase = e.target.value.toLowerCase();
      setInputText(lowerCase);
      console.log(inputText)
    };


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
            <input className='header_films__genres'  placeholder='Genres'  onChange={inputHandler}/>
            {/* type="" name="" value="" */}
          </li>
         
           
          </ul>
      
      </nav>
      
    </div>
    );
}

export default Headerfilms;
