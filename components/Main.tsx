"use client"
import React from 'react';
import { Box, Heading, HStack, Text } from '@chakra-ui/react';
import { theme } from '@/theme/theme';
import { Button } from '@chakra-ui/react';
import { PriceHeading, PriceText, Premium_Pro, BILLED_JUST_ONCE, Price, ACCESS_FEATURES, ListData, subscriptions } from 'Constants/constants'
import Check from '@/public/icons/Check';
import Image from 'next/image';

const Main = () => {
  return (
    <div style={{ display: 'flex', justifyContent: "center", flexDirection: "column", alignItems: 'center', position: 'relative' }}>
      <Box bg={theme.colors.main.primary} w='100%' p={4} color='white' h="300px" display="flex" flexDirection="column"
        alignItems="center" pt="12"    >
        <Heading mb="3">{PriceHeading}</Heading>
        <Text fontSize='md'>{PriceText}</Text>

      </Box>
      <Box position="absolute" top="44" w="75%" borderRadius='lg' display="flex" h="295px" shadow="lg">
        <Box flex={2} bg={theme.colors.main.secondary} roundedLeft="lg" display="flex" flexDirection="column" justifyContent="center" alignItems="center" >
          <Heading>{Premium_Pro}</Heading>
          <Heading as='h3' size='3xl' mt={2}>{Price}</Heading>
          <Heading></Heading>
          <Text fontSize='xl' mt={3}>{BILLED_JUST_ONCE}</Text>
          <Button bg={theme.colors.main.primary} color="white" px="24" mt={5}>Get Started</Button>
        </Box>
        <Box flex={3} bg="white" roundedRight="lg" px="14" pt="6">
          <Text fontSize='xl' mb="5">{ACCESS_FEATURES}</Text>
          {
            ListData.map((item, index) => (
              <Box key={index} mb={3} display="flex" alignItems="center">

                <Check />
                <Text fontSize='xl' ml="5">{item.name}</Text>

              </Box>
            ))
          }
        </Box>
      </Box>
      <Box position="absolute" top="96" w="70%" display="flex" mt="32">
        <HStack spacing='50px'>
          {
            subscriptions.map((property, index) => (
              <Box key={index} display="flex" alignItems="center">
                {property.icon}
                <Text as='b' fontSize='lg' ml="8">{property.name}</Text>
              </Box>
            ))
          }
        </HStack>
      </Box>
    </div>

  )
}

export default Main;