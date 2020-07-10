import React from 'react'
import { Box } from '@chakra-ui/core'

const Layout = ({ children }) => {
  return (
    <Box bg="neutral.100" as="main" px={6} pt="56px">
      {children}
    </Box>
  )
}

export default Layout
