import React from 'react'
import './index.scss'

import Header from '../../Components/Header'
import Agenda from '../../Components/Agenda'
import Points from '../../Components/Points'

const Home = () => {

    return(
        <main className="Home">
            <Header />
            <section className="Home__wp">
                <Agenda />
                <Points />
            </section>
        </main>
    )
}

export default Home