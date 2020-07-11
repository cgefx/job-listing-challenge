import React from 'react';
import { List, Box } from '@chakra-ui/core';
import JobCard from './JobCard';
import data from '../api/data.json';

const JobList = () => (
  <Box>
    <List pt={14}>
      <JobCard data={data} />
    </List>
  </Box>
);

export default JobList;
