import React from 'react';
import { Link } from 'react-router-dom';
import './Welcome.scss';

const Welcome = () => (
    <div className="welcome-block">
        <h1 className="welcome-block__title">Welcome</h1>
        <Link to='/news' className="welcome-block__link">Read News</Link>
    </div>
)

export default Welcome;