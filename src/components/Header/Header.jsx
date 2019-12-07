import React from 'react';
import './Header.scss';
import Navbar from '../Navbar/Navbar';
import Logo from '../Logo/Logo';

const Header = () => {
    return (
        <div className="header">
            <Logo />
            <Navbar />
        </div>
    )
}

export default Header;