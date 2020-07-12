import React, { useState } from 'react';
import './index.scss';

import { Link, NavLink, Redirect } from 'react-router-dom';
import {
  AiOutlineHome, AiOutlineCalendar, AiOutlineTag, AiOutlineBell, AiOutlineDown, AiOutlineUp
} from 'react-icons/ai';
import { FiSearch } from 'react-icons/fi';

import * as Routes from '../../assets/js/Routes';

import Logo from '../../Elements/Logo';
import ProfileImage from '../ProfileImage';
import User from '../../constants/firebase/user/user';

const Header = () => {

  const [viewOption, setViewOption] = useState(false);
  const [goToLogin, setGoToLogin] = useState(false);

  const logOut = () => { 
    User.logout((exit)=>{
      if(exit){
        setGoToLogin(true);
      }
    });
  }

  return (
    <header className="header">
      {goToLogin && <Redirect to={Routes.INDEX} />}
      <article className="header__content">
        <Link to={Routes.HOME} className="header__content__logo">
          <Logo />
        </Link>

        <nav className="header__content__nav">
          <NavLink to={Routes.HOME} activeClassName="header__content__nav-active">
            <span><AiOutlineHome /></span>
          Inicio
        </NavLink>
          <NavLink to={Routes.AGENDAR} activeClassName="header__content__nav-active">
            <span><AiOutlineCalendar /></span>
          Agendar
        </NavLink>
          <NavLink to={Routes.BUSCAR} activeClassName="header__content__nav-active">
            <span><FiSearch /></span>
          Buscar
        </NavLink>
          <NavLink to={Routes.PUNTOS} activeClassName="header__content__nav-active">
            <span><AiOutlineTag /></span>
          Mis puntos
        </NavLink>
        </nav>

        <div className="header__content__user">
          <span className="header__content__user__notification"><AiOutlineBell /></span>
          <div className="header__content__user__profile"
            //  onClick={() => { setViewOption(!viewOption) }}
            onMouseOver={() => { setViewOption(true) }}
            onMouseOut={() => { setViewOption(false) }}
          >
            <ProfileImage />
            <span className="header__content__user__down"

            >{viewOption ? <AiOutlineUp /> : <AiOutlineDown />}</span>
            <div className="header__content__user__options">
              <ul className="header__content__user__options__list">
                <li className="header__content__user__options__list__item"
                  onClick={logOut}>Cerrar sessión</li>
              </ul>
            </div>
          </div>
        </div>
      </article>
    </header>
  )
};

export default Header;
