import React from 'react';
import './index.scss';
import GifCard from './GifCard';

const data = [
  {
    title: 'Disfruta un domicilio gratis con Rappi',
    img: '/images/points/rappi.png',
    company: 'rappi',
    id: 1
  }, {
    title: 'Obten 50% descuento en Frutas y Verduras del Exito',
    img: '/images/points/exito.png',
    company: 'exito',
    id: 2
  }, {
    title: '20% juegos para jugar en casa con tu familia',
    img: '/images/points/uno.png',
    company: 'uno',
    id: 3
  }
];

const Points = () => (
  <article className="Points">
    <h1 className="Points__title">Cuentas con 50 puntos</h1>

    <article className="Points__wp">
      {
        data.map((card) => (
          <GifCard
            title={card.title}
            points={Math.floor(Math.random() * 100)}
            img={card.img}
            company={card.company}
            key={card.id}
          />
        ))
      }
    </article>

  </article>
);

export default Points;
