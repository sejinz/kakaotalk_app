import React from 'react';
import Headerstatus from '../components/Headerstatus';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import '../styles/Chatting.scss';

function Chatting() {
    const location = useLocation();
    const navigate = useNavigate();

    if(location.state === undefined) {
        navigate('/');
    }
    const {id, name, profileword, profileimg, profilebgimg, email, lastmsg, lasttime} = location.state;

    return (
        <>
        <header className="header header_chatting">
            <Headerstatus />
            <div className="title_bar">
                <h1>{name}</h1>
                <div className="left_item">
                    <Link to="/chats"><i className="fas fa-angle-left"></i></Link>
                </div>
                <div className="right_item">
                    <i className="fas fa-search"></i><i className="fas fa-bars"></i>
                </div>
            </div>
        </header>
        <main className="chatting">
            <div className="chatting_list">
                <span className="date_info">Saturday, April 23, 2022</span>
                <div className="chat_box my">
                    <span className="chat">Hello!</span>
                    <span className="chat">Hello! This is a test message.</span>
                    <span className="chat">This is a test message.</span>
                    <span className="chat_time"><span>04</span>:<span>23</span></span>
                </div>
                {id != 0 ? 
                <div className="chat_box other">
                    <div className="other_info">
                        <span className="profile_img empty">
                            {profileimg ? <img src={profileimg} alt="" /> : ''}
                        </span>
                        <span className="profile_name">{name}</span>
                    </div>
                    <span className="chat">And this is an answer</span>
                    <span className="chat">And this is an answer And this is an answer</span>
                    <span className="chat">And this is an answer</span>
                    <span className="chat_time"><span>09</span>:<span>23</span></span>
                </div> : ""
                }
                {lastmsg ? 
                <div className="chat_box my" style={{marginTop:"30px"}}>
                    <span className="chat">{lastmsg}</span>
                    <span className="chat_time"><span>{lasttime}</span></span>
                </div>   
                : ""
                }
            </div>
        </main>
        <footer className="footer_chatting">
            <span className="plus_btn"><a href="#"><i className="fas fa-plus"></i></a></span>
            <form action="/" method="post">
                <fieldset className="text_box">
                    <legend className="blind">채팅 입력창</legend>
                    <label for="chatting" className="blind">채팅 입력</label>
                    <input type="text" id="chatting" className="text_field" />
                    <span className="emoticon_btn"><a href="#"><i className="far fa-smile"></i></a></span>
                    <span className="voice_btn"><a href="#"><i className="fas fa-microphone"></i></a></span>
                </fieldset>
            </form>
        </footer>
        </>
    )
}

export default Chatting
