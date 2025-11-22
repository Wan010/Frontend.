import React from 'react';
import { VStack, Box, Text, Link, Icon, Button } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { FaChartPie, FaWallet, FaCoins, FaCubes } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <Box w="240px" bg="#0d0f12" color="white" p="4" minH="100vh">
      <Text fontSize="xl" fontWeight="bold" mb="6">CryptoStakePro</Text>
      <VStack spacing="3" align="stretch">
        <Link as={RouterLink} to="/" _hover={{ textDecoration: 'none' }}>
          <Button leftIcon={<FaChartPie />} variant="ghost" justifyContent="flex-start" w="100%">Dashboard</Button>
        </Link>
        <Link as={RouterLink} to="/portfolio" _hover={{ textDecoration: 'none' }}>
          <Button leftIcon={<FaWallet />} variant="ghost" justifyContent="flex-start" w="100%">Portfolio</Button>
        </Link>
        <Link as={RouterLink} to="/staking" _hover={{ textDecoration: 'none' }}>
          <Button leftIcon={<FaCoins />} variant="ghost" justifyContent="flex-start" w="100%">Staking</Button>
        </Link>
        <Link as={RouterLink} to="/transactions" _hover={{ textDecoration: 'none' }}>
          <Button leftIcon={<FaCubes />} variant="ghost" justifyContent="flex-start" w="100%">Transactions</Button>
        </Link>
      </VStack>
    </Box>
  );
};

export default Sidebar;
