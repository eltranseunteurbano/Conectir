import React from 'react'
import './index.scss'

import { useHistory } from 'react-router-dom'

import { GoMarkGithub } from 'react-icons/go'

import { useEffect } from 'react';
import User from '../../constants/firebase/user/user'

const Button = ({ title = 'Aquí va el titulo', type = "active", data = "default", redirect }) => {

    let history = useHistory();

    const onClickGoTo = (link) => {

        if (data === 'github') {

            User.loginGithup();

        } else {
            history.push(link)
        }
    }

    return (
        data === 'default' ?
            <button disabled={type === 'disabled' ? true : false}
                className={type === "active" ? "button button-active" : type === 'secundary' ? "button button-secundary" : "button"}
                onClick={() => onClickGoTo(redirect)}
            >

                {type === 'disabed' ? "" : ""} {title}
            </button>
            :
            data === 'github' ?

                <button className="button button-github" onClick={() => onClickGoTo(redirect)}>
                    <span> <GoMarkGithub title="Ingresar con GitHub" /> </span>
                    {title}
                </button>

                :

                ''
    )

}

export default Button;