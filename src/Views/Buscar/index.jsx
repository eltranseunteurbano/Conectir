/* eslint-disable react/no-array-index-key */
import React from 'react';
import './index.scss';

import Computer from '../../Components/Computer';

const Buscar = () => {
  const [RAMFilter, setRAMFilter] = React.useState(['4GB', '8GB', '12GB', '16GB', '24GB', '32GB']);
  const [grafica, setGrafica] = React.useState(['RX5000', 'GTX1050', 'RTX2060', 'GTX1060 ti', 'RTX2080', 'Sin tarjeta']);
  const [procesador, setProcesador] = React.useState(['i7 9750H', 'I5 8300H', 'Threadripper 3990X']);
  const [almacenamiento, setAlmacenamiento] = React.useState([' 0 - 25GB', '25GB - 50GB', '50GB - 100GB', '100GB - 250GB', '250GB - 500GB', '500GB - 1TB']);

  const [computadores, setComputadores] = React.useState([{
    img: `${process.env.PUBLIC_URL}/Images/Computers/Computer ${Math.floor(Math.random() * (3 - 1) + 1)}.png`,
    name: 'MSI GF75',
    procesador: 'Intel i7 9750H',
    procesadorSize: 24,
    video: 'Nvidia GTX 1060Ti',
    almacenamiento: 2000,
    id: 0
  }, {
    img: `${process.env.PUBLIC_URL}/Images/Computers/Computer ${Math.floor(Math.random() * (3 - 1) + 1)}.png`,
    name: 'ACER AN515',
    procesador: 'Intel i7 9750H',
    procesadorSize: 1000,
    video: 'Nvidia GTX 1060Ti',
    almacenamiento: 128,
    id: 1
  }, {
    img: `${process.env.PUBLIC_URL}/Images/Computers/Computer ${Math.floor(Math.random() * (3 - 1) + 1)}.png`,
    name: 'MSI GF75',
    procesador: 'Intel i7 9750H',
    procesadorSize: 24,
    video: 'Nvidia GTX 1060Ti',
    almacenamiento: 2000,
    id: 2
  }, {
    img: `${process.env.PUBLIC_URL}/Images/Computers/Computer ${Math.floor(Math.random() * (3 - 1) + 1)}.png`,
    name: 'MSI GF75',
    procesador: 'Intel i7 9750H',
    procesadorSize: 24,
    video: 'Nvidia GTX 1060Ti',
    almacenamiento: 2000,
    id: 3
  }, {
    img: `${process.env.PUBLIC_URL}/Images/Computers/Computer ${Math.floor(Math.random() * (3 - 1) + 1)}.png`,
    name: 'ACER AN515',
    procesador: 'Intel i7 9750H',
    procesadorSize: 1000,
    video: 'Nvidia GTX 1060Ti',
    almacenamiento: 128,
    id: 4
  }, {
    img: `${process.env.PUBLIC_URL}/Images/Computers/Computer ${Math.floor(Math.random() * (3 - 1) + 1)}.png`,
    name: 'MSI GF75',
    procesador: 'Intel i7 9750H',
    procesadorSize: 24,
    video: 'Nvidia GTX 1060Ti',
    almacenamiento: 2000,
    id: 5
  }]);

  return (
    <main className="Buscar">
      <article className="Buscar__wrapper">
        <div className="Buscar__wrapper__header">
          <h2>Encuentra tu equipo</h2>
          <p className="Buscar__wrapper__header-text">Busca entre las diferentes opciones que puedes encontrar usando el filtro, o navegando en la lista</p>
        </div>
        <div className="Buscar__wrapper__body">
          {computadores.map((item) => (
            <Computer key={item.id} img={item.img} name={item.name} procesador={item.procesador} video={item.video} almacenamiento={item.almacenamiento} />
          ))}
        </div>
      </article>
      <article className="Buscar__filters">
        <h2>Categorías</h2>
        <article className="Buscar__filters__wp">
          <div className="Buscar__filters__wp-item">
            <h3>RAM</h3>
            <div className="Buscar__filters__wp-item__content">
              { RAMFilter.map((item, i) => (
                <div className="Buscar__filters__wp-item__content__body" key={i}>
                  <div className="Buscar__filters__wp-item__content__body__box" />
                  <div className="Buscar__filters__wp-item__content__body__text">{item}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="Buscar__filters__wp-item">
            <h3>Tarjeta Gráfica</h3>
            <div className="Buscar__filters__wp-item__content">
              { grafica.map((item, i) => (
                <div className="Buscar__filters__wp-item__content__body" key={i}>
                  <div className="Buscar__filters__wp-item__content__body__box" />
                  <div className="Buscar__filters__wp-item__content__body__text">{item}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="Buscar__filters__wp-item">
            <h3>Procesador</h3>
            <div className="Buscar__filters__wp-item__content">
              { procesador.map((item, i) => (
                <div className="Buscar__filters__wp-item__content__body" key={i}>
                  <div className="Buscar__filters__wp-item__content__body__box" />
                  <div className="Buscar__filters__wp-item__content__body__text">{item}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="Buscar__filters__wp-item">
            <h3>Almacenamiento</h3>
            <div className="Buscar__filters__wp-item__content">
              { almacenamiento.map((item, i) => (
                <div className="Buscar__filters__wp-item__content__body" key={i}>
                  <div className="Buscar__filters__wp-item__content__body__box" />
                  <div className="Buscar__filters__wp-item__content__body__text">{item}</div>
                </div>
              ))}
            </div>
          </div>
        </article>
      </article>
    </main>
  );
};

export default Buscar;
