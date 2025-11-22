import React, { useState } from 'react';
import { Box, Input, NumberInput, NumberInputField, Button, Text } from '@chakra-ui/react';

export default function StakingCalculator() {
  const [amount, setAmount] = useState(1);
  const [apy, setApy] = useState(8);
  const [days, setDays] = useState(365);
  const [result, setResult] = useState(null);

  function calc() {
    const yearReturn = (amount * (apy / 100));
    const daily = yearReturn / 365;
    const total = amount + yearReturn * (days / 365);
    setResult({yearReturn, daily, total});
  }

  return (
    <Box p="4" bg="gray.800" borderRadius="md">
      <NumberInput value={amount} onChange={(v)=>setAmount(Number(v))} mb="3">
        <NumberInputField placeholder="Amount" />
      </NumberInput>
      <NumberInput value={apy} onChange={(v)=>setApy(Number(v))} mb="3">
        <NumberInputField placeholder="APY (%)" />
      </NumberInput>
      <NumberInput value={days} onChange={(v)=>setDays(Number(v))} mb="3">
        <NumberInputField placeholder="Days" />
      </NumberInput>
      <Button onClick={calc} colorScheme="green">Calculate</Button>
      {result && (
        <Box mt="3">
          <Text>Yearly rewards: {result.yearReturn.toFixed(6)}</Text>
          <Text>Daily rewards: {result.daily.toFixed(6)}</Text>
          <Text>Total after {days} days: {result.total.toFixed(6)}</Text>
        </Box>
      )}
    </Box>
  );
}
