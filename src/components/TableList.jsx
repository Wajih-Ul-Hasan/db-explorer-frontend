import React from 'react';
import ExportButton from './ExportButton';

const TableList = ({ tables, sortAsc, onSelectTable }) => {
  if (!Array.isArray(tables)) {
    return <div>No table data available.</div>;
  }

  const grouped = tables.reduce((acc, table) => {
    const letter = table.name[0]?.toUpperCase?.() || '#';
    acc[letter] = acc[letter] || [];
    acc[letter].push(table);
    return acc;
  }, {});

  const sortedLetters = Object.keys(grouped).sort();
  if (!sortAsc) sortedLetters.reverse();

  return (
    <div>
      {sortedLetters.map(letter => (
        <div key={letter} className="mb-4">
          <h5>{letter}</h5>
          <div className="list-group">
            {grouped[letter].map((table, index) => (
              <div
                key={index}
                className="list-group-item d-flex justify-content-between align-items-center"
                onClick={() => onSelectTable(table)}
                style={{ cursor: 'pointer' }}
              >
                <span>{table.name} ({table.type})</span>
                <ExportButton table={table} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TableList;
