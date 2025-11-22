import axios from 'axios';

const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:4000/api';

export async function getBalances(address) {
  const res = await axios.get(`${API_BASE}/wallet/${address}/balances`);
  return res.data;
}

export async function getTokens(address) {
  const res = await axios.get(`${API_BASE}/tokens/${address}`);
  return res.data;
}

export async function getAPY() {
  const res = await axios.get(`${API_BASE}/apy/pools`);
  return res.data;
}

export async function getTransactions(address) {
  const res = await axios.get(`${API_BASE}/wallet/${address}/transactions`);
  return res.data;
}
