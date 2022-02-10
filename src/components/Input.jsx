import React from 'react'
import StyledInput from '../elements/StyledInputs'

export default function Input() {
    return (
        <div className="input__wrapper flex-col">
            <label className="input__label" htmlFor="">Label</label>
            <StyledInput />
        </div>
    )
}