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


    return <>
        <S_Header />
        <S_Body>
            <div className="S_CheckList">
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

                                return <S_CheckItem
                                    key={index}
                                    status={state}
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