import React, { useState } from 'react';
import useDbData from '../hooks/useDbData';
import TableList from '../components/TableList';
import TableDetails from '../components/TableDetails';
import PaginationControls from '../components/PaginationControls';
import ConnectionStatus from '../components/ConnectionStatus';
import StatsDashboard from '../components/StatsDashboard';

const HomePage = () => {
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('asc');
  const [page, setPage] = useState(1);
  const pageSize = 10;

  const {
    tables,
    totalCount,
    loading,
    tableDetails,
    selectTable,
    selectedTable,
    stats,
    isConnected,
  } = useDbData(search, sort, page, pageSize);

  return (
    <div className="container mt-4">
      {/* Header: Logo + ConnectionStatus */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div className="d-flex align-items-center gap-3">
          <img src="/logo192.png" alt="DbExplorer Logo" style={{ width: 40 }} />
          <h3 className="mb-0 fw-bold">DbExplorer</h3>
        </div>
        <ConnectionStatus isConnected={isConnected} />
      </div>

      {/* Dashboard Stats */}
      {stats && <StatsDashboard stats={stats} />}

      {/* Search + Sort Controls */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <input
          type="text"
          className="form-control w-50"
          placeholder="Search tables..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1);
          }}
        />
        <button
          className="btn btn-outline-primary ms-3"
          onClick={() => setSort(sort === 'asc' ? 'desc' : 'asc')}
        >
          Sort: {sort.toUpperCase()}
        </button>
      </div>

      {/* Table List + Pagination */}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <TableList tables={tables} sortAsc={sort === 'asc'} onSelectTable={selectTable} />
          <PaginationControls
            page={page}
            pageSize={pageSize}
            totalCount={totalCount}
            onPageChange={setPage}
          />
        </>
      )}

      {/* Table Details */}
      {tableDetails && (
        <div className="mt-5">
          <h4 className="mb-3">Details for: {selectedTable}</h4>
          <TableDetails table={tableDetails} />
        </div>
      )}
    </div>
  );
};

export default HomePage;
