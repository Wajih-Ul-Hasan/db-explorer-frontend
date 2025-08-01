import { useState, useEffect } from 'react';
import { mockTables } from '../constants/mockTables';

export const useFetchTables = () => {
  const [tables, setTables] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await new Promise(res => setTimeout(res, 1000));
        setTables(mockTables);
      } catch (err) {
        setError('Failed to fetch tables');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return { tables, loading, error };
};