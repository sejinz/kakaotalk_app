import React from 'react'
import Headerstatus from '../components/Headerstatus'
import Navigation from '../components/Navigation'
import friends from '../data/FriendList.json'
import {Link} from 'react-router-dom';
import '../styles/Headerstyle.scss'
import '../styles/More.scss'

function More() {
    const myinfo = friends[0];
    const {id, name, profileword, profileimg, profilebgimg, email} = myinfo;
    return (
        <>
        <header className="header header_main">
            <Headerstatus />
            <div className="title_bar">
                <h1>More</h1>
                <div className="left_item"></div>
                <div className="right_item">
                    <Link to="#"><i className="fas fa-cog"></i></Link>
                </div>
            </div>
        </header>
        <main className="more">
            <section className="user_info">
                <h2 className="blind">사용자 정보</h2>
                <span className="profile_img empty">
                    {profileimg ? <img src={myinfo.profileimg} alt="" /> : ''}
                </span>
                <span className="profile_info">
                    <span className="profile_name">{myinfo.name}</span>
                    <span className="profile_email">{myinfo.email}</span>
                </span>
                <span className="chat_img"><a href="#"><i className="far fa-comment"></i></a></span>
            </section>
            <section className="user_menu">
                <h2 className="blind">사용자 메뉴</h2>
                <ul>
                    <li><Link to="#"><i className="far fa-smile"></i>Emoticons</Link></li>
                    <li><Link to="#"><i className="fas fa-paint-brush"></i>Themes</Link></li>
                    <li><Link to="#"><i className="far fa-hand-peace"></i>Plus Firends</Link></li>
                    <li><Link to="#"><i className="far fa-user-circle"></i>Account</Link></li>
                </ul>
            </section>
            <section className="plus_friends">
                <div className="section_header">
                    <h2>Plus Firends</h2>
                    <span><i className="fas fa-info-circle"></i> Learn More</span>
                </div>
                <ul className="plus_list">
                    <li><Link to="#"><i className="fas fa-utensils"></i>Order</Link></li>
                    <li><Link to="#"><i className="fas fa-home"></i>Store</Link></li>
                    <li><Link to="#"><i className="fas fa-tv"></i>TV Channel/Radio</Link></li>
                    <li><Link to="#"><i className="fas fa-pencil-alt"></i>Creation</Link></li>
                    <li><Link to="#"><i className="fas fa-graduation-cap"></i>Education</Link></li>
                    <li><Link to="#"><i className="fas fa-university"></i>Politics/Society</Link></li>
                    <li><Link to="#"><i className="fas fa-won-sign"></i>Finance</Link></li>
                    <li><Link to="#"><i className="fas fa-video"></i>Movies/Music</Link></li>
                </ul>
            </section>
            <section className="more_app">
                <h2 className="blind">앱 더보기</h2>
                <ul>
                    <li><Link to="#"><span className="app_icon"></span>kakao Story</Link></li>
                    <li><Link to="#"><span className="app_icon"></span>Path</Link></li>
                    <li><Link to="#"><span className="app_icon"></span>Kakao friends</Link></li>
                </ul>
            </section>
        </main>
        <Navigation />
        </>
    )
}

export default More
