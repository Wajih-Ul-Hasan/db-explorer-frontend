import React from 'react';

const ConnectionStatus = ({ isConnected }) => {
    return (
        <div className="connection-status fade-in">
            <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-3">
                    <span className={`status-indicator ${isConnected ? 'status-connected' : 'status-disconnected'}`}></span>
                    <i className="bi bi-server text-primary fs-4"></i>
                    <div>
                        <h6 className="mb-0">Database Status</h6>
                        <small className="text-muted">
                            {isConnected ? 'Connected and synchronized' : 'Connection lost'}
                        </small>
                    </div>
                </div>
                {isConnected && (
                    <span className="badge bg-success rounded-pill px-3 py-2">
                        <i className="bi bi-check-circle me-1"></i>
                        Live
                    </span>
                )}
            </div>
        </div>
    );
};

export default ConnectionStatus;