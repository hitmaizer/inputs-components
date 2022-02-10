import React from 'react';
import StyledInput from '../elements/StyledInputs'

export default function DefaultInput(props) {
    return (
        
            <div className="input__wrapper flex-col">
            <label htmlFor="" className="input__label">Label</label>
                <div className="input__container">
                <StyledInput md default placeholder="Placeholder" defaultValue={props.helperText}/>
                </div>
            </div>
    )
}