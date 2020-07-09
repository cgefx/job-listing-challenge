import React from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles, lightTheme } from './style'

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <>
        <GlobalStyles />
        <h1>Hello</h1>
      </>
    </ThemeProvider>
  )
}

export default App
