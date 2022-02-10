import React from 'react'
import StyledInput from '../elements/StyledInputs'

export default function Input(props) {
    return (
        <div className="input__wrapper flex-col">
            <label htmlFor="" className="input__label">Label</label>
            {
            props.textArea ? 
            <textarea></textarea> : 
            <StyledInput md default placeholder="Placeholder" value={props.helperText}></StyledInput>
            }
            {props.sublabel && <span className="input__sublabel">Some Interesting Text</span>}
        </div>
    )
}