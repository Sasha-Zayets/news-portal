import React from 'react';
import { Link } from 'react-router-dom';
import './Welcome.scss';

const Welcome = () => (
    <div className="welcome-block">
        <img 
            src="/static/images/welcome-featured-image.jpg" 
            className="welcome-block__image" 
            alt=""/>
        <Link to='/news' className="welcome-block__link">Read News</Link>
    </div>
)

export default Welcome;