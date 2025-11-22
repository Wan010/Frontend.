import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';

export default function TokenTable({ tokens = [] }) {
  return (
    <Table variant="simple" colorScheme="whiteAlpha">
      <Thead>
        <Tr>
          <Th>Token</Th>
          <Th>Balance</Th>
          <Th>Value (USD)</Th>
          <Th>24H</Th>
        </Tr>
      </Thead>
      <Tbody>
        {tokens.map((t, i) => (
          <Tr key={i}>
            <Td>{t.symbol}</Td>
            <Td>{(t.balance / Math.pow(10, t.decimals)).toFixed(4)}</Td>
            <Td>{t.usdPrice ? (t.usdPrice * (t.balance / Math.pow(10, t.decimals))).toFixed(2) : '-'}</Td>
            <Td>-</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
}
