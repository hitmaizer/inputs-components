import React from 'react'
import EndIconInput from './components/EndIconInput'
import { ThemeProvider } from 'styled-components'
import Theme from './theme/Theme'
import DefaultInput from './components/DefaultInput'
import ErrorInput from './components/ErrorInput'
import DisabledInput from './components/DisabledInput'
import TextInput from './components/TextInput'
import StyledSpan from './elements/StyledSpan'
import StartIconInput from './components/StartIconInput'
import Input from './elements/StyledInputs'
import Label from './elements/StyledLabel'



export default function App() {

    const titles = ["<Input />",
        "<Input error />",
        "<Input disabled />",
        "<Input helperText=”Some interesting text” />",
        "<Input helperText=”Some interesting text” error />",
        "<Input startIcon />",
        "<Input endIcon />",
        "<Input value=”text” />",
        "<Input size=”sm” />",
        "<Input size=”md” />",
        "<Input fullWidth />",
        "<Input multiline row=”4” />",
    ]

    return (
        <ThemeProvider theme={Theme}>
            <div className="page__wrapper">
                <h1 className="button__title">{titles[0]}</h1>
                <DefaultInput />
                <h1 className="button__title">{titles[1]}</h1>
                <ErrorInput />
                <h1 className="button__title">{titles[2]}</h1>
                <DisabledInput />
                <div className="item--rows flex-row">
                    <div className="flex-col">
                        <h1 className="button__title">{titles[3]}</h1>
                            <div className="item__wrapper">
                            <TextInput sublabel />
                            <StyledSpan className="input__sublabel">Some Interesting Text</StyledSpan>
                            </div>
                    </div>
                    <div className="item--rows flex-col">
                        <div className="flex-col">
                            <h1 className="button__title">{titles[4]}</h1>
                                <div className="item__wrapper">
                                <TextInput sublabel />
                                <StyledSpan error className="input__sublabel">Some Interesting Text</StyledSpan>
                                </div>
                        </div>
                    </div>
                </div>
                <div className="item--rows flex-row">
                    <div className="item__wrapper">
                        <h1 className="button__title">{titles[5]}</h1>
                        <StartIconInput startIcon />
                    </div>
                    <div className="item__wrapper">
                        <h1 className="button__title">{titles[6]}</h1>
                        <EndIconInput endIcon/>
                    </div>
                </div>
                <div className="item__wrapper flex-col">
                    <h1 className="button__title">{titles[7]}</h1>
                    <Label className="input__label">Label</Label>
                    <Input value="Text" placeholder="Placeholder"/>
                </div>
                <div className="item--rows flex-row">
                    <div className="item__wrapper flex-col">
                        <h1 className="button__title">{titles[8]}</h1>
                        <Label className="input__label">Label</Label>
                        <Input sm placeholder="Placeholder"/>
                    </div>
                    <div className="item__wrapper flex-col">
                        <h1 className="button__title">{titles[9]}</h1>
                        <Label className="input__label">Label</Label>
                        <Input md placeholder="Placeholder"/>
                    </div>
                </div>
                <div className="item__wrapper flex-col">
                    <h1 className="button__title">{titles[10]}</h1>
                    <Label className="input__label">Label</Label>
                    <Input fullWidth placeholder="Placeholder"/>
                </div>
                <div className="item__wrapper flex-col">
                    <h1 className="button__title">{titles[11]}</h1>
                    <Label className="input__label">Label</Label>
                    <textarea rows="4" className="text__area"></textarea>
                </div>
            </div>
            <footer className="footer__sign">created by <b><u>Jose Alves</u></b> - devChallenges.io</footer>
        </ThemeProvider>
    )
}