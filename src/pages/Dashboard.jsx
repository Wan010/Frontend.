import React, { useState } from 'react';
import { Box, Heading, SimpleGrid, Stat, StatLabel, StatNumber } from '@chakra-ui/react';
import ConnectWallet from '../components/ConnectWallet';
import TokenTable from '../components/TokenTable';
import PortfolioChart from '../components/PortfolioChart';
import { getTokens, getBalances } from '../services/api';

export default function Dashboard() {
  const [address, setAddress] = useState(null);
  const [tokens, setTokens] = useState([]);
  const [chartData, setChartData] = useState([]);

  async function handleConnected(addr) {
    setAddress(addr);
    const tokenData = await getTokens(addr);
    // tokenData is array - transform to include usdPrice if available
    const mapped = tokenData.map(t => ({
      ...t,
      balance: Number(t.balance),
      decimals: Number(t.decimals),
      symbol: t.symbol || t.name
    }));
    setTokens(mapped);

    // build chart data sample
    const chart = mapped.slice(0,5).map(t => ({
      name: t.symbol,
      value: (t.balance / Math.pow(10, t.decimals)) * (t.usdPrice || 0)
    })).filter(d => d.value > 0);
    setChartData(chart);
  }

  return (
    <Box>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb="6">
        <Heading size="lg">Dashboard</Heading>
        <ConnectWallet onConnected={handleConnected} />
      </Box>

      <SimpleGrid columns={4} spacing="4" mb="6">
        <Stat bg="gray.800" p="4" borderRadius="md">
          <StatLabel>Total Value</StatLabel>
          <StatNumber>$0.00</StatNumber>
        </Stat>
        <Stat bg="gray.800" p="4" borderRadius="md">
          <StatLabel>Net P/L</StatLabel>
          <StatNumber>$0.00</StatNumber>
        </Stat>
        <Stat bg="gray.800" p="4" borderRadius="md">
          <StatLabel>Staking Rewards</StatLabel>
          <StatNumber>$0.00</StatNumber>
        </Stat>
        <Stat bg="gray.800" p="4" borderRadius="md">
          <StatLabel>24H Change</StatLabel>
          <StatNumber>0%</StatNumber>
        </Stat>
      </SimpleGrid>

      <Box display="flex" gap="6">
        <Box flex="1" bg="gray.900" p="4" borderRadius="md">
          <Heading size="sm" mb="3">Portfolio Allocation</Heading>
          <PortfolioChart data={chartData} />
        </Box>

        <Box w="560px" bg="gray.900" p="4" borderRadius="md">
          <Heading size="sm" mb="3">Holdings</Heading>
          <TokenTable tokens={tokens} />
        </Box>
      </Box>
    </Box>
  );
}
