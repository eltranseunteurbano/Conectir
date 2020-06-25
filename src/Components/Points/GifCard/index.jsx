import React from 'react';
import './index.scss';

import Button from '../../../Elements/Button';

const GifCard = ({
  title = 'Aquí va el titulo', points, img, company
}) => {
  const random = Math.floor(Math.random() * 100);
  const totalPoints = points - random;

  return (
    <div className="GifCard" style={totalPoints >= 0 ? { cursor: 'pointer' } : {}}>
      <div className="GifCard__content">
        <div className="GifCard__img">
          <img src={process.env.PUBLIC_URL + img} alt={`Descuento de ${company}`} />
        </div>
        <div className="GifCard__content-wp">
          <h2>{ title }</h2>
          <p>
            Valor:
            {' '}
            {random}
            {' '}
            puntos
          </p>
        </div>
      </div>
      <div className="GifCard__btn">
        <Button title={totalPoints < 0 ? 'Prestar mi equipo' : 'Redimir ahora'} type={totalPoints < 0 ? 'tertiary-active' : 'tertiary'} />
      </div>
    </div>
  );
};

export default GifCard;
