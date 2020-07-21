import React from 'react';
import './index.scss';

//redux
import { connect } from 'react-redux';
import { loginRequest } from '../../redux/actions';

import { useFirebaseApp, useUser } from "reactfire";

import { Link, Redirect } from 'react-router-dom'

import * as Routes from '../../assets/js/Routes';

import BackgroundImage from '../../Components/Background'
import Input from '../../Elements/Input'
import Button from '../../Elements/Button'
import { useEffect } from 'react'
import User from '../../constants/firebase/user/user'

const Login = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const [r_register, serR_register] = React.useState(false);
    const [r_home, serR_home] = React.useState(false);

    const loginIn = () => {
        User.login(email, password)
    }

    useEffect(() => {
        serR_register(false)
        User.getUserGithup((user, exist) => {
            if (user && !exist) {
                serR_register(true);
            } else if (exist) {
                serR_home(true);
            }
        });

        return (() => {
        })

    }, []);

    return (
        <main className="Login">
            {r_register && <Redirect to={Routes.REGISTER} />}
            {r_home && <Redirect to={Routes.HOME} />}

            <BackgroundImage />

            <section className="Login__form">
                <h1 className="Login__form__title" >Ingresa a Conectir</h1>
                <p className="Login__form__subtitle">Para  ser parte de la plataforma más solidaria del mundo, debes conectarte mediante GitHub</p>

                <Input title="Correo" type="email" placeholder="Escribe aquí tu correo" exportValue={setEmail} />
                <Input title="Contraseña" type="password" placeholder="Escribe aquí tu contraseña" exportValue={setPassword} />
                <Button title="Ingresar" type={email !== "" && password !== "" ? "active" : "disabled"} data="button" onClick={loginIn} redirect={Routes.HOME} />
                <Button title="Continuar con GitHub" data="github" redirect={Routes.HOME} />

                <h2 className="Login__form__register">¿Aún no tienes una cuenta? <Link to={Routes.REGISTER} onClick={() => { serR_register(true) }}>Regístrate</Link> </h2>
            </section>

        </main>
    );
};

const mapDispatchToProps = {
    loginRequest,
};

export default connect(null, mapDispatchToProps)(Login);