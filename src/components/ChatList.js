import React from 'react'
import {Link} from 'react-router-dom';

function ChatList({id, name, profileword, profileimg, profilebgimg, email, lastmsg, lasttime}) {
    return (
            <div class="chat_list_row" key={id}>
                <Link to="/chatting" state={{id, name, profileword, profileimg, profilebgimg, email, lastmsg, lasttime}}>
                    <span className="chats_img empty">
                        {profileimg ? <img src={profileimg} alt="" /> : ''}
                    </span>
                    <span className="chats_cont">
                        <span className="chats_name">{name}</span>
                        <span className="chats_latest">{lastmsg}</span>
                    </span>
                    <span className="chats_time"><span>{lasttime}</span></span>
                </Link>
            </div>
    )
}

export default ChatList
