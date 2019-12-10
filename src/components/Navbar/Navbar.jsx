import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
    const state = {
        links: [
            {
                title: 'News US',
                to: '/news',
            },
            {
                title: 'Ukraine News',
                to: '/ukraine-news',
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
