import React from "react";
import "./index.scss";
import S_Header from "../../Componets/Header";
import S_Body from "../../Componets/Body";
import S_CheckItem from "../../Componets/CheckItem";
import ProgressBar from "../../Componets/ProgressBar";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../../../redux/actions.js";
import StepContext from "../../Constans/StepContext";

const S_CheckList = () => {

    var store = useSelector((s) => s)
    var dispatch = useDispatch();

    const onSelectStep = (stepNumber) => {

        switch (stepNumber) {
            case 1:
                console.log("Paso 1")
                // dispatch({ type: actions.checkStepCurrent, payload: stepNumber })
                break;
            case 2:
                console.log("Paso 2")
                // dispatch({ type: actions.checkStepCurrent, payload: stepNumber })
                break;
            case 3:
                console.log("Paso 3")
                // dispatch({ type: actions.checkStepCurrent, payload: stepNumber })
                break;
            case 4:
                console.log("Paso 4")
                // dispatch({ type: actions.checkStepCurrent, payload: stepNumber })
                break;
            default:
                break;
        }

    }

    return <>
        <S_Header />
        <S_Body>
            <div className="S_CheckList">
                <h1>Completa todos los pasos</h1>
                <ProgressBar value="1" max="4" />
                <div className="S_CheckList__steps">
                    <StepContext.Consumer >{
                        stepManager => {
                            return (stepManager.steps.map((step, index) => {
                                return <S_CheckItem
                                    key={index}
                                    status="active"
                                    orden={step.orden}
                                    description={step.description}
                                    action={step.action}
                                />
                            }))
                        }
                    }</StepContext.Consumer>

                </div>
            </div>
        </S_Body>

    </>
}

export default S_CheckList;