import React from 'react'
import StyledInput from '../elements/StyledInputs'
import { Phone } from '@styled-icons/boxicons-solid/Phone'

export default function Input(props) {

    return (
        <div className="input__wrapper flex-col">
            <label htmlFor="" className="input__label">Label</label>
            <div className="input__container">
                {props.startIcon && <Phone size="24px" className="input__icon"/>}
                <StyledInput md default placeholder="Placeholder" value={props.helperText}/>
                {props.endIcon && <Phone size="24px" className="input__endicon"/>}
            </div>
        </div>
    )
}