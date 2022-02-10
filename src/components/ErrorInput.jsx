import React from 'react';
import StyledInput from '../elements/StyledInputs'

export default function ErrorInput(props) {
    return (
        
            <div className="input__wrapper flex-col">
            <label htmlFor="" className="input__label error">Label</label>
                <div className="input__container">
                <StyledInput md error placeholder="Placeholder" defaultValue={props.helperText}/>
                </div>
            </div>
    )
}