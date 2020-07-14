import React from 'react';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';
import { customTheme } from './theme';
import Header from './components/Header';
import JobList from './components/JobList';
import Layout from './components/Layout';
import JobFilters from './components/JobFilters';
import { ContextProvider } from './Context';

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <ContextProvider>
        <CSSReset />
        <Header />
        <Layout>
          <JobFilters />
          <JobList />
        </Layout>
      </ContextProvider>
    </ThemeProvider>
  );
}

export default App;
