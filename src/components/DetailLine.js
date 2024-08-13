import React from 'react';
import './DetailLine.css';
import { Link } from 'react-router-dom';

const DetailLine = () => {
    return (
        
        <div className="detail-line">
            <Link to="/dashboard" className="detail-line-link">
                <div className="detail-item">User Details</div>
            </Link>

            <Link to="/centers" className="detail-line-link">
                <div className="detail-item">Center Details</div>
            </Link>

            <div className="detail-item">
                Sign Out 
                <span className="detail-forward-arrow">&#x2192;</span>
            </div>
        </div>
        
    );
}

export default DetailLine;
