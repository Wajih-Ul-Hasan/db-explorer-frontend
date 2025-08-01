import React from 'react';
import { Badge } from 'react-bootstrap';

const ConnectionStatus = ({ isConnected }) => {
  return (
    <div className="mb-3">
      <strong>Connection:</strong>{' '}
      <Badge bg={isConnected ? "success" : "danger"}>
        {isConnected ? "Connected" : "Disconnected"}
      </Badge>
    </div>
  );
};

export default ConnectionStatus;
