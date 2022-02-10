import React from 'react'
import IconInput from './components/IconInput'
import { ThemeProvider } from 'styled-components'
import Theme from './theme/Theme'
import DefaultInput from './components/DefaultInput'
import ErrorInput from './components/ErrorInput'
import DisabledInput from './components/DisabledInput'
import TextInput from './components/TextInput'



export default function App() {

    const titles = ["<Input />",
        "<Input error />",
        "<Input disabled />",
        "<Input helperText=”Some interesting text” />",
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
                <h1 className="button__title">{titles[3]}</h1>
                <TextInput sublabel />
                <IconInput sublabel helperText={"Ola mate"} endIcon/>
            </div>
        </ThemeProvider>
    )
}