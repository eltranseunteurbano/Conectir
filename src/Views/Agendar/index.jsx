/* eslint-disable prefer-const */
import React from 'react';
import './index.scss';

import Calendar from '../../Components/Calendar';
import Input from '../../Elements/Input';
import Button from '../../Elements/Button';

import { HourRejected } from '../../assets/js/Alerts';
import * as Route from '../../assets/js/Routes';
import Header from '../../Components/Header';
import { useState } from 'react';

const Agendar = () => {

  const dateNow = new Date();

  const [dateSelected, setDateSelected] = React.useState();
  const [daySelect, setDaySelect] = useState("");

  const onChangeDate = date => {
    var today = new Date(date);

    let options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };

    setDaySelect(today.toLocaleDateString('es-MX', options))

    setDateSelected({ date });
  };

  const [startHour, setStartHour] = React.useState(`${dateNow.getHours() < 10 ? 0 + dateNow.getHours() : dateNow.getHours()}:${dateNow.getMinutes() < 10 ? `0${dateNow.getMinutes()}` : dateNow.getMinutes()}`);
  const [endHour, setEndHour] = React.useState(`${dateNow.getHours() < 10 ? 0 + dateNow.getHours() : dateNow.getHours() + 2}:${dateNow.getMinutes() < 10 ? `0${dateNow.getMinutes()}` : dateNow.getMinutes()}`);
  const checkStartHour = (value) => {
    setStartHour(value);

    if (parseInt(value.split(':')[0], 10) - (parseInt(endHour.split(':')[0], 10)) <= 0) {
      let newHour = () => {
        if ((parseInt(startHour.split(':')[0], 10) + 3) > 23) {
          return (parseInt(startHour.split(':')[0], 10) + 3) - 12;
        }
        return parseInt(startHour.split(':')[0], 10) + 3;
      };
      setEndHour(`${newHour() < 10 ? `0${newHour()}` : newHour()}:${endHour.split(':')[1]}`);
    }
  };
  const checkEndHour = (value) => {
    if (parseInt(startHour.split(':')[0], 10) - (parseInt(value.split(':')[0], 10)) <= 0) {
      setEndHour(value);
    } else {
      HourRejected();
    }
  };

  return (
    <>
      <Header />
      <main className="AgendaView">
        <div className="AgendaView__header">
          <h1>Comparte tu equipo</h1>
          <p>
            Cuéntanos en qué horario puedes prestar tu equipo. Selecciona uno o
            varios bloques de horas, y escoge si aplicarlos a un sólo día o
            repetir en varios.
        </p>
        </div>
        <article className="AgendaView__wrapper">
          <div className="AgendaView__wrapper__calendar">
            <Calendar shadow={false} onChangeValue={onChangeDate} />
          </div>
          <div className="AgendaView__wrapper__body">
            <div className="AgendaView__wrapper-hours">
              <h2>Selecciona la hora</h2>
              <Input title="Hora de inicio" type="time" value={startHour} exportValue={checkStartHour} />
              <Input title="Hora de final" type="time" value={endHour} exportValue={checkEndHour} />
            </div>
            <div className="AgendaView__wrapper-cards">
              <h2>Seleccionaste</h2>
              <div className="AgendaView__wrapper-cards__wp">
                {daySelect === "" ?
                  <p>Aún no has asignado tiempo libre</p>
                  :
                  <>
                    <div>
                      <p>{daySelect}</p>
                    </div>
                    <div style={{ marginTop: "20px" }}>
                      <p>{startHour} - {endHour}</p>
                    </div>

                  </>
                }
              </div>
            </div>
          </div>
        </article>
        <div className="AgendaView-btn">
          <Button title="Prestar mi equipo" type={dateSelected ? 'active' : 'disabled'} redirect={Route.HOME} />
        </div>

      </main>
    </>
  );
};

export default Agendar;



