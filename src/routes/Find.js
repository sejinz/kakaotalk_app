import React from 'react'
import Headerstatus from '../components/Headerstatus'
import Navigation from '../components/Navigation'
import {Link} from 'react-router-dom';
import '../styles/Headerstyle.scss'
import '../styles/Find.scss'

function Find() {
    return (
        <>
        <header className="header header_main">
            <Headerstatus />
            <div className="title_bar">
                <h1>Find</h1>
                <div className="left_item">
                    <Link to="#">Edit</Link>
                </div>
                <div className="right_item"></div>
            </div>
        </header>
        <main className="find">
            <ul className="find_method">
                <li><Link to="#"><i className="fas fa-address-book"></i>Find</Link></li>
                <li><Link to="#"><i className="fas fa-qrcode"></i>QR Code</Link></li>
                <li><Link to="#"><i className="fas fa-mobile-alt"></i>Shake</Link></li>
                <li><Link to="#"><i className="far fa-envelope"></i>Invite via SNS</Link></li>
            </ul>
            <section className="recommend_section">
                <div className="section_header"><h2>Recommended Friends</h2></div>
                <ul>
                    <li>You Have no recommended friends.</li>
                </ul>
            </section>
        </main>
        <Navigation />
        </>
    )
}

export default Find
