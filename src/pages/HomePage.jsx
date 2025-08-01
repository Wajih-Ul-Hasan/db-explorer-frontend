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

  if (loading) {
      return (
          <div className="container-fluid">
              <div className="loading-container">
                  <div className="loading-spinner"></div>
                  <h5 className="text-muted">Loading database...</h5>
                  <p className="text-muted small">Please wait while we fetch your data</p>
              </div>
          </div>
      );
  }

  return (
      <div className="container-fluid py-4">
          <div className="row">
              <div className="col-12">
                  {/* Header */}
                  <div className="mb-5 fade-in">
                      <h1 className="page-title display-4 mb-2">Database Manager</h1>
                      <p className="lead text-muted">Manage your database tables and views with elegance</p>
                  </div>

                  <ConnectionStatus isConnected={connected} />
                  <StatsDashboard stats={stats} />

                  {/* Filter Section */}
                  <div className="filter-section fade-in">
                      <div className="d-flex align-items-center justify-content-between flex-wrap gap-3">
                          <div className="d-flex align-items-center gap-3">
                              <label className="form-label mb-0 fw-semibold text-dark">Show:</label>
                              <select 
                                  value={showType} 
                                  onChange={(e) => setShowType(e.target.value)}
                                  className="form-select"
                                  style={{width: 'auto', minWidth: '150px'}}
                              >
                                  <option value="all">All Items</option>
                                  <option value="table">Tables Only</option>
                                  <option value="view">Views Only</option>
                              </select>
                          </div>
                          
                          <div className="d-flex align-items-center gap-2">
                              <i className="bi bi-funnel text-muted"></i>
                              <span className="text-muted small">
                                  {filteredData().length} items found
                              </span>
                          </div>
                      </div>
                  </div>

                  <TableList 
                      tables={filteredData()} 
                      onSelectTable={(table) => console.log('Selected:', table)} 
                  />
              </div>
          </div>
      </div>
  );
};

export default HomePage;
