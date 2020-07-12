import React from 'react'
import './index.scss'

import { Link, Redirect } from 'react-router-dom'

import * as Routes from '../../assets/js/Routes'

import BackgroundImage from '../../Components/Background'
import Input from '../../Elements/Input'
import Button from '../../Elements/Button'
import { useEffect } from 'react'
import User from '../../constants/firebase/user/user'

const Login = () => {

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const [r_register, serR_register] = React.useState(false);

    useEffect(() => {
        serR_register(false) 
        User.getUserGithup((user) => {
            if(user){
                serR_register(true) 
            }
        }, []);
    })

    return (
        <main className="Login">
            {r_register && <Redirect to={Routes.REGISTER} />}

            <BackgroundImage />

            <section className="Login__form">
                <h1 className="Login__form__title" >Ingresa a Conectir</h1>
                <p className="Login__form__subtitle">Para  ser parte de la plataforma más solidaria del mundo, debes conectarte mediante GitHub</p>

                <Input title="Correo" type="email" placeholder="Escribe aquí tu correo" exportValue={setEmail} />
                <Input title="Contraseña" type="password" placeholder="Escribe aquí tu contraseña" exportValue={setPassword} />
                <Button title="Ingresar" type={email !== "" && password !== "" ? "active" : "disabled"} data="default" redirect={Routes.HOME} />
                <Button title="Continuar con GitHub" data="github" redirect={Routes.HOME} />

                <h2 className="Login__form__register">¿Aún no tienes una cuenta? <Link onClick={() => { serR_register(true) }}>Regístrate</Link> </h2>
            </section>

        </main>
    )
}

export default Login