import { createTheme } from '@mui/material';

const theme = createTheme({
    palette : {
        primary : {
            main : '#061846'
        },
        secondary: {
            main: '#edf2ff',
        },
    }
});



const styledTheme = {
    colors: {
        primary: "#061846",
        secondary: "#edf2ff",
    },
    media: {
        phone: "(max-width: 425px)",
        tablet: "(max-width: 900px) and (min-width: 425px)",
        phoneAndTablet : "(max-width: 900px)"
    }
}

export {theme, styledTheme}