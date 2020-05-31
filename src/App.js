import React from 'react';
import Login from './Views/Login'
import SplashScreen from './Components/SplashScreen'

import './assets/styles/reset.css'
import './assets/styles/styleTitle.css'
import './assets/styles/general.css'

function App() {
 
  console.log("%cHey! Bienvenido a Conectir.", "color: #389CFF; font-size: 16px; font-weight: 400 ;font-family: 'Rubik', sans-serif");

  return (
    <div className="App appear">
      <Login />
    </div>
  );
}

export default App;
