import React from 'react'
import './index.scss'

import Header from '../../Components/Header'
import Agenda from '../../Components/Agenda'

const Home = () => {

    return(
        <main className="Home">
            <Header />
            <section className="Home__wp">
                <Agenda />
            </section>
        </main>
    )
}

export default Home