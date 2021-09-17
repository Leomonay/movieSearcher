import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/movieIcon.png'

import './NavBar.css';

export default function NavBar() {
    return (
        <header className="navbar">
            <div>
                <img src={logo} className="logoApp" alt="" />
                <h1>Movie Searcher App</h1>
            </div>
            <a href='https://portfolio-leomonay.vercel.app/' target='_blank' rel="noreferrer" className='author'>
            by Leo Monay
            </a>
            <nav>
                <div className="list">
                        <NavLink className='navButton' activeClassName='activeLink' exact to="/" >
                            <h4>Home</h4>
                        </NavLink>
                        <NavLink className='navButton' activeClassName='activeLink' to="/favs" >
                            <h4>Favorites</h4>
                        </NavLink>
                </div>
            </nav>
        </header>
    )
}