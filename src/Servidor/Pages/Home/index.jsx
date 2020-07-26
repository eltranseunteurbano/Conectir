import React from "react";
import S_Header from "../../Componets/Header";
import S_Body from "../../Componets/Body";
import Button from "../../../Elements/Button";
import * as Routes from "../../../assets/js/Routes";

import "./index.scss";
import Database, { routes_database } from "../../../constants/firebase/database/database";
import { database } from "firebase";
const S_Home = () => {

    const crearSolicitud = () => {
        
    }

    return <>
        <S_Header />
        <S_Body>
            <div className="S_Home">
                <div>
                    <h1>Bienvenido, nombre usuario</h1>
                </div>
                <div>
                    <img src="\Images\servidor\icons\icon-computer-seguridad.svg" alt="" />
                </div>
                <div>
                    <p>Antes de empezar a prestar tu equipo, te ayudaremos a configurar tu seguridad para garantizar la privacidad de tus datos. </p>
                </div>
                <div>
                    <Button data="button" title="Continuar" style={{ marginBottom: "0", width: "200px" }} onClick={crearSolicitud} redirect={Routes.SERVIDOR.CHECK} />
                </div>
            </div>
        </S_Body>
    </>
}

export default S_Home;