import React from 'react'
import Input from './components/Input'
import { ThemeProvider } from 'styled-components'
import Theme from './theme/Theme'



export default function App() {

    return (
        <ThemeProvider theme={Theme}>
            <div className="page__wrapper">
                <Input />
            </div>
        </ThemeProvider>
    )
}