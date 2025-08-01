import React, { useState } from 'react';
import useMockDbData from '../hooks/useMockDbData';
import TableList from '../components/TableList';
import ConnectionStatus from '../components/ConnectionStatus';
import StatsDashboard from '../components/StatsDashboard';
import { Spinner } from 'react-bootstrap';

const HomePage = () => {
  const { tables, views, loading, connected, stats } = useMockDbData();
  const [showType, setShowType] = useState('all');

  const filteredData = () => {
    if (showType === 'table') return tables;
    if (showType === 'view') return views;
    return [...tables, ...views];
  };

  if (loading) return <div className="text-center mt-5"><Spinner animation="border" /> Loading data...</div>;

  return (
    <div>
      <ConnectionStatus isConnected={connected} />
      <StatsDashboard stats={stats} />

      <div className="mb-3">
        <label className="me-2">Show:</label>
        <select value={showType} onChange={(e) => setShowType(e.target.value)}>
          <option value="all">All</option>
          <option value="table">Tables</option>
          <option value="view">Views</option>
        </select>
      </div>

      <TableList data={filteredData()} />
    </div>
  );
};

export default HomePage;
