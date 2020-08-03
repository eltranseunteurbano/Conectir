import React from 'react';
import './index.scss';

import Agenda from '../../Components/Agenda';
import Points from '../../Components/Points';
import Schedule from '../../Components/Schedule';
import Header from '../../Components/Header';

const Home = () => (
  <>
    <Header />
    <main className="Home">
      <section className="Home__wp">
        <div className="Home__wp__grid">
          <Agenda />
          <Points />
          <Schedule />
        </div>
      </section>
    </main>
  </>
);

export default Home;
