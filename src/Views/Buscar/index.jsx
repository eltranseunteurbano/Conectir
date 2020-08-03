/* eslint-disable react/no-array-index-key */
import React from 'react';
import './index.scss';

import Computer from '../../Components/Computer';
import Header from '../../Components/Header';
import { useState } from 'react';

const Buscar = () => {
  const [RAMFilter, setRAMFilter] = React.useState(['8GB', '12GB', '16GB', '24GB', '32GB', "64GB"]);
  const [grafica, setGrafica] = React.useState(['RX5000', 'GTX1050', 'RTX2060', 'GTX 1060Ti', 'RTX2080', 'Sin tarjeta']);
  const [procesador, setProcesador] = React.useState(['i7 9750H', 'I5 8300H', 'Threadripper 3990X']);
  const [almacenamiento, setAlmacenamiento] = React.useState([' 0 - 25GB', '25GB - 50GB', '50GB - 100GB', '100GB - 250GB', '250GB - 500GB', '500GB - 1TB']);


  const [selectFilter, setSelectFilter] = useState([]);


  const onSelectFilter = (type, value, view) => {
    var temFilter = selectFilter;
    var encontro = false;
    var index = -1;
    temFilter.forEach((t, i) => {
      if (t.type === type) {
        if (t.value === value) {
          encontro = true;
          index = i;
          return;
        }
      }
    })

    if (encontro === false) {
      temFilter.push({
        type,
        value,
        state: true
      })
    }

    if (index !== -1) {
      temFilter.splice(index, 1);
    }
    console.log("Actualizados", temFilter)

    var filterComputers = [];
    computadores.forEach((item) => {
      var encontro = false;
      for (let index = 0; index < temFilter.length; index++) {
        var s = temFilter[index];
        if (s.type === "almacenamiento") {
          var rango = (s.value).replace("GB", "").replace("GB", "").split(" - ");
          var valueAlmacenamiento = parseInt(item.almacenamiento);
          if (valueAlmacenamiento >= parseInt(rango[0]) && valueAlmacenamiento <= parseInt(rango[1])) {
            encontro = true;
            index = temFilter.length;
          }
        } else if (s.type === "procesador") {

          if ((item.procesador).indexOf(s.value) !== -1) {
            encontro = true;
          }
        } else if (s.type === "ram") {
          console.log((item.procesadorSize), " ... ", parseInt((s.value).replace("GB", "")))
          if ((item.procesadorSize) === parseInt((s.value).replace("GB", ""))) {
            encontro = true;
          }
        }
        else if (s.type === "grafica") {
          if ((item.video).indexOf(s.value) !== -1) {
            encontro = true;
          }
        }
      }
      if (encontro) {
        filterComputers.push(item);
      }
    })

    setSelectFilter(temFilter);
    if (temFilter.length === 0) {
      setViewComputadores(computadores)
    } else {
      setViewComputadores(filterComputers)
    }

  }

  const [computadores, setComputadores] = React.useState([{
    img: `${process.env.PUBLIC_URL}/Images/Computers/Computer ${Math.floor(Math.random() * (3 - 1) + 1)}.png`,
    name: 'MSI GF75',
    procesador: 'Intel Xeon(R) CPU-2026 V4',
    procesadorSize: 64,
    video: 'Integrado',
    almacenamiento: 100,
    id: 0
  }, {
    img: `${process.env.PUBLIC_URL}/Images/Computers/Computer ${Math.floor(Math.random() * (3 - 1) + 1)}.png`,
    name: 'ACER AN515',
    procesador: 'Intel Xeon(R) CPU-2026 V4',
    procesadorSize: 64,
    video: 'Integrado',
    almacenamiento: 100,
    id: 1
  }, {
    img: `${process.env.PUBLIC_URL}/Images/Computers/Computer ${Math.floor(Math.random() * (3 - 1) + 1)}.png`,
    name: 'MSI GF75',
    procesador: 'CentOS 7.x (64 bit) Linux',
    procesadorSize: 64,
    video: 'Integrados',
    almacenamiento: 100,
    id: 2
  }, {
    img: `${process.env.PUBLIC_URL}/Images/Computers/Computer ${Math.floor(Math.random() * (3 - 1) + 1)}.png`,
    name: 'MSI GF75',
    procesador: 'CentOS 7.x (64 bit) Linux',
    procesadorSize: 64,
    video: 'Integrados',
    almacenamiento: 100,
    id: 3
  }, {
    img: `${process.env.PUBLIC_URL}/Images/Computers/Computer ${Math.floor(Math.random() * (3 - 1) + 1)}.png`,
    name: 'ACER AN515',
    procesador: 'Intel Xeon(R) CPU-2026 V4',
    procesadorSize: 32,
    video: 'Integrados',
    almacenamiento: 350,
    id: 4
  }, {
    img: `${process.env.PUBLIC_URL}/Images/Computers/Computer ${Math.floor(Math.random() * (3 - 1) + 1)}.png`,
    name: 'MSI GF75',
    procesador: 'Intel Xeon(R) CPU-2026 V4',
    procesadorSize: 32,
    video: 'Integrados',
    almacenamiento: 350,
    id: 5
  }]);

  const [viewComputadores, setViewComputadores] = useState(computadores)

  return (
    <>
      <Header />
      <main className="Buscar">
        <article className="Buscar__wrapper">
          <div className="Buscar__wrapper__header">
            <h2>Encuentra tu equipo</h2>
            <p className="Buscar__wrapper__header-text">Busca entre las diferentes opciones que puedes encontrar usando el filtro, o navegando en la lista</p>
          </div>
          <div className="Buscar__wrapper__body">
            {viewComputadores.map((item) => {
              return (
                < Computer key={item.id} img={item.img} name={item.name} procesadorSize={item.procesadorSize} procesador={item.procesador} video={item.video} almacenamiento={item.almacenamiento} />
              )
            })}
          </div>
        </article>
        <article className="Buscar__filters">
          <h2>Categorías</h2>
          <article className="Buscar__filters__wp">
            <div className="Buscar__filters__wp-item">
              <h3>RAM</h3>
              <div className="Buscar__filters__wp-item__content">
                {RAMFilter.map((item, i) => (
                  <label className="Buscar__filters__wp-item__content__body" key={i} >
                    <input type="checkbox" className="Buscar__filters__wp-item__content__body__box"
                      onClick={(e) => {
                        onSelectFilter("ram", item, e.target);
                      }} />
                    <div className="Buscar__filters__wp-item__content__body__text">{item}</div>
                  </label>
                ))}
              </div>
            </div>

            <div className="Buscar__filters__wp-item">
              <h3>Tarjeta Gráfica</h3>
              <div className="Buscar__filters__wp-item__content">
                {grafica.map((item, i) => (
                  <label className="Buscar__filters__wp-item__content__body" key={i}>
                    <input type="checkbox" className="Buscar__filters__wp-item__content__body__box"
                      onClick={(e) => {
                        onSelectFilter("grafica", item, e.target);
                      }} />
                    <div className="Buscar__filters__wp-item__content__body__text">{item}</div>
                  </label>
                ))}
              </div>
            </div>

            <div className="Buscar__filters__wp-item">
              <h3>Procesador</h3>
              <div className="Buscar__filters__wp-item__content">
                {procesador.map((item, i) => (
                  <label className="Buscar__filters__wp-item__content__body" key={i}>
                    <input type="checkbox" className="Buscar__filters__wp-item__content__body__box"
                      onClick={(e) => {
                        onSelectFilter("procesador", item, e.target);
                      }} />
                    <div className="Buscar__filters__wp-item__content__body__text">{item}</div>
                  </label>
                ))}
              </div>
            </div>

            <div className="Buscar__filters__wp-item">
              <h3>Almacenamiento</h3>
              <div className="Buscar__filters__wp-item__content">
                {almacenamiento.map((item, i) => (
                  <label className="Buscar__filters__wp-item__content__body" key={i}>
                    <input type="checkbox" className="Buscar__filters__wp-item__content__body__box"
                      onClick={(e) => {
                        onSelectFilter("almacenamiento", item, e.target);
                      }} />
                    <div className="Buscar__filters__wp-item__content__body__text">{item}</div>
                  </label>
                ))}
              </div>
            </div>
          </article>
        </article>
      </main>
    </>
  );
};

export default Buscar;
