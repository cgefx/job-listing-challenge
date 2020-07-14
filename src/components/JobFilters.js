/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useContext } from 'react';
import { List, ListItem, Flex } from '@chakra-ui/core';
import { Context } from '../Context';

const JobFilters = () => {
  const { activeFilters, removeFilterFromList } = useContext(Context);

  const filters = activeFilters.map((filter, idx) => {
    const key = `${filter}-${idx}`;

    return (
      <Flex key={key}>
        <ListItem>{filter}</ListItem>
        <div onClick={() => removeFilterFromList(filter)}>x</div>
      </Flex>
    );
  });
  return <List display="flex">{filters}</List>;
};

export default JobFilters;
