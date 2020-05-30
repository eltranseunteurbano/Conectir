import React from 'react'
import './index.scss'

import BackgroundImage from '../../Components/Background'
import Input from '../../Elements/Input'
import Button from '../../Elements/Button';

const Login = () => {

    const [ email, setEmail ] = React.useState("");
    const [ password, setPassword ] = React.useState("");

    return(
        <main className="Login">
            <BackgroundImage />

            <section className="Login__form">
                <h1 className="Login__form__title" >Ingresa a Conectir</h1>
                <p className="Login__form__subtitle">Para  ser parte de la plataforma más solidaria del mundo, debes <br />conectarte mediante GitHub</p>
                
                <Input title="Correo" type="email" placeholder="Escribe aquí tu correo" exportValue={ setEmail } />
                <Input title="Contraseña" type="password" placeholder="Escribe aquí tu contraseña" exportValue={ setPassword } />
                <Button title="Ingresar" type="active" data="default"/>
                <Button title="Continuar con GitHub" type="github" data="github"/>

                <h2 className="Login__form__register">¿Aún no tienes una cuenta? <a href="">Regístrate</a> </h2>
            </section>

        </main>
    )
}

export default Login