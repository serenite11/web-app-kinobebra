import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {ThemeProvider} from "@mui/material";
import {theme,styledTheme} from "./Theme";
import {ThemeProvider as StyledProvider, createGlobalStyle} from "styled-components";

const Global = createGlobalStyle`
body {
    background-color: ${styledTheme.colors.primary}
}
`

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <StyledProvider theme={styledTheme}>
                <App/>
                <Global/>
            </StyledProvider>
        </ThemeProvider>
    </React.StrictMode>,
)
