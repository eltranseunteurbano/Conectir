import React from 'react'
import './index.scss'

const Input = ({ title = 'Titulo', type = 'text', placeholder = 'Aquí va un mensaje', exportValue }) => {
    
    const onChangeValue = ( event ) => {

        if( type === 'number'){
            exportValue( parseFloat( event ) )
        }
        
        exportValue( event );
    }
    

    return(
        <label className="Input">
            <p>{title}</p>
            <input type={type} placeholder={placeholder} onChange={ ( event ) => onChangeValue( event.target.value ) }/>
        </label>
    )
}

export default Input;