import React from 'react';

const ExportButton = ({ table }) => {
  const handleExport = () => {
    const blob = new Blob([JSON.stringify(table, null, 2)], {
      type: 'application/json',
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${table.name}.json`;
    link.click();
  };

  return (
    <button className="btn btn-sm btn-outline-secondary" onClick={handleExport}>
      Export JSON
    </button>
  );
};

export default ExportButton;