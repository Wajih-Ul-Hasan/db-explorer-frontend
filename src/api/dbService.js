import axios from 'axios';

const BASE_URL = 'https://localhost:7024/api/db';

export const checkConnection = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/ping`);
    return res.status === 200;
  } catch {
    return false;
  }
};

export const fetchTables = async (search, sort = 'asc', page = 1, pageSize = 20) => {
  const params = { search, sort, page, pageSize };
  const { data } = await axios.get(`${BASE_URL}/tables`, { params });
  return data;
};

export const fetchTableDetails = async (name) => {
  const { data } = await axios.get(`${BASE_URL}/tables/${name}`);
  return data;
};


export const fetchStats = async () => {
  const res = await axios.get(`${BASE_URL}/stats`);
  return res.data;
};
