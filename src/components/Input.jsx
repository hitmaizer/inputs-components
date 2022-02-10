import React from 'react'
import StyledInput from '../elements/StyledInputs'

export default function Input() {
    return (
        <div className="input__wrapper flex-col">
            <label htmlFor="" className="input__label">Label</label>
           <StyledInput error placeholder="Placeholder"/>
        </div>
    )
}