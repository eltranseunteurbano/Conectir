import React from 'react';
import './index.scss';
import Button from '../../Elements/Button';
import emailjs from "emailjs-com";

import Date from './Date';

const dates = [];

const Agenda = () => {
  const styleData = {
    padding: '0',
    paddingRight: '10px',
    backgroundColor: 'transparent',
    boxShadow: 'none',
    justifyContent: 'flex-start'
  };

  const agendar = () => {
/*
    var templateParams = {
      name: 'James',
      notes: 'Check this out!',
      toEmail: "david.salinasx10@gmail.com",
      subject: "Reserva de equipos",
      message_html: `<h1>Hola usuario de Conectir</h1>
      
      Hola nombredonante,

¡Felicidades!

Tu equipo ha sido agendado por un estudiante.

Fecha: Mes día, año
Hora: 10:00 A.M.

Recuerda: Debes enviarnos los credenciales para ingresar a tu equipo una hora antes de su uso. No te preocupes, nosotros te recordaremos. 

Equipo Conectir  


Conectir logo.png
Instagram: @conectir
contacto@conectir.com
www.conectir.com

`
    };

    const YOUR_SERVICE_ID = "conectiremail";
    const YOUR_TEMPLATE_ID = "template_sjCFNfqb";

    emailjs.send(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, templateParams)
      .then(function (response) {
        alert("Enviado")
        console.log('SUCCESS!', response.status, response.text);
      }, function (error) {
        console.log('FAILED...', error);
      });
*/
  }

  return (
    <article className="Agenda">
      <h1 className="Agenda__title"> Tu Agenda</h1>

      <article className="Agenda__wp" style={dates.length > 0 ? styleData : {}}>
        {dates.map((item) => (
          <Date available={false} key={item.id} />
        ))}

        {dates.length < 1 ? (
          <>
            <img
              src={`${process.env.PUBLIC_URL}/Images/agenda/empty.png`}
              alt="Agenda Vacia"
            />
            <p className="Agenda__wp__text">
              Aún no has agendado tu equipo, ¡encuentralo ahora!
            </p>
            <div className="Agenda__wp__btn" onClick={agendar}>
              <Button title="Prestar mi equipo" type="active" data="default" />
            </div>
          </>
        ) : (
            ''
          )}
      </article>
      {dates.length > 0 ? (
        <div className="Agenda__wp__btn">
          <Button title="Prestar mi equipo" type="active" data="default" />
        </div>
      ) : (
          ''
        )}
    </article>
  );
};

export default Agenda;
