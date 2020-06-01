import React from 'react'
import './index.scss'

import { Link, NavLink } from 'react-router-dom'
import { AiOutlineHome, AiOutlineCalendar, AiOutlineTag, AiOutlineBell, AiOutlineDown } from 'react-icons/ai'

import * as Routes from '../../assets/js/Routes'

import Logo from '../../Elements/Logo'
import ProfileImage from '../ProfileImage'

const Header = () => {

    return(
        <header className="header">
            <article className="header__content">
                <Link to={Routes.HOME} className="header__content__logo">
                    <Logo />
                </Link>

                <nav className="header__content__nav">
                    <NavLink to={ Routes.HOME } activeClassName="header__content__nav-active"> <span><AiOutlineHome/></span>Inicio </NavLink>
                    <NavLink to={ Routes.AGENDAR } activeClassName="header__content__nav-active"> <span><AiOutlineCalendar /></span>Agendar </NavLink>
                    <NavLink to={ Routes.PUNTOS } activeClassName="header__content__nav-active"> <span><AiOutlineTag/></span> Mis puntos </NavLink>
                </nav>

                <div className="header__content__user">
                    <span className="header__content__user__notification"><AiOutlineBell /></span>
                    <div className="header__content__user__profile">
                        <ProfileImage />
                        <span className="header__content__user__down"><AiOutlineDown /></span>
                    </div>
                </div>
            </article>
        </header>
    )
}

export default Header