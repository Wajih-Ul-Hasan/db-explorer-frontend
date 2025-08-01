import React from 'react';
import ExportButton from './ExportButton';

const TableList = ({ tables, sortAsc = true, onSelectTable }) => {
    if (!Array.isArray(tables)) {
        return (
            <div className="text-center py-5">
                <i className="bi bi-database text-muted" style={{fontSize: '4rem'}}></i>
                <h5 className="text-muted mt-3">No table data available</h5>
            </div>
        );
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
        <div className="fade-in">
            {sortedLetters.map(letter => (
                <div key={letter} className="table-group">
                    <div className="d-flex align-items-center mb-4">
                        <div className="alphabet-header">
                            {letter}
                        </div>
                        <div className="flex-grow-1">
                            <hr className="my-0 opacity-25" />
                        </div>
                    </div>
                    
                    <div className="row g-3">
                        {grouped[letter].map((table, index) => (
                            <div key={index} className="col-12">
                                <div
                                    className="table-item"
                                    onClick={() => onSelectTable?.(table)}
                                >
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                            <div className={`table-icon ${table.type}`}>
                                                <i className={table.type === 'table' ? 'bi-table' : 'bi-eye'}></i>
                                            </div>
                                            <div>
                                                <h6 className="mb-1 text-primary fw-semibold">{table.name}</h6>
                                                <small className="text-muted text-capitalize">
                                                    <i className={`bi ${table.type === 'table' ? 'bi-table' : 'bi-eye'} me-1`}></i>
                                                    {table.type}
                                                </small>
                                            </div>
                                        </div>
                                        <ExportButton table={table} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TableList;