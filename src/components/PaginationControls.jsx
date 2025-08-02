import React from 'react';

const PaginationControls = ({ page, pageSize, totalCount, onPageChange }) => {
  const totalPages = Math.ceil(totalCount / pageSize);
  return (
    <div className="d-flex justify-content-between align-items-center mt-3">
      <button
        className="btn btn-outline-primary"
        onClick={() => onPageChange(page - 1)}
        disabled={page === 1}
      >
        ◀ Prev
      </button>
      <span className="mx-3">
        Page {page} of {totalPages}
      </span>
      <button
        className="btn btn-outline-primary"
        onClick={() => onPageChange(page + 1)}
        disabled={page === totalPages}
      >
        Next ▶
      </button>
    </div>
  );
};

export default PaginationControls;