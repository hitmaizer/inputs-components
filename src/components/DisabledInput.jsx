import React from 'react';
import StyledInput from '../elements/StyledInputs'

export default function DisabledInput(props) {
    return (
        
            <div className="input__wrapper flex-col">
            <label htmlFor="" className="input__label">Label</label>
                <div className="input__container">
                <StyledInput md disabled placeholder="Placeholder" defaultValue={props.helperText}/>
                </div>
            </div>
    )
}