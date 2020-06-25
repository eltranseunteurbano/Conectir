/* eslint-disable no-nested-ternary */
import React from 'react';
import './index.scss';

import { useHistory } from 'react-router-dom';

import { GoMarkGithub } from 'react-icons/go';

const Button = ({
  title = 'Aquí va el titulo', type = 'active', data = 'default', redirect
}) => {
  const history = useHistory();

  const onClickGoTo = (link) => {
    history.push(link);
  };

  return (
    data === 'default'
      ? (
        <button
          disabled={type === 'disabled'}
          className={type === 'active' ? 'button button-active' : type === 'secundary' ? 'button button-secundary' : type === 'tertiary-active' ? 'button button-tertiary-active' : type === 'tertiary' ? 'button button-tertiary' : 'button'}
          onClick={() => onClickGoTo(redirect)}
          type="button"
        >

          { type === 'disabed' ? '' : ''}
          { title }
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
            { title }
          </button>
        )
        : ''
  );
};

export default Button;
