import React from 'react'
import './index.scss'

import Reminder from './Reminder'

const dates = [
    {
        date: "Sabado 20",
        text: "Recuerda encender tu equipo entre las 10:30 - 20:30",
    },{
        date: "Jueves 28",
        text: "Activa TW a las 8:20 "
    }
];

const Recordatorio = () => {

    return(
        <article className="Recordatorio">
            <p className="Recordatorio__title">Recordatorios</p>
            {
                dates.length > 0 ? 
                
                <div className="Recordatorio__wrapper">
                    { dates.map( ( item, i ) => {
                        return(
                            <Reminder date = { item.date } text = { item.text } key = { i } last = { dates.length - 1 === i ? true : false } />
                        )
                    }) }
                </div>
                
                :
                <div className="Recordatorio__wrapper-empty">
                    <img src={ process.env.PUBLIC_URL + '/Images/recordatorio/empty.svg' } alt="Recordatorio vacio"/>
                    <p>Aún no tienes recordatorios</p>
                </div>
            }
        </article>
    )
}

export default Recordatorio