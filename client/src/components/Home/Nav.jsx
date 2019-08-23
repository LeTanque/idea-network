import React from 'react'

import { NavLink } from 'react-router-dom';



const Nav = () => {
    return (
        <div className="nav-link">
            
            <NavLink 
                to={'/'}
            >
                Home
            </NavLink>
            <NavLink 
                to={'/users'}
            >
                Users
            </NavLink>
            <NavLink 
                to={'/posts'}
            >
                Posts
            </NavLink>

        </div>
    );
}

export default Nav
