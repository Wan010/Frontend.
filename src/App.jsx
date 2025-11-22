import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Portfolio from './pages/Portfolio';
import Staking from './pages/Staking';
import Transactions from './pages/Transactions';
import Sidebar from './components/Sidebar';
import { Box, Flex } from '@chakra-ui/react';

export default function App() {
  return (
    <BrowserRouter>
      <Flex minH="100vh">
        <Sidebar />
        <Box flex="1" p="6">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/staking" element={<Staking />} />
            <Route path="/transactions" element={<Transactions />} />
          </Routes>
        </Box>
      </Flex>
    </BrowserRouter>
  );
}
