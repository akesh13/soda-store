"use client"
import { createTheme } from "@mui/material/styles"

const theme = createTheme({
    typography: {
        fontFamily: "Jost, sans-serif",
        fontSize: 16,
        fontWeightRegular: 400,
        fontWeightMedium: 600,
        fontWeightBold: 800,
        h1: {
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 700,
            fontSize: '1.4rem',
            lineHeight: 1.2,
            '@media (max-width: 600px)': {
                fontSize: '6rem',
                lineHeight:"6rem"
            },
        },
        button: {
            fontFamily: 'Jost, sans-serif',
            fontWeight: 500,
            fontSize: '0.875rem',
            lineHeight: 1.5,
            textTransform: 'uppercase',
            '@media (max-width: 600px)': {
                fontSize: '0.7rem',
            },
        },
    },
    palette: {
        primary: {
            main: "#023020",
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: '14px',
                    textTransform: 'capitalize',
                    fontSize: '16px',
                    padding: '24px 28px',
                    backgroundColor: "#ff550f",
                    color: "white",
                    '&:disabled': {
                        backgroundColor: '#4d6379',
                        color: 'black',
                    },
                    '&:hover': {
                        backgroundColor: 'white',
                    },
                },
                contained: {
                    boxShadow: 'none',
                },
                outlined: {
                    border: '2px solid #000',
                },
            },
        },
    },
});

export default theme