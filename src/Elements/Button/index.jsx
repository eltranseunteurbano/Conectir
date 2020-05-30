import React from 'react'
import './index.scss'

import { GoMarkGithub } from 'react-icons/go'

const Button = ({ title = 'Aquí va el titulo', type = "active", data = "default" }) => {

    return(
        data === 'default' ?
            <button disabled = { type === 'disabled' ? true : false } 
                className = { type === "active" ? "button-active" : type === 'secundary' ? "button-secundary" : ""}>
            
                { type === 'disabed' ? "" : ""} { title } 
            </button>
        :
        data === 'github' ?
         
        <button className = "button-github" >
            <span> <GoMarkGithub title="Ingresar con GitHub"/> </span>
         { title } 
        </button>

        :
        
        ''
    )

}

export default Button;