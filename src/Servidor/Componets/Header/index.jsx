import React from "react";
import Logo from "../../../Elements/Logo";
import { Link } from "react-router-dom";
import * as Routes from "../../../assets/js/Routes";

import "./index.scss";

const S_Header = () => {

    return <div className="S_Header">
        <Link to={Routes.SERVIDOR.HOME} className="header__content__logo">
            <Logo />
        </Link>

        <div>
            <Link to={Routes.SERVIDOR.HOME} className="S_Link">Ayuda</Link>
            <Link to={Routes.SERVIDOR.HOME} className="S_Link">Salir</Link>
        </div>
    </div>
}

export default S_Header;