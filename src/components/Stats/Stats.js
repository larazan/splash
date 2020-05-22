import React from 'react';

import './styles.css';

const Stats = ({ stats }) => {
    if (!stats) {
        // loading not yet started
        return <span className="stats">loading ....</span>;
    }
    return (
        <span className="stats">
            {stats.error && ' Error!'}
            {stats.isLoading && ' Loading...'}
            {stats.download !== null && `🤘 ${stats.downloads}`}
        </span>
    );
};

export default Stats;
