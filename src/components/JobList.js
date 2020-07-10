import React from 'react'
import JobCard from '../components/JobCard'
import data from '../api/data.json'
import { List, Box } from '@chakra-ui/core'

const JobList = () => {
  return (
    <Box>
      <List pt={14}>
        <JobCard data={data} />
      </List>
    </Box>
  )
}

export default JobList
