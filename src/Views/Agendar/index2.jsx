/* eslint-disable prefer-const */
import React, { useState } from 'react';
import './index2.scss';

import Calendar from '../../Components/Calendar';
import Input from '../../Elements/Input';
import Button from '../../Elements/Button';

import { HourRejected } from '../../assets/js/Alerts';
import * as Route from '../../assets/js/Routes';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from '../../redux/actions';
import User from '../../constants/firebase/user/user';
import emailjs from "emailjs-com";

const S_Agendar = ({ solicitud, setSolicitud, setPag }) => {

  var store = useSelector((s) => s)
  var dispatch = useDispatch();


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

  const agendar = (load) => {

    var templateParams = {
      toEmail: User.email,
      subject: "Reserva de equipos",
      message_html: `
      <h3>Hola, ${User.information.name} ${User.information.lastName}</h3>
      <h2>¡Felicidades!</h2>
      <p>Tu equipo ha sido agendado por un estudiante.</p>
      <h3>Fecha: ${daySelect}</h3>
      <h3>Hora: ${startHour}</h3>
      <p>Recuerda: Debes enviarnos los credenciales para ingresar a tu equipo una hora antes de su uso. No te preocupes, nosotros te recordaremos.</p>
    
      <h3>Equipo Conectir</h3>
    
      <p>Instagram: @conectir</p>
      <p>contacto@conectir.com</p>
      <p><a href="https://conectir.com/">www.conectir.com/</a></p>
    
    
    `
    };

    const YOUR_SERVICE_ID = "conectiremail";
    const YOUR_TEMPLATE_ID = "template_sjCFNfqb";

    emailjs.send(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, templateParams)
      .then(function (response) {
        alert("Su solicitud fue enviada con exito")
        load && load();
        console.log('SUCCESS!', response.status, response.text);
      }, function (error) {
        console.log('FAILED...', error);
      });

  }

  return (
    <main className="S_AgendaView">
      <div className="S_AgendaView__header">
        <h1>Agenda un día</h1>
        <p>
          Ahora que has cumplido con cada uno de los pasos sugeridos para proteger tu equipo, un asesor técnico se conectará contigo para validar que todo esté en orden. Selecciona el día que tengas disponible.
        </p>
      </div>
      <article className="S_AgendaView__wrapper">
        <div className="S_AgendaView__wrapper__calendar">
          <Calendar shadow={false} onChangeValue={onChangeDate} />
        </div>
        <div className="S_AgendaView__wrapper__body">
          <div className="S_AgendaView__wrapper-hours">
            <h2>Selecciona la hora</h2>
            <Input title="Hora de inicio" type="time" value={startHour} exportValue={checkStartHour} />
            <Input title="Hora de final" type="time" value={endHour} exportValue={checkEndHour} />
          </div>
          <div className="S_AgendaView__wrapper-cards">
            <h2>Seleccionaste</h2>
            <div className="S_AgendaView__wrapper-cards__wp">
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
      <div className="S_AgendaView-btn">
        <Button title="Agendar cita con asesor" data="button" type={dateSelected ? 'active' : 'disabled'} redirect={Route.SERVIDOR.CHECK}
          onClick={() => {
            var result = solicitud;
            result.horario = {
              dateSelected: dateSelected,
              startHour: startHour,
              endHour: endHour
            }
            setSolicitud(result);
            agendar(() => {
              dispatch({ type: actions.checkStepCurrent, payload: store.process + 1 });
              setPag(1)
            })

          }} />
      </div>

    </main>
  );
};

export default S_Agendar;



