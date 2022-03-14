import React, { useEffect } from "react";
import Link from "next/link";
import NetflixLogo from "../public/netflix-logo.png";

const Header = () => {

  return (
    <div className="header__main">
      <div className="header__logo">
      <Link href="/">
        <img src={NetflixLogo.src} alt="Netflix" />
      </Link>
      </div>
      <nav className="header__nav">
        <ul className="nav__list">
          <li className="nav__item">
            <Link href="/">
              <a className="nav__link">Accueil</a>
            </Link>
          </li>
          <li className="nav__item">
            <Link href="/home">
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

           

       
          <li className="nav__item nav__right">
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
            <Link href="/profil">
              <a className="nav__link nav__icon"><ion-icon name="person-outline"></ion-icon></a>
            </Link>
          </li>
          
        </ul>
      </nav>
      
    </div>
  );
};

export default Header;
