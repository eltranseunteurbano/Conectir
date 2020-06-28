import React from 'react';
import './index.scss';

import GifCard from '../../Components/Points/GifCard';

const MyPoints = () => {
  const [filters, setFilters] = React.useState([
    {
      id: 1,
      name: 'Ver todo',
      value: 'all',
      active: true
    }, {
      id: 2,
      name: 'Mercado',
      value: 'mercado',
      active: false
    }, {
      id: 3,
      name: 'Restaurantes',
      value: 'restaurantes',
      active: false
    }, {
      id: 4,
      name: 'Moda',
      value: 'moda',
      active: false
    }, {
      id: 5,
      name: 'Diseño',
      value: 'diseno',
      active: false
    }, {
      id: 6,
      name: 'Regalos',
      value: 'regalos',
      active: false
    }, {
      id: 7,
      name: 'Tecnología',
      value: 'tecnologia',
      active: false
    }
  ]);

  const [cupones, setCupones] = React.useState([{
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
  }, {
    title: 'Disfruta un domicilio gratis con Rappi',
    img: '/images/points/rappi.png',
    company: 'rappi',
    id: 14
  }, {
    title: 'Obten 50% descuento en Frutas y Verduras del Exito',
    img: '/images/points/exito.png',
    company: 'exito',
    id: 5
  }, {
    title: '20% juegos para jugar en casa con tu familia',
    img: '/images/points/uno.png',
    company: 'uno',
    id: 6
  }]);

  return (
    <main className="MyPoints">
      <article className="MyPoints__categorias">
        <h2>Categorías</h2>
        <div className="MyPoints__categorias__wp">
          {
            filters.map((item) => (
              <div
                className={item.active ? 'MyPoints__categorias__wp__item MyPoints__categorias__wp__item-active' : 'MyPoints__categorias__wp__item'}
                key={item.id}
              >
                <div className="MyPoints__categorias__wp__item-box" />
                <div className="MyPoints__categorias__wp__item-text">{item.name}</div>
              </div>
            ))
          }
        </div>
      </article>
      <article className="MyPoints__cupones">
        <div className="MyPoints__cupones__header">
          <h2>Cupones hechos para ti</h2>
          <div className="MyPoints__cupones__header-points">
            <p>
              Cuentas con
              {' '}
              <span>50</span>
              {' '}
              puntos
            </p>
          </div>
        </div>
        <div className="MyPoints__cupones__wp">
          {
            cupones.map((item) => (
              <GifCard
                title={item.title}
                img={item.img}
                company={item.company}
                key={item.id}
                points={Math.floor(Math.random() * 100)}
              />
            ))
          }
        </div>
      </article>
    </main>
  );
};

export default MyPoints;
