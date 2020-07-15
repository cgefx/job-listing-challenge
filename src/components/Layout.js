import React from 'react';
import { Box } from '@chakra-ui/core';
import PropTypes from 'prop-types';

const Layout = ({ children }) => (
  <Box bg="neutral.100" as="main" minHeight="100vh" px={6} py="56px">
    {children}
  </Box>
);

export default Layout;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
