import React from 'react'
import './index.scss';

const Date = ({ available = true }) => {

    return (
        <div className={ available ? "Date Date-active" : "Date"}>
            <div className="Date__calendar">
                <h4>Sábado</h4>
                <h1>20</h1>
            </div>
        
            <div className="Date__information">
                <h3>{ available ? "Equipo Agendado" : "Equipo Libre" }</h3>
                <p>10:30 - 20:00</p>
                <p>20:30 - 23:00</p>
            </div>
        </div>
    )

}

export default Date;