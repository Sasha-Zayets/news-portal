import React from 'react';
import './Logo.scss';
import { Link } from 'react-router-dom';

const Logo = () => (
    <Link to="/" className="logo">My News</Link>
)

export default Logo;