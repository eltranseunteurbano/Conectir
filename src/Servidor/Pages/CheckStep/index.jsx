import React from "react";
import S_Header from "../../Componets/Header";
import S_Body from "../../Componets/Body";
import { useSelector } from "react-redux";
import S_CheckItem from "../../Componets/CheckItem";
import StepContext from "../../Constans/StepContext";

import "./index.scss";
import Input from "../../../Elements/Input";
import { useState } from "react";
import Button from "../../../Elements/Button";

const S_CheckStep = () => {

    var store = useSelector((s) => s)

    var process = store.process - 1;


    return <>
        <S_Header />
        <S_Body>
            <div className="S_CheckStep">
                <div className="S_CheckStep__step">
                    <StepContext.Consumer >{
                        stepManager => {
                            var step = stepManager.steps[process];

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
                <div className="S_CheckStep__container">
                    {process === 0 ? <S_Step_1 /> :
                        process === 1 ? <S_Step_2 /> :
                            process === 2 ? <S_Step_3 /> : <></>
                    }

                </div>

            </div>
        </S_Body>

    </>
}

export default S_CheckStep;

const Navegation = ({ next, back }) => {
    return <div className="S_CheckStep__navegation">
        <div onClick={back}>
            <Button title="Regresar" type="secundary" data="default" />
        </div>

        <div onClick={next}>
            <Button title="Continuar"
                type={"active"}
                data='default' />
        </div>
    </div>
}


const S_Step_1 = () => {

    const [procesador, setProcesador] = useState("Intel Core i7 9750H");
    const [ram, setRam] = useState("24 GB");
    const [sistema, setSistema] = useState("Windows 10 Pro");
    const [video, setVideo] = useState("Nvidia RTX 2080");
    const [alamcenamiento, setAlmacenamiento] = useState("440 GB");
    const [programs, setPrograms] = useState([
        { name: "Adobe Full Suite", value: false },
        { name: "Photoshop", value: false },
        { name: "Illustrator", value: false },
        { name: "Premiere Pro", value: false },
        { name: "After Effects", value: false },
        { name: "Adobe XD", value: false },
        { name: "Media Encoder", value: false },
        { name: "Lightroom", value: false },
        { name: "AutoCAD", value: false },
        { name: "Maya", value: false },
        { name: "Solidworks", value: false },
        { name: "3DS Max", value: false },
        { name: "Android Studio", value: false },
        { name: "Eclipse", value: false },
        { name: "Visual Studio", value: false },
        { name: "MySQL", value: false },
        { name: "SQL Server", value: false },
        { name: "SQL Developer", value: false },
        { name: "MongoDB", value: false },
        { name: "Hadoop", value: false },
        { name: "Anaconda", value: false },
        { name: "R", value: false },
        { name: "R Studio", value: false },
        { name: "Matlab", value: false },
    ]);

    const [whenInit, setWhenInit] = useState("");
    const [whatUse, setWhatUse] = useState("");
    const [whenUse, setWhenUse] = useState("");
    const [whatSecondUse, setWhatSecondUse] = useState("");

    const [page, setPage] = useState(1);

    const goBack = () => {
        if (page - 1 > 0) {
            setPage(page - 1);
        }
    }

    const next = () => {
        if (page + 1 <= 3) {
            setPage(page + 1);
        }
    }

    const checkProgram = (event, name) => {
        var programsTemp = programs;
        programsTemp["Adobe Full Suite"] = event.target.checked;
        setPrograms(programsTemp)
    }

    const viewStep_1 = <>
        <div className="S_CheckStep__container__title">
            <h2>1/3</h2>
            <h1>Características de mi equipo</h1>
            <p>Aquí deberás completar las características con las cuales cuenta tu computador para determinar a qué tipo de estudiante podría servir</p>
        </div>
        <div className="S_CheckStep__container__information">

            <section className="S_CheckStep__content__information">

                <div className="S_CheckStep__content__information__type">

                    <Input title="Procesador"
                        value={procesador}
                        placeholder="Intel Core i7 9750H"
                        exportValue={setProcesador} />

                    <Input title="RAM"
                        value={ram}
                        placeholder="24 GB"
                        exportValue={setRam} />

                    <Input title="Sistema Operativo"
                        value={sistema}
                        placeholder="Windows 10 Pro"
                        exportValue={setSistema} />
                </div>
                <div className="S_CheckStep__content__information__type">
                    <Input title="Tarjeta de Vídeo"
                        value={video}
                        placeholder="Nvidia RTX 2080"
                        exportValue={setVideo} />

                    <Input title="Almacenamiento Disponible"
                        value={alamcenamiento}
                        placeholder="440 GB"
                        exportValue={setAlmacenamiento} />
                </div>
            </section>
        </div>
    </>

    const viewStep_2 = <>
        <div className="S_CheckStep__container__title">
            <h2>2/3</h2>
            <h1>Programas que tengo instalados</h1>
            <p>Selecciona los programas que tiene instalado tu equipo</p>
        </div>
        <div className="S_CheckStep__container__information">
            <div className="S_CheckStep__content__programs">
                {programs.map((program, i) => {
                    return <Input
                        key={i}
                        type="checkbox"
                        title={program.name}
                        value={program.value}
                        exportValue={(event) => {
                            var programas = programs;
                            programas[i].value = event.target.checked;
                            setPrograms(programas);
                        }} />
                })}
            </div>
        </div>
    </>

    const viewStep_3 = <>
        <div className="S_CheckStep__container__title">
            <h2>3/3</h2>
            <h1>Uso de tu computador</h1>
            <p>Queremos conocer un poco más sobre el uso que le das a tu computador, estas preguntas no son obligatorias.</p>
        </div>
        <div className="S_CheckStep__container__information">
            <div className="S_CheckStep__content__information__use">

                <Input title="¿Hace cuánto compraste tu computador?"
                    value={whenInit}
                    placeholder="1 año"
                    exportValue={setWhenInit} />

                <Input title="Actividad que más haces"
                    value={whatUse}
                    placeholder="Navegar redes sociales"
                    exportValue={setWhatUse} />

                <Input title="¿Cuánto tiempo pasas en tu computador?"
                    value={whenUse}
                    placeholder="1 año"
                    exportValue={setWhenUse} />

                <Input title="Actividad secundaria típica"
                    value={whatSecondUse}
                    placeholder="Jugar juegos pesados (5gb o más)"
                    exportValue={setWhatSecondUse} />

            </div>
        </div>
    </>

    return (
        <>
            <div className="S_CheckStep__content">
                {page === 1 ? viewStep_1 :
                    page === 2 ? viewStep_2 :
                        page === 3 ? viewStep_3 : <></>}
            </div>

            <Navegation next={next} back={goBack} />
        </>
    )
}



const S_Step_2 = () => {

    const [page, setPage] = useState(1);

    const goBack = () => {
        if (page - 1 > 0) {
            setPage(page - 1);
        }
    }

    const next = () => {
        if (page + 1 <= 3) {
            setPage(page + 1);
        }
    }

    const step_1 = <>

        <div className="S_CheckStep__container__title">
            <h2>1/3</h2>
            <h1>Opciones de para protegerte</h1>
            <p>Escoge una de las opciones que quieras instalar para proteger correctamente tus archivos, de este modo ningún estudiante podrá tener acceso a tus archivos privados.</p>
        </div>
        <div className="S_CheckStep__container__information">

        </div>
    </>

    const step_2_1 = <>
        <div className="S_CheckStep__container__title">
            <h2>2/3</h2>
            <h1>Instalación de SandBox</h1>
            <p>A continuación encontrarás unos pasos que debes seguir para instalar correctamente SandBox.</p>
        </div>
        <div className="S_CheckStep__container__information">
            <ol>
                <li>Antes de empezar, debes tener en cuenta que SandBox sólo funciona en Windows 10 Home.</li>
                <li>Ingresa a Programas y Características de tu equipo, luego das click al texto de “Activar o Desactivar Características de Windows.</li>
                <li>
                    Selecciona validar “Espacio Aislado de Windows” o “Windows SandBox”.
            </li>
                <li>
                    Abre SandBox, allí podrás instalar los programas que quieres prestarle a otros estudiantes para acceder mediante tu equipo. Recuerda: Si cierras la pestaña de SandBox se perderán todos los archivos y e instalaciones realizadas.
            </li>
            </ol>


        </div >
    </>

    const step_2_2 = <>
        <div className="S_CheckStep__container__title">
            <h2>2/3</h2>
            <h1>Instalación de SandBox</h1>
            <p>A continuación encontrarás unos pasos que debes seguir para instalar correctamente VirtualBox.</p>
        </div>
        <div className="S_CheckStep__container__information">
            <ol>
                <li>Ingresa a /www.virtualbox.org/wiki/Downloads o haz click aquí para abrir la página web y descarga VirtualBox de acuerdo a tus sistema operativo (Windows, Mac Os).</li>
                <li>Una vez hayas descargado VirtualBox, abre el programa para instalarlo en tu equipo siguiendo las configuraciones predeterminadas con el botón next. </li>
                <li>
                    Te recomendamos seguir las indicaciones que encontrarás en este vídeo para que no te pierdas instalando VirtualBox en
                <a href="https://www.youtube.com/watch?v=jos3MTgIBJE" target="_blank" rel="noopener noreferrer">https://www.youtube.com/watch?v=jos3MTgIBJE</a>

                </li>
                <li>
                    Una vez hayas terminado los procesos, dale click en iniciar e instala todo lo necesario para prestar tu equipo blindado.
    </li>
            </ol>


        </div>
    </>


    const step_3 = <>
        <div className="S_CheckStep__container__title">
            <h2>3/3</h2>
            <h1>Instala TeamViewer</h1>
            <p>Ahora que has blindado tu equipo, debes instalar TeamViewer para que los estudiantes accedan remotamente a tu equipo</p>
        </div>

        <div className="S_CheckStep__container__information">
            <ol>
                <li>Descarga TeamViewer en el siguiente enlace:<span> </span>
                    <a href="https://www.teamviewer.com/" target="_blank" rel="noopener noreferrer">https://www.teamviewer.com/</a>
                </li>
                <li>
                    Instala TeamViewer con las configuraciones recomendadas
                </li>
                <li>Cuando vayas a prestar un equipo, te pediremos tu ID y Contraseña que podrás ver en TeamViewer para que los estudiantes se puedan concectar.</li>
            </ol>

        </div>
    </>

    return <>

        <div className="S_CheckStep__content">
            {page === 1 ? step_1 :
                page === 2 ? step_2_1 :
                    page === 2.5 ? step_2_2 :
                        page === 3 ? step_3 : <></>
            }
        </div>

        <Navegation next={next} back={goBack} />

    </>
}


const S_Step_3 = () => {

    const [page, setPage] = useState(1);

    const goBack = () => {
        if (page - 1 > 0) {
            setPage(page - 1);
        }
    }

    const next = () => {
        if (page + 1 <= 3) {
            setPage(page + 1);
        }
    }

    return <div>

    </div>
}