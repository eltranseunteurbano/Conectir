import React from 'react'
import './index.scss'

const GifCard = ({ title = "Aquí va el titulo", points, img, company }) => {

    let random = Math.floor ( Math.random() * 100 )
    let totalPoints = points - random;
    console.log(random)
    
    return(
        <div className="GifCard" style={ totalPoints >= 0 ? { cursor: 'pointer'} : {} }>
            <div className="GifCard__content">
                <h2>{ title }</h2>
                { totalPoints > 0 ?
                    <p>Tienes los puntos necesarios para adquirir esta promoción</p>
                    :
                    <p>Te faltan: { totalPoints * -1 } puntos</p>
                }
            </div>
            <div className="GifCard__img">
                <img src={ process.env.PUBLIC_URL + img } alt={ "Descuento de " + company }/>
            </div>
        </div>
    )

}

export default GifCard