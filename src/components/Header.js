import React from 'react';
import { Box, Image } from '@chakra-ui/core';
import headerImgSmall from '../images/bg-header-mobile.svg';

const Header = () => (
  <Box bg="primary">
    <Image src={headerImgSmall} />
  </Box>
);

export default Header;
