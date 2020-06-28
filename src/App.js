/* eslint-disable spaced-comment */
import React from 'react';

// Lybraries
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//Assets
import * as Routes from './assets/js/Routes';

//Componentes
import Login from './Views/Login';
import Register from './Views/Register';
import Home from './Views/Home';
import Agendar from './Views/Agendar';
import MyPoints from './Views/MyPoints';
import Buscar from './Views/Buscar';

import Menu from './Components/Header';

//Styles
import './assets/styles/reset.css';
import './assets/styles/styleTitle.css';
import './assets/styles/general.css';

const App = () => {
  // eslint-disable-next-line no-console
  console.log('%cHey! Bienvenido a Conectir.', "color: #389CFF; font-size: 16px; font-weight: 400 ;font-family: 'Rubik', sans-serif");

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={Routes.INDEX}><Login /></Route>
        <Route exact path={Routes.REGISTER}><Register /></Route>
        <>
          <Menu />
          <Route exact path={Routes.HOME}><Home /></Route>
          <Route exact path={Routes.AGENDAR}><Agendar /></Route>
          <Route exact path={Routes.PUNTOS}><MyPoints /></Route>
          <Route exact path={Routes.BUSCAR}><Buscar /></Route>
        </>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
