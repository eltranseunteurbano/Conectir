import React, { useState } from "react";
import "./index.scss";
import S_Header from "../../Componets/Header";
import S_Body from "../../Componets/Body";
import S_CheckItem from "../../Componets/CheckItem";
import ProgressBar from "../../Componets/ProgressBar";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../../../redux/actions.js";
import StepContext from "../../Constans/StepContext";
import Database, { routes_database } from "../../../constants/firebase/database/database";
import S_CheckStep from "../CheckStep";
import User from "../../../constants/firebase/user/user";

const S_CheckList = () => {

    var store = useSelector((s) => s)
    var dispatch = useDispatch();

    var [solicitud, setSolicitud] = useState({
        userUID:"",
        caracteristicas: {
            procesador: "",
            ram: "",
            sistema: "",
            video: "",
            almacenamiento: ""
        },
        programs: [],
        questions: [],
        virtualMachine: "",
        horario: {}
    });

    const [pag, setPag] = useState(1);

    return <>
        <S_Header />
        <S_Body>
            {pag === 1 ?
                <ContentSCheckList solicitud={solicitud} setSolicitud={setSolicitud} setPag={setPag} /> :
                <S_CheckStep solicitud={solicitud} setSolicitud={setSolicitud} setPag={setPag}  />
            }

        </S_Body>

    </>
}

export default S_CheckList;

const ContentSCheckList = ({ solicitud, setSolicitud, setPag}) => {
    var store = useSelector((s) => s)
    var dispatch = useDispatch();

    return <div className="S_CheckList">
        <h1>Completa todos los pasos</h1>
        <ProgressBar value={store.process || 1} max="4" />
        <div className="S_CheckList__steps">
            <StepContext.Consumer >{
                stepManager => {
                    return (stepManager.steps.map((step, index) => {

                        var indexProcess = index + 1;
                        var state = "disabled";
                        if (indexProcess < store.process) {
                            state = "complete";
                        } else if (store.process === indexProcess) {
                            state = "active";
                        }

                        var r = () => {
                            setPag(2);
                         };
                        if (step.orden === "4") {
                            r = () => {
                                var result = solicitud;
                                result.userUID = User.uid;
                                Database.writeDatabasePush(routes_database.solicitud, result)
                                setPag(2);
                            }
                        }

                        return <S_CheckItem
                            key={index}
                            status={state}
                            orden={step.orden}
                            description={step.description}
                            action={step.action}
                            onRedirect={r}
                        />
                    }))
                }
            }</StepContext.Consumer>

        </div>
    </div>
}