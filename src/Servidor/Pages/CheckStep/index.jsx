import React from "react";
import S_Header from "../../Componets/Header";
import S_Body from "../../Componets/Body";
import { useSelector } from "react-redux";
import S_CheckItem from "../../Componets/CheckItem";
import StepContext from "../../Constans/StepContext";

import "./index.scss";
import Input from "../../../Elements/Input";
import { useState } from "react";

const S_CheckStep = () => {

    var store = useSelector((s) => s)

    const [procesador, setProcesador] = useState("");

    return <>
        <S_Header />
        <S_Body>
            <div className="S_CheckStep">
                <div className="S_CheckStep__step">
                    <StepContext.Consumer >{
                        stepManager => {
                            var step = stepManager.steps[store.process - 1];

                            return <S_CheckItem
                                status="active"
                                orden={step.orden}
                                description={step.description}
                                action={step.action}
                                view="view"
                            />
                        }
                    }</StepContext.Consumer>

                </div>
                <div className="S_CheckStep__content">
                    <h2>1/3</h2>
                    <h1>Características de mi equipo</h1>
                    <p>Aquí deberás completar las características con las cuales cuenta tu computador para determinar a qué tipo de estudiante podría servir</p>

                    <Input title="Procesador"
                        value={"Intel Core i7 9750H"}
                        placeholder="Intel Core i7 9750H"
                        exportValue={setProcesador} />
                </div>
            </div>
        </S_Body>

    </>
}

export default S_CheckStep;