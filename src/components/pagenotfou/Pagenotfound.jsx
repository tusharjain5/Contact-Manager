import React from 'react';
import './PageNotFound.css';

const Pagenotfound = () => {
    return (
        <div className="not-found-container">
            <div className="not-found-content">
                <h1 className="not-found-header">404</h1>
                <h2 className="not-found-subheader">Oops! Page Not Found</h2>
                <p className="not-found-text">The page you are looking for does not exist.</p>
                <a href="/" className="not-found-button">Go to Home</a>
            </div>
        </div>
    );
};

export default Pagenotfound;
