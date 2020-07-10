import React from "react";
import "./index.scss";

import { useFirebaseApp, useUser } from "reactfire";

//redux
import { connect } from 'react-redux';
import { loginRequest } from '../../redux/actions';

import { Link, useHistory } from "react-router-dom";
import * as Routes from "../../assets/js/Routes";

import BackgroundImage from "../../Components/Background";
import Input from "../../Elements/Input";
import Button from "../../Elements/Button";

import { Welcome, errorAlert } from '../../assets/js/Alerts';

const Login = (props) => {
  const firebase = useFirebaseApp();
  const user = useUser();
  let history = useHistory();

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const loginWithEmail = async () => {
      console.log(firebase)
    if (email && password !== "") {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
            props.loginRequest(user)
            setEmail("");
            setPassword("");
            Welcome();
            history.push(Routes.HOME);
        })
        .catch((error) => {
          console.error(error);
          if(error.code === 'auth/invalid-email'){
            errorAlert('Tienes un error en tu correo electrónico. Intentalo nuevamente.');
          } else if(error.code === 'auth/user-not-found'){
            errorAlert('No hay un usuario registrado con este correo electrónico.');
          } else if( error.code === 'auth/wrong-password'){
            errorAlert('Tu correo electrónico o contraseña estan equivocados.');
          }
        });
    }
  };

  return (
    <main className='Login'>
      <BackgroundImage />

      <section className='Login__form'>
        <h1 className='Login__form__title'>Ingresa a Conectir</h1>
        <p className='Login__form__subtitle'>
          Para ser parte de la plataforma más solidaria del mundo, debes
          conectarte mediante GitHub
        </p>

        <Input
          title='Correo'
          type='email'
          placeholder='Escribe aquí tu correo'
          exportValue={setEmail}
        />
        <Input
          title='Contraseña'
          type='password'
          placeholder='Escribe aquí tu contraseña'
          exportValue={setPassword}
        />
        <div
          onClick={loginWithEmail}
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <Button
            title='Ingresar'
            type={email !== "" && password !== "" ? "active" : "disabled"}
            data='default'
          />
        </div>
        <div
          onClick={loginWithEmail}
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <Button title='Continuar con GitHub' data='github' />
        </div>

        <h2 className='Login__form__register'>
          ¿Aún no tienes una cuenta?{" "}
          <Link to={Routes.REGISTER}>Regístrate</Link>{" "}
        </h2>
      </section>
    </main>
  );
};

const mapDispatchToProps = {
    loginRequest,
  };
  
  export default connect(null, mapDispatchToProps)(Login);
