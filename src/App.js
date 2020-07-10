import React from 'react'
import { ThemeProvider, CSSReset } from '@chakra-ui/core'
import { customTheme } from './theme'
import Header from './components/Header'
import JobList from './components/JobList'
import Layout from './components/Layout'

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      <Header />
      <Layout>
        <JobList />
      </Layout>
    </ThemeProvider>
  )
}

export default App
