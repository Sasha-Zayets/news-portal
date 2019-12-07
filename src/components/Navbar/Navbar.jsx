import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
    const state = {
        links: [
            {
                title: 'news',
                to: '/news',
            },
            {
                title: 'other',
                to: '/other',
            },
            {
                title: 'article',
                to: '/article',
            }
        ]
    }
    return (
        <nav className="navbar">
            {
                state.links.map((link, index) => {
                    return (
                        <NavLink 
                            to={link.to} 
                            key={index}
                            className="navbar__link"
                            activeClassName="navbar__link--active">{ link.title }</NavLink>
                    )
                })
            }
        </nav>
    )
}

export default Navbar;
