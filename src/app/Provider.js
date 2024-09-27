"use client"
import theme from '@/theme'
import { ThemeProvider } from '@mui/material'
import React from 'react'

function Provider({ children }) {
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )
}

export default Provider