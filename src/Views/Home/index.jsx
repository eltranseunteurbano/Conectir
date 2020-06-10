import React from 'react'
import './index.scss'

import Header from '../../Components/Header'
import Agenda from '../../Components/Agenda'
import Points from '../../Components/Points'
import CalendarComponent from '../../Components/Calendar'

const Home = () => {

    return(
        <main className="Home">
            <Header />
            <section className="Home__wp">
                <Agenda />
                <Points />
                <CalendarComponent />
            </section>
        </main>
    )
}

export default Home