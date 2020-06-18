import React from 'react'
import './index.scss'

import Header from '../../Components/Header'
import Agenda from '../../Components/Agenda'
import Points from '../../Components/Points'
import Schedule from '../../Components/Schedule'

const Home = () => {

    return(
        <main className="Home">
            <Header />
            <section className="Home__wp">
                <div className="Home__wp__grid">
                    <Agenda />
                    <Points />
                    <Schedule />
                </div>
            </section>
        </main>
    )
}

export default Home