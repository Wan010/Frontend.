import React, { useState } from 'react';
import { Button, Text } from '@chakra-ui/react';
import { ethers } from 'ethers';

export default function ConnectWallet({ onConnected }) {
  const [address, setAddress] = useState(null);

  async function connect() {
    try {
      if (!window.ethereum) {
        alert('Please install MetaMask');
        return;
      }
      const provider = new ethers.BrowserProvider(window.ethereum);
      await provider.send('eth_requestAccounts', []);
      const signer = await provider.getSigner();
      const addr = await signer.getAddress();
      setAddress(addr);
      if (onConnected) onConnected(addr);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
      <Button colorScheme="blue" onClick={connect}>Connect Wallet</Button>
      {address && <Text mt="2" fontSize="sm">Connected: {address}</Text>}
    </>
  );
}
