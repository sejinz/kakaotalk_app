import React from 'react'
import {Link, NavLink} from 'react-router-dom';
import "./Navigation.scss"

function Navigation() {
    return (
        <nav className="tab-bar">
            <Link to="/">
                <i className="fas fa-user"></i>
                <span className="tab_name">Friends</span>
            </Link>
            <Link to="/chats">
                <i className="fas fa-comment"></i>
                <span className="tab_name">Chats</span>
            </Link>
            <Link to="/find">
                <i className="fas fa-search"></i>
                <span className="tab_name">Find</span>
            </Link>
            <Link to="/more">
                <i className="fas fa-ellipsis-h"></i>
                <span className="tab_name">More</span>
            </Link>
        </nav>
    )
}

export default Navigation;