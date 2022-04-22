import React from 'react'

function Header() {
    return (
        <div className="status_bar">
            <div className="left_item">
                <i className="fas fa-plane"></i><i className="fas fa-wifi"></i>
            </div>
            <div className="center_item">
                <span>04</span>:<span>23</span>
            </div>
            <div className="right_item">
                <i className="far fa-moon"></i><i className="fab fa-bluetooth-b"></i>
                <span><span>98</span>%</span>
                <i className="fas fa-battery-full"></i>
            </div>
        </div>
    )
}

export default Header
