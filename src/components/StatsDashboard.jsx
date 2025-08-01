import React from 'react';

const StatsDashboard = ({ stats }) => {
    const getIcon = (key, index) => {
        const icons = ['bi-table', 'bi-eye', 'bi-bar-chart', 'bi-clock'];
        const colors = ['primary', 'secondary', 'success', 'info'];
        return { icon: icons[index] || 'bi-graph-up', color: colors[index] || 'primary' };
    };

    return (
        <div className="row g-4 mb-4 fade-in">
            {Object.entries(stats).map(([key, value], index) => {
                const { icon, color } = getIcon(key, index);
                return (
                    <div key={key} className="col-lg-3 col-md-6">
                        <div className={`card stats-card glass-card ${color} h-100`}>
                            <div className="card-body text-center">
                                <div className={`stats-icon ${color} mx-auto`}>
                                    <i className={icon}></i>
                                </div>
                                <h2 className="card-title h3 mb-2 text-primary">{value}</h2>
                                <p className="card-text text-muted small text-capitalize mb-0">
                                    {key.replace(/([A-Z])/g, ' $1').toLowerCase()}
                                </p>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default StatsDashboard;