/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useContext } from 'react';
import { List, Flex, Badge, Button, Box } from '@chakra-ui/core';
import { Context } from '../Context';

const JobFilters = () => {
  const { activeFilters, removeFilterFromList, clearAllFilters } = useContext(
    Context,
  );

  const filterItem = activeFilters.map((filter, idx) => {
    const key = `${filter}-${idx}`;

    return (
      <Flex as="li" key={key} align="center" justify="center" mr={4} mb={4}>
        <Flex align="center" justify="center">
          <Badge
            color="primary"
            bg="neutral.100"
            p={2}
            textTransform="none"
            align="center"
            justify="center"
          >
            {filter}
          </Badge>
        </Flex>
        <Button
          bg="primary"
          color="white"
          roundedLeft="0"
          height="100%"
          _hover={{ bg: 'black' }}
          onClick={() => removeFilterFromList(filter)}
        >
          x
        </Button>
      </Flex>
    );
  });
  return (
    <Box
      display={`${activeFilters.length > 0 ? 'inherit' : 'none'}`}
      position="relative"
      maxW="1110px"
      bg="white"
      mx="auto"
      mb={12}
      mt="-100px"
      p={4}
      rounded="md"
      boxShadow="lg"
    >
      <Flex align="center" justify="space-between">
        <List display="flex" flexWrap="wrap">
          {filterItem}
        </List>
        <Box>
          <Button
            onClick={clearAllFilters}
            p={0}
            fontSize="xs"
            color="neutral.300"
            bg="transparent"
          >
            Clear
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default JobFilters;
