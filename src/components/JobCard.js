/* eslint-disable import/no-dynamic-require */
import React from 'react';
import {
  ListItem,
  Badge,
  Box,
  Flex,
  Heading,
  Text,
  Image,
  Divider,
  Button,
} from '@chakra-ui/core';

const JobCard = ({ data }) =>
  data.map((job) => {
    const badgeItems = [...job.languages, ...job.tools, job.role, job.level];
    return (
      <ListItem key={job.id}>
        <Box
          position="relative"
          maxW="1110px"
          bg="white"
          mx="auto"
          px={6}
          pt={8}
          mb={10}
          rounded="md"
          boxShadow="lg"
        >
          <Image
            position="absolute"
            top="0"
            left="24px"
            transform="translateY(-50%)"
            rounded="full"
            size="48px"
            // eslint-disable-next-line global-require
            src={require(`../images/${job.logo}`)}
            alt={`${job.company}-logo`}
          />

          <Flex align="center" mb={3}>
            <Heading mr={4} as="h2" fontSize="sm" color="primary">
              {job.company}
            </Heading>
            <Button
              textTransform="uppercase"
              height="auto"
              fontSize="10px"
              px={3}
              py={1}
              alignContent="center"
              rounded="full"
              mr={2}
              bg="primary"
              color="white"
            >
              NEW
            </Button>
            <Button
              textTransform="uppercase"
              height="auto"
              px={3}
              py={1}
              rounded="full"
              bg="black"
              color="white"
              fontSize="10px"
            >
              Featured
            </Button>
          </Flex>

          <Heading mb={4} fontSize="sm">
            {job.position}
          </Heading>

          <Flex fontSize="xs" color="neutral.300">
            <Text mr={2}>{job.postedAt}</Text>
            {' • '}
            <Text mx={2}>{job.contract}</Text>
            {' • '}
            <Text mx={2}>{job.location}</Text>
          </Flex>

          <Divider />

          <Box pt={4} pb={2}>
            {badgeItems.map((item, idx) => (
              <Badge
                color="primary"
                bg="neutral.100"
                p={2}
                mr={4}
                mb={4}
                // eslint-disable-next-line react/no-array-index-key
                key={idx}
              >
                {item}
              </Badge>
            ))}
          </Box>
        </Box>
      </ListItem>
    );
  });

export default JobCard;
