"use client"
import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';
import { theme } from '@/theme/theme';
import { Button } from '@chakra-ui/react'

const Main = () => {
  return (
    <div style={{display:'flex', justifyContent:"center", flexDirection:"column", alignItems:'center', position: 'relative' }}>
    <Box bg={theme.colors.main.primary} w='100%' p={4} color='white' h="300px" display="flex" flexDirection="column" 
    alignItems="center" pt="12"    >
  <Heading>Simple pricing for your business</Heading>
  <Text fontSize='md'>Plans that are carefully crafted to suit your business.</Text>
  
</Box>
<Box position="absolute" top="40"  w="75%" borderRadius='lg' display="flex" h="275px" shadow="lg">
 <Box flex={2} bg={theme.colors.main.secondary} roundedLeft="lg" display="flex" flexDirection="column" justifyContent="center" alignItems="center" >
    <Heading as='h3' size='2xl'>Premium PRO</Heading>
    <Heading as='h2' size='3xl'>$329</Heading>
    <Heading></Heading>
    <Text fontSize='xl'>billed just once</Text>
    <Button bg={theme.colors.main.primary} color="white" px="10">Get Started</Button>
  </Box>
  <Box flex={3} bg="white" roundedRight="lg">
    2
  </Box>
</Box>
</div>

  )
}

export default Main;