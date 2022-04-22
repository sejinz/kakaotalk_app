import React from 'react'
import Headerstatus from '../components/Headerstatus'
import Navigation from '../components/Navigation'
import friends from '../data/FriendList.json'
import FriendList from '../components/FriendList'
import {Link} from 'react-router-dom';
import '../styles/Headerstyle.scss'
import '../styles/Friends.scss'

function Friends() {
    const myinfo = friends[0];
    return (
        <>
        <header className="header header_main">
            <Headerstatus />
            <div className="title_bar">
                <h1>Friend <span>1</span></h1>
                <div className="left_item">
                    <Link to="#">Manage</Link>
                </div>
                <div className="right_item">
                    <Link to="#"><i className="fas fa-cog"></i></Link>
                </div>
            </div>
        </header>
        <main className="friend">
            <form className="search_box">
                <fieldset className="search_inner">
                    <legend className="blind">검색창</legend>
                    <i className="fas fa-search"></i>
                    <input type="search" name="search" id="search" placeholder="Find friends, chats, Plus Firends" />
                </fieldset>
            </form>
            <section className="main_section">
                <div className="section_header">
                    <h2>My Profile</h2>
                </div>
                <div className="myprofile">
                    <FriendList 
                        id = {myinfo.id} 
                        name = {myinfo.name} 
                        profileword = {myinfo.profileword} 
                        profileimg = {myinfo.profileimg} 
                        profilebgimg = {myinfo.profilebgimg} 
                        email = {myinfo.email}
                    />
                </div>
            </section>
            <section className="main_section">
                <div className="section_header">
                    <h2>Friends</h2>
                </div>
                <div className="friend_profile">
                    {friends.map(friend => {
                        if(friend.id != 0) {
                            return (
                                <FriendList 
                                    id = {friend.id} 
                                    name = {friend.name} 
                                    profileword = {friend.profileword} 
                                    profileimg = {friend.profileimg} 
                                    profilebgimg = {friend.profilebgimg} 
                                    email = {friend.email}
                                />
                            )
                        }
                    })}
                </div>
            </section>
        </main>
        <Navigation />
        </>
    )
}

export default Friends
