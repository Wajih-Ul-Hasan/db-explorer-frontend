import React from 'react';
import { Card } from 'react-bootstrap';

const StatsDashboard = ({ stats }) => {
  return (
    <div className="d-flex flex-wrap gap-3 mb-4">
      {Object.entries(stats).map(([key, value]) => (
        <Card key={key} style={{ width: '12rem' }}>
          <Card.Body>
            <Card.Title className="text-capitalize">{key.replace(/([A-Z])/g, ' $1')}</Card.Title>
            <Card.Text className="fs-4 fw-bold">{value}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default StatsDashboard;
