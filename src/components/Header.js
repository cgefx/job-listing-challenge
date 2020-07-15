import React from 'react';
import { Box, Image } from '@chakra-ui/core';
import headerImgSmall from '../images/bg-header-mobile.svg';
import headerImgLarge from '../images/bg-header-desktop.svg';

const Header = () => (
  <Box bg="primary">
    <Image
      src={headerImgSmall}
      width="100%"
      // objectFit="cover"
      height="156px"
      display={{ md: 'none' }}
    />
    <Image
      src={headerImgLarge}
      width="100%"
      height="156px"
      // objectFit="cover"
      display={{ base: 'none', md: 'initial' }}
    />
  </Box>
);

export default Header;
