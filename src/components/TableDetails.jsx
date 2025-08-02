import React, { useState } from 'react';
import './TableDetails.css';

const TableDetails = ({ table }) => {
  const [colSearch, setColSearch] = useState('');

  const filteredCols = table.columns.filter(col =>
    col.name.toLowerCase().includes(colSearch.toLowerCase())
  );

  return (
    <div className="fade-in">
      <p className="mb-2"><strong>Type:</strong> {table.type}</p>
      <p className="mb-2"><strong>Rows:</strong> {table.rowCount}</p>

      <div className="mb-2">
        <input
          type="text"
          placeholder="🔎 Search column by name..."
          className="form-control form-control-sm"
          value={colSearch}
          onChange={e => setColSearch(e.target.value)}
        />
      </div>

      <h6 className="mt-3">Columns:</h6>
      <table className="table table-sm table-hover table-striped mt-2">
        <thead className="table-light">
          <tr>
            <th>Name</th>
            <th>Data Type</th>
            <th>Nullable</th>
          </tr>
        </thead>
        <tbody>
          {filteredCols.map((col, i) => (
            <tr key={i}>
              <td>{col.name}</td>
              <td>{col.dataType}</td>
              <td>{col.isNullable ? 'Yes' : 'No'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableDetails;