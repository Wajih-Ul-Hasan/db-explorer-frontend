import { useState, useEffect } from 'react';
import { fetchTables, fetchTableDetails, fetchStats, checkConnection } from '../api/dbService';

export default function useDbData(search, sort, page, pageSize) {
  const [tables, setTables] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [selectedTable, setSelectedTable] = useState(null);
  const [tableDetails, setTableDetails] = useState(null);
  const [isConnected, setIsConnected] = useState(true);
  const [stats, setStats] = useState(null);

  // Load table list
  useEffect(() => {
    setLoading(true);
    fetchTables(search, sort, page, pageSize)
      .then((data) => {
        setTables(data.items);
        setTotalCount(data.totalCount);
      })
      .finally(() => setLoading(false));
  }, [search, sort, page, pageSize]);

  // Load connection status + dashboard stats on mount
  useEffect(() => {
    checkConnection()
      .then((status) => setIsConnected(status))
      .catch(() => setIsConnected(false));

    fetchStats()
      .then((data) => setStats(data))
      .catch(() => setStats(null));
  }, []);

  const selectTable = (name) => {
    setSelectedTable(name);
    fetchTableDetails(name).then(setTableDetails);
  };

  return {
    tables,
    totalCount,
    loading,
    tableDetails,
    selectedTable,
    selectTable,
    isConnected,
    stats,
  };
}
