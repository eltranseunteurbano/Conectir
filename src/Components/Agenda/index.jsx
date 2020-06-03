import React from 'react'
import './index.scss'
import Button from '../../Elements/Button'

import Date from './Date'

const dates = [2,3 ,3,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]


const Agenda = () => {
    
    const styleData = {
          padding: '0',
          backgroundColor: 'transparent',
          boxShadow: 'none',
          justifyContent: 'flex-start'
    }

    return(
        <article className="Agenda">
            <h1 className="Agenda__title"> Tu Agenda</h1>

            <article className="Agenda__wp" style={ dates.length > 0 ? styleData : {} }>

                {
                    dates.map ( ( date, i ) => {
                        return(
                            <Date key={ i }/>
                        )
                    })
                }

                { dates.length < 1 ?
                <>
                    <img src={ process.env.PUBLIC_URL + 'images/agenda/empty.png' } alt="Agenda Vacia"/>
                    <p className="Agenda__wp__text">Aún no has agendado tu equipo, ¡encuentralo ahora!</p>
                    <div className="Agenda__wp__btn">
                        <Button title="Prestar mi equipo" type="active" data="default" />
                    </div>
                </>
                :
                ''
            }

            </article>
            {
                dates.length > 0 ?
                <div className="Agenda__wp__btn">
                    <Button title="Prestar mi equipo" type="active" data="default" />
                </div>
                :
                ''
            }
        </article>
    )

}

export default Agenda