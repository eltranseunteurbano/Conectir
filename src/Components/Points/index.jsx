import React from 'react'
import './index.scss'
import GifCard from './GifCard'

const data = [
    {
        title: "Disfruta un domicilio gratis con Rappi",
        img: "/images/points/rappi.png",
        company: "rappi"
    }, {
        title: "Obten 50% descuento en Frutas y Verduras del Exito",
        img: "/images/points/exito.png",
        company: "exito"
    }, {
        title: "20% juegos para jugar en casa con tu familia",
        img: "/images/points/uno.png",
        company: "uno"
    }, 
]

const Points = () => {
    return(
        <article className="Points">
            <h1 className="Points__title">Cuentas con 50 puntos</h1>

            <article className="Points__wp">
                { 
                    data.map( ( card, i ) => {
                        return(
                            <GifCard
                                title = { card.title }
                                points = { Math.floor ( Math.random() * 100 ) }
                                img = { card.img }
                                company = { card.company }
                                key = { i }
                            />
                        )
                    })
                }
            </article>

        </article>
    )
}

export default Points