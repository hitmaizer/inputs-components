import React from 'react';
import StyledInput from '../elements/StyledInputs'

export default function TextInput(props) {
    return (
        
            <div className="input__wrapper flex-col">
            <label htmlFor="" className="input__label error">Label</label>
                <div className="input__container">
                <StyledInput md default placeholder="Placeholder" defaultValue={props.helperText}/>
                {props.sublabel && <span className="input__sublabel">Some Interesting Text</span>}
                </div>
            </div>
    )
}