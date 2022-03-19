import React, { useEffect, useState } from "react";
import Link from "next/link";
import NetflixLogo from "../public/netflix-logo.png";

const Header = () => {

  const [isScrolled, setIsScrolled] = useState(false);

  if (typeof window !== "undefined") {
   window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0? false : true);
    return () => (window.onscroll = null);
  }
  }
  

  return (
    <div className={isScrolled ? "header__main__scroll" : "header__main" } >
      <div className="header__logo">
      <Link href="/">
        <img src={NetflixLogo.src} alt="Netflix" />
      </Link>
      </div>
      <nav className="header__nav">

        <ul className="nav__list left">
          <li className="nav__item">
            <Link href="/">
              <a className="nav__link">Accueil</a>
            </Link>
          </li>
          <li className="nav__item">
            <Link href="/films">
              <a className="nav__link">Films</a>
            </Link>
          </li>
          <li className="nav__item">
            <Link href="/news">
              <a className="nav__link">Nouveautés les plus regardées</a>
            </Link>
          </li>
          <li className="nav__item">
            <Link href="/mylist">
              <a className="nav__link">Ma liste</a>
            </Link>
          </li>

           
          </ul>
       <div className="navigation_right">
          <li className="nav__item search_icon">
            {/* <Link href="/about"> */}
              <a className="nav__link nav__icon"><ion-icon name="search-outline"></ion-icon> </a>
            {/* </Link> */}
          </li>

          <li className="nav__item">
            <Link href="/direct">
              <a className="nav__link">DIRECT</a>
            </Link>
          </li>
          <li className="nav__item">
            <Link href="/young">
              <a className="nav__link">Jeunesse</a>
            </Link>
          </li>
          <li className="nav__item">
            <Link href="/notification">
              <a className="nav__link nav__icon"><ion-icon name="notifications-outline"></ion-icon></a>
            </Link>
          </li>
          <li className="nav__item">
            <Link href="/login">
              <a className="nav__link nav__icon"><ion-icon name="person-outline"></ion-icon></a>
            </Link>
          </li>
        
        </div>
      </nav>
      
    </div>
  );
};

export default Header;
