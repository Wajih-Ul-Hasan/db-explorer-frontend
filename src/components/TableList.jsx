import React from 'react';
import ExportButton from './ExportButton';
import './TableList.css';

const TableList = ({ tables, sortAsc, onSelectTable }) => {
  const grouped = tables.reduce((acc, table) => {
    const letter = table.name[0].toUpperCase();
    acc[letter] = acc[letter] || [];
    acc[letter].push(table);
    return acc;
  }, {});

  const sortedLetters = Object.keys(grouped).sort();
  if (!sortAsc) sortedLetters.reverse();

  return (
    <div className="fade-in">
      {sortedLetters.map(letter => (
        <div key={letter} className="mb-3">
          <h6 className="text-uppercase fw-bold border-bottom pb-1 text-secondary">{letter}</h6>
          {grouped[letter].map((table, index) => (
            <div
              key={index}
              className="list-group-item list-group-item-action d-flex justify-content-between align-items-center rounded mb-2 bg-white shadow card-hover px-3 py-2"
              onClick={() => onSelectTable(table.name)}
            >
              <span className="text-dark">
                {table.name} <small className="text-muted">({table.type})</small>
              </span>
              <ExportButton table={table} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default TableList;