import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {ThemeProvider} from "@mui/material";
import {theme,styledTheme} from "./Theme";
import {ThemeProvider as StyledProvider, createGlobalStyle} from "styled-components";
import {Provider} from "react-redux";
import {store} from "./store";
const Global = createGlobalStyle`
body {
    background-color: ${styledTheme.colors.primary}
}
`

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
            <StyledProvider theme={styledTheme}>
                <App/>
                <Global/>
            </StyledProvider>
        </ThemeProvider>
      </Provider>
    </React.StrictMode>,
)
