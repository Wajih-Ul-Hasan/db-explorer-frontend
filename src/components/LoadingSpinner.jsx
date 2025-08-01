import React from 'react';

const LoadingSpinner = ({ message }) => (
  <div className="text-center py-5">
    <div className="spinner-border text-primary mb-2" role="status" />
    <p>{message}</p>
  </div>
);

export default LoadingSpinner;