/* eslint-disable import/no-dynamic-require */
import React, { useContext } from 'react';
import {
  ListItem,
  Box,
  Flex,
  Heading,
  Text,
  Image,
  Divider,
  Button,
  List,
  PseudoBox,
} from '@chakra-ui/core';
import { motion } from 'framer-motion';
import { Context } from '../Context';

const MotionList = motion.custom(List);
const MotionListItem = motion.custom(ListItem);

const variants = {
  visible: (i) => ({
    opacity: 1,
    transition: {
      delay: i * 0.1,
    },
  }),
  hidden: { opacity: 0 },
};

const motionList = {
  visible: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.3,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: 'afterChildren',
    },
  },
};

const JobList = () => {
  const { addFilterToList, jobData: data } = useContext(Context);

  return (
    <MotionList
      pt={14}
      initial="hidden"
      animate="visible"
      variants={motionList}
    >
      {data.map((job, i) => {
        const badgeItems = [
          ...job.languages,
          ...job.tools,
          job.role,
          job.level,
        ];

        return (
          <MotionListItem
            custom={i}
            animate="visible"
            variants={variants}
            key={job.id}
          >
            <PseudoBox
              display="flex"
              maxW="1110px"
              position="relative"
              flexDirection={['column', 'column', 'row']}
              justifyContent={{ md: 'space-between' }}
              borderLeft={`${job.featured ? `4px` : `0`} `}
              borderLeftStyle="solid"
              borderLeftColor="primary"
              boxShadow="primary"
              bg="white"
              mx="auto"
              pt={8}
              px={6}
              py={{ md: 8 }}
              mb={{ base: 10, md: 6 }}
              rounded="md"
              transition="all 0.2s 0s ease-in-out"
              _hover={{ transform: 'translateY(-2px)' }}
            >
              <Flex
                direction={['column', 'column', 'row', 'row']}
                mr={{ md: '21px' }}
                p={0}
              >
                <Image
                  // eslint-disable-next-line global-require
                  src={require(`../images/${job.logo}`)}
                  alt={`${job.company}-logo`}
                  size={['48px', '48px', '90px', '90px']}
                  position={['absolute', 'absolute', 'initial', 'initial']}
                  rounded="full"
                  top="0"
                  left="24px"
                  mr={{ md: '21px' }}
                  transform={[
                    'translateY(-50%)',
                    'translateY(-50%)',
                    'translateY(0)',
                  ]}
                />
                <Box mr={4}>
                  <Flex align="center" mb={3}>
                    <Heading mr={4} as="h2" fontSize="sm" color="primary">
                      {job.company}
                    </Heading>

                    {job.new && (
                      <Button
                        height="auto"
                        rounded="full"
                        alignContent="center"
                        fontSize="10px"
                        textTransform="uppercase"
                        color="white"
                        bg="primary"
                        px={3}
                        py={2}
                        mr={2}
                      >
                        NEW
                      </Button>
                    )}

                    {job.featured && (
                      <Button
                        height="auto"
                        rounded="full"
                        textTransform="uppercase"
                        fontSize="10px"
                        bg="black"
                        color="white"
                        px={3}
                        py={2}
                      >
                        Featured
                      </Button>
                    )}
                  </Flex>
                  <PseudoBox _hover={{ color: 'primary', cursor: 'pointer' }}>
                    <Heading mb={4} fontSize="sm">
                      {job.position}
                    </Heading>
                  </PseudoBox>

                  <Flex fontSize="xs" color="neutral.300">
                    <Text mr={2}>{job.postedAt}</Text>
                    {' • '}
                    <Text mx={2}>{job.contract}</Text>
                    {' • '}
                    <Text mx={2}>{job.location}</Text>
                  </Flex>
                </Box>
              </Flex>

              <Divider display={{ md: 'none' }} />

              <Box pt={4} pb={2} flexShrink="3">
                {badgeItems.map((item, idx) => {
                  const key = `${item}-${idx}`;
                  return (
                    <PseudoBox
                      as="button"
                      key={key}
                      rounded="md"
                      fontSize="sm"
                      fontWeight="700"
                      color="primary"
                      bg="neutral.100"
                      p={2}
                      mr={4}
                      mb={4}
                      _hover={{ bg: 'primary', color: 'white' }}
                      onClick={() => addFilterToList(item)}
                    >
                      {item}
                    </PseudoBox>
                  );
                })}
              </Box>
            </PseudoBox>
          </MotionListItem>
        );
      })}
    </MotionList>
  );
};

export default JobList;
