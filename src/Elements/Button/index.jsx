/* eslint-disable no-nested-ternary */
import React from 'react';
import './index.scss';

import { useHistory } from 'react-router-dom';

import { GoMarkGithub } from 'react-icons/go';
import User from '../../constants/firebase/user/user';

const Button = ({
    title = 'Aquí va el titulo', type = 'active', data = 'default', redirect, onClick
}) => {
    const history = useHistory();

    const onClickGoTo = (link) => {
        if (data === 'github') {
            User.loginGithup();
        } else if (data === "button") { 
            onClick &&  onClick()
            history.push(link)
        }
        else {
            history.push(link)
        }
    };

    return (
        (data === 'default' || data === 'button')
            ? (
                <button
                    disabled={type === 'disabled'}
                    className={type === 'active' ? 'button button-active' : type === 'secundary' ? 'button button-secundary' : type === 'tertiary-active' ? 'button button-tertiary-active' : type === 'tertiary' ? 'button button-tertiary' : 'button'}
                    onClick={() => onClickGoTo(redirect)}
                    type="button"
                >

                    {type === 'disabed' ? '' : ''}
                    {title}
                </button>
            )
            : data === 'github'
                ? (
                    <button
                        className="button button-github"
                        onClick={() => onClickGoTo(redirect)}
                        type="button"
                    >
                        <span>
                            <GoMarkGithub title="Ingresar con GitHub" />
                        </span>
                        {title}
                    </button>
                )
                : ''
    );
};

export default Button;
