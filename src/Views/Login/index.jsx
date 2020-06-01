import React from 'react'
import './index.scss'

import { Link } from 'react-router-dom'

import * as Routes from '../../assets/js/Routes'

import BackgroundImage from '../../Components/Background'
import Input from '../../Elements/Input'
import Button from '../../Elements/Button'

const Login = () => {

    const [ email, setEmail ] = React.useState("");
    const [ password, setPassword ] = React.useState("");

    return(
        <main className="Login">
            <BackgroundImage />

            <section className="Login__form">
                <h1 className="Login__form__title" >Ingresa a Conectir</h1>
                <p className="Login__form__subtitle">Para  ser parte de la plataforma más solidaria del mundo, debes conectarte mediante GitHub</p>
                
                <Input title="Correo" type="email" placeholder="Escribe aquí tu correo" exportValue={ setEmail } />
                <Input title="Contraseña" type="password" placeholder="Escribe aquí tu contraseña" exportValue={ setPassword } />
                <Button title="Ingresar" type={email !== "" && password !== "" ? "active" : "disabled" } data="default" redirect={Routes.HOME}/>
                <Button title="Continuar con GitHub" type="github" data="github" redirect={Routes.HOME}/>

                <h2 className="Login__form__register">¿Aún no tienes una cuenta? <Link to={ Routes.REGISTER }>Regístrate</Link> </h2>
            </section>

        </main>
    )
}

export default Login