import React from "react";

import I_Reloj from "../../../Elements/Icons/I_Reloj";
import I_Display from "../../../Elements/Icons/I_Display";
import Button from "../../../Elements/Button";
import I_Calendar from "../../../Elements/Icons/I_Calendar";
import I_Seguridad from "../../../Elements/Icons/I_Seguridad";
import I_Light from "../../../Elements/Icons/I_Light";
import * as Routes from "../../../assets/js/Routes";

import "./index.scss";
import { useDispatch } from "react-redux";
import { actions } from "../../../redux/actions";

const S_CheckItem = ({ description = "Descripcion", status = "disabled", orden = 0, action = "Comenzar", view = "default",
    onRedirect = () => { } }) => {

    var dispatch = useDispatch();
    var icon = <I_Display status={status} />;

    switch (orden) {
        case "1":
            icon = <I_Display status={status} />;
            break;
        case "2":
            icon = <I_Seguridad status={status} />;
            break;
        case "3":
            icon = <I_Calendar status={status} />;
            break;
        case "4":
            icon = <I_Light status={status} />;
            break;
        default:
            icon = <I_Display status={status} />;
            break;
    }

    const onClick = () => {
        onRedirect();
   
        dispatch({ type: actions.checkStepCurrent, payload: parseInt(orden) })
    }

    return <div className={"S_CheckItem" + (status === "disabled" ? " S_CheckItem__disabled" : status === "complete" ? " S_CheckItem__complete" : "")}>
        <I_Reloj status={status} />
        <hr />
        <h1>Paso {orden}</h1>
        <p>{description}</p>
        {icon}
        <div className="button__choose">
            {view === "default" && status !== "complete" ?
                <Button data="button" onClick={onClick} type={(status === "disabled" ? status : "active")} title={action} /*redirect={Routes.SERVIDOR.STEP}*/ /> :
                <>{status === "complete" && <h1 className="S_CheckItem__complete__title">Completado
                    </h1>}</>
            }
        </div>


    </div>
}

export default S_CheckItem;