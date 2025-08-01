import { useEffect, useState } from 'react';

const MOCK_TABLES = [/*...*/]; // your mock tables
const MOCK_VIEWS = [/*...*/]; // your mock views

const useMockDbData = () => {
  const [tables, setTables] = useState([]);
  const [views, setViews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setTables(MOCK_TABLES);
      setViews(MOCK_VIEWS);
      setConnected(true);
      setLoading(false);
    }, 1000); // simulate network delay

    return () => clearTimeout(timeout);
  }, []);

  return {
    tables,
    views,
    loading,
    connected,
    stats: {
      totalTables: MOCK_TABLES.length,
      totalViews: MOCK_VIEWS.length,
      totalRows: MOCK_TABLES.reduce((sum, t) => sum + t.rowCount, 0),
      dbSizeMB: 25.7, // mock static value
    },
  };
};

export default useMockDbData;
