import React from 'react';
import './index.scss';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import Button from '../../Elements/Button';

const Computer = ({
  img, name = 'name', procesador = 'procesador', procesadorSize = 24, video = 'video', almacenamiento = 2
}) => (
  <div className="Computer">
    <figure className="Computer__img">
      <img src={img} alt={`Computador ${procesador}`} />
    </figure>
    <div className="Computer__data">
      <h3>{name}</h3>
      <div className="Computer__data__item">
        <h4>{procesador}</h4>
        <p>
          {procesadorSize}
          GB
          <span><figure><img src={`${process.env.PUBLIC_URL}/Images/Computers/RAM.png`} alt="RAM" /></figure></span>
        </p>
      </div>
      <div className="Computer__data__item">
        <h4>{video}</h4>
        <p>
          {almacenamiento}
          GB
          <span><figure><img src={`${process.env.PUBLIC_URL}/Images/Computers/Almacenamiento.png`} alt="Almacenamiento" /></figure></span>
        </p> 
      </div>
    </div>
    <div className="Computer__schedule">
      <div className="Computer__schedule__header">
        <h3>HORARIO</h3>
        <div>
          <span><FiChevronLeft /></span>
          <span><FiChevronRight /></span>
        </div>
      </div>
      <div className="Computer__schedule__wp">
        <div className="Computer__schedule__wp__item">
          <p className="Computer__schedule__wp__item-title">Lunes 22</p>
          <p className="Computer__schedule__wp__item-hour">08:00 - 14:30</p>
          <p className="Computer__schedule__wp__item-hour">08:00 - 14:30</p>
        </div>
        <div className="Computer__schedule__wp__item">
          <p className="Computer__schedule__wp__item-title">Lunes 22</p>
          <p className="Computer__schedule__wp__item-hour">08:00 - 14:30</p>
          <p className="Computer__schedule__wp__item-hour">08:00 - 14:30</p>
        </div>
      </div>
    </div>
    <div className="Computer__btn">
      <Button title="Conectarme" type="disabled" />
    </div>
  </div>
);

export default Computer;
