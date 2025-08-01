import React, { useState } from 'react';

const ExportButton = ({ table }) => {
    const [isExporting, setIsExporting] = useState(false);

    const handleExport = (e) => {
        e.stopPropagation();
        setIsExporting(true);
        setTimeout(() => setIsExporting(false), 2000);
    };

    return (
        <button
            onClick={handleExport}
            disabled={isExporting}
            className="btn export-btn d-flex align-items-center gap-2"
        >
            <i className={`bi ${isExporting ? 'bi-arrow-repeat' : 'bi-download'} ${isExporting ? 'spin' : ''}`}></i>
            {isExporting ? 'Exporting...' : 'Export'}
        </button>
    );
};

export default ExportButton;